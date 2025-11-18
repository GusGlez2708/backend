const { supabase } = require('../config/supabaseClient');

// GET /api/admin/dashboard
async function getDashboardStats(req, res) {
  try {
    const [usersCountRes, moviesCountRes, avgRatingRes] = await Promise.all([
      supabase.from('profiles').select('id', { count: 'exact', head: true }),
      supabase.from('ships').select('id', { count: 'exact', head: true }), // Asegúrate de que sea 'ships' si ya migraste
      supabase.from('missions').select('id', { count: 'exact', head: true }) // Contar misiones para stats
    ]);

    // Contar planetas aparte
    const planetsCountRes = await supabase.from('conquered_planets').select('id', { count: 'exact', head: true });

    if (usersCountRes.error || moviesCountRes.error) {
      console.error('Error getting dashboard stats');
      return res.status(500).json({ message: 'Error al obtener estadísticas' });
    }

    return res.json({
      usersCount: usersCountRes.count || 0,
      shipsCount: moviesCountRes.count || 0,
      missionsCount: avgRatingRes.count || 0, // Usamos el slot de rating para misiones
      conqueredPlanetsCount: planetsCountRes.count || 0
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al obtener estadísticas', error: err.message });
  }
}

// GET /api/admin/users
async function listUsers(req, res) {
  try {
    // CORRECCIÓN AQUÍ: Cambiado 'role' por 'rol'
    const { data, error } = await supabase
      .from('profiles')
      .select('id, username, rol, banned, created_at') // <--- 'rol' es la clave
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error listing users:', error);
      return res.status(500).json({ message: 'Error al obtener usuarios: ' + error.message });
    }

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al obtener usuarios', error: err.message });
  }
}

// PUT /api/admin/users/:id/role
async function updateUserRole(req, res) {
  const { id } = req.params;
  // CORRECCIÓN AQUÍ: Recibimos 'rol' del frontend
  const { rol } = req.body; 

  if (!rol || !['user', 'admin'].includes(rol)) {
    return res.status(400).json({ message: 'rol debe ser "user" o "admin"' });
  }

  try {
    // CORRECCIÓN AQUÍ: Actualizamos la columna 'rol'
    const { data, error } = await supabase
      .from('profiles')
      .update({ rol: rol }) 
      .eq('id', id)
      .select('id, username, rol')
      .single();

    if (error) {
      console.error('Error updating user role:', error);
      return res.status(500).json({ message: 'Error al actualizar rol del usuario' });
    }

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al actualizar rol del usuario', error: err.message });
  }
}

// PUT /api/admin/users/:id/ban
async function toggleUserBan(req, res) {
  const { id } = req.params;

  try {
    // Obtener estado actual
    const { data: existing, error: fetchError } = await supabase
      .from('profiles')
      .select('id, username, banned')
      .eq('id', id)
      .single();

    if (fetchError || !existing) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const newBanned = !existing.banned;

    const { data, error } = await supabase
      .from('profiles')
      .update({ banned: newBanned })
      .eq('id', id)
      .select('id, username, banned')
      .single();

    if (error) {
      console.error('Error toggling user ban:', error);
      return res.status(500).json({ message: 'Error al actualizar estado de ban' });
    }

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al actualizar estado de ban', error: err.message });
  }
}

// GET /api/admin/movies (Redirige a ships controller si es necesario, o se elimina si no se usa)
// Dejamos un placeholder o reutilizamos la lógica de naves si la ruta existe
async function listMoviesAdmin(req, res) {
    // Esta función parece ser un vestigio, pero si la ruta la llama:
    return res.json([]); 
}

module.exports = {
  getDashboardStats,
  listUsers,
  updateUserRole,
  toggleUserBan,
  listMoviesAdmin
};