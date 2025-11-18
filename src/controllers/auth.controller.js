const { supabase, supabaseAdmin } = require('../config/supabaseClient');
const jwt = require('jsonwebtoken');

async function register(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'username, email y password son requeridos' });
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'El formato del email no es válido. Usa un email real como usuario@gmail.com' });
  }

  // Validar longitud de password
  if (password.length < 6) {
    return res.status(400).json({ message: 'La contraseña debe tener al menos 6 caracteres' });
  }

  try {
    // Crear usuario en Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username
        }
      }
    });

    if (error) {
      console.error('Supabase signUp error:', error);
      
      // Mensajes de error más amigables
      if (error.message.includes('email') || error.code === 'email_address_invalid') {
        return res.status(400).json({ 
          message: 'Email inválido. Por favor usa un email real como usuario@gmail.com o usuario@outlook.com' 
        });
      }
      
      if (error.message.includes('already registered') || error.code === 'user_already_exists') {
        return res.status(400).json({ message: 'Este email ya está registrado' });
      }
      
      return res.status(400).json({ message: error.message });
    }

    // La creación del perfil ahora es manejada por el trigger en la base de datos.
    // Ya no es necesario insertar el perfil manualmente desde aquí.

    return res.status(201).json({ message: 'Usuario registrado exitosamente.' });
  } catch (err) {
    return res.status(500).json({ message: 'Error interno en el registro', error: err.message });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'email y password son requeridos' });
  }

  try {
    // Autenticar con Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error || !data.user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const user = data.user;
    console.log('✅ Usuario autenticado:', user.id, user.email);

    // Obtener perfil para saber el rol, username y estado de ban
    console.log('🔍 Buscando perfil para user ID:', user.id);
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('username, rol, banned')
      .eq('id', user.id)
      .maybeSingle();

    console.log('📊 Resultado de búsqueda de perfil:', { profile, profileError });

    if (profileError) {
      console.error('❌ Error al obtener perfil:', profileError);
      return res.status(400).json({ message: 'Error al obtener perfil: ' + profileError.message });
    }

    if (!profile) {
      console.error('❌ Perfil no encontrado para user ID:', user.id);
      return res.status(400).json({ message: 'Perfil no encontrado. Por favor contacta al administrador.' });
    }

    console.log('✅ Perfil encontrado:', profile);

    // Verificar si el usuario está baneado
    if (profile.banned === true) {
      return res.status(403).json({ 
        message: 'Tu cuenta ha sido suspendida. Contacta al administrador.',
        banned: true 
      });
    }

    const payload = {
      sub: user.id,
      email: user.email,
      username: profile.username,
      rol: profile.rol
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
    );

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        username: profile.username,
        rol: profile.rol
      }
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error interno en el login', error: err.message });
  }
}

async function forgotPassword(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'email es requerido' });
  }

  try {
    const redirectTo = process.env.PASSWORD_RESET_REDIRECT_URL || undefined;

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo
    });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    return res.json({ message: 'Si el email existe, se ha enviado un enlace de recuperación' });
  } catch (err) {
    return res.status(500).json({ message: 'Error interno en la recuperación de contraseña', error: err.message });
  }
}

module.exports = { register, login, forgotPassword };
