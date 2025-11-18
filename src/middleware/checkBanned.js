const { supabase } = require('../config/supabaseClient');

/**
 * Middleware para verificar si el usuario está baneado
 * Debe usarse después de authMiddleware
 */
async function checkBanned(req, res, next) {
  try {
    // Verificar que req.user existe (viene de authMiddleware)
    if (!req.user || !req.user.sub) {
      console.error('❌ checkBanned: req.user no está definido');
      return res.status(401).json({ message: 'No autenticado' });
    }

    const userId = req.user.sub; // Usar .sub en lugar de .id

    // Consultar el estado del usuario en la base de datos
    const { data, error } = await supabase
      .from('profiles')
      .select('banned')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      console.error('Error checking ban status:', error);
      return res.status(500).json({ message: 'Error al verificar estado del usuario' });
    }

    // Si el usuario está baneado, rechazar la petición
    if (data && data.banned === true) {
      return res.status(403).json({ 
        message: 'Tu cuenta ha sido suspendida. Contacta al administrador.',
        banned: true 
      });
    }

    // Usuario no está baneado, continuar
    next();
  } catch (err) {
    console.error('Error in checkBanned middleware:', err);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = checkBanned;
