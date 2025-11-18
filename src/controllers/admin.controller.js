const { supabase } = require('../config/supabaseClient');

// GET /api/admin/dashboard
async function getDashboardStats(req, res) {
  try {
    const [usersCountRes, moviesCountRes, avgRatingRes] = await Promise.all([
      supabase.from('profiles').select('id', { count: 'exact', head: true }),
      supabase.from('movies').select('id', { count: 'exact', head: true }),
      supabase
        .from('reviews')
        .select('rating')
    ]);

    if (usersCountRes.error || moviesCountRes.error || avgRatingRes.error) {
      console.error('Error getting dashboard stats:', usersCountRes.error || moviesCountRes.error || avgRatingRes.error);
      return res.status(500).json({ message: 'Error al obtener estadísticas' });
    }

    const ratings = avgRatingRes.data || [];
    const avgRating = ratings.length
      ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
      : null;

    return res.json({
      usersCount: usersCountRes.count || 0,
      moviesCount: moviesCountRes.count || 0,
      averageRating: avgRating
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al obtener estadísticas', error: err.message });
  }
}

// GET /api/admin/users
async function listUsers(req, res) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, username, role, avatar_url, created_at');

    if (error) {
      console.error('Error listing users:', error);
      return res.status(500).json({ message: 'Error al obtener usuarios' });
    }

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al obtener usuarios', error: err.message });
  }
}

// PUT /api/admin/users/:id/role
async function updateUserRole(req, res) {
  const { id } = req.params;
  const { role } = req.body;

  if (!role || !['user', 'admin'].includes(role)) {
    return res.status(400).json({ message: 'role debe ser "user" o "admin"' });
  }

  try {
    const { data, error } = await supabase
      .from('profiles')
      .update({ role })
      .eq('id', id)
      .select('id, username, role')
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
// Implementación simple: usamos una columna extra opcional "banned" en profiles
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

// GET /api/admin/movies
async function listMoviesAdmin(req, res) {
  try {
    const { data, error } = await supabase
      .from('movies')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error listing movies for admin:', error);
      return res.status(500).json({ message: 'Error al obtener películas para admin' });
    }

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al obtener películas para admin', error: err.message });
  }
}

module.exports = {
  getDashboardStats,
  listUsers,
  updateUserRole,
  toggleUserBan,
  listMoviesAdmin
};
