const { supabase } = require('../config/supabaseClient');

// GET /api/profile/stats (auth)
async function getProfileStats(req, res) {
  const userId = req.user.sub;
  console.log('📊 Obteniendo estadísticas para user:', userId);

  try {
    // Contar misiones
    const { count: missionsCount, error: missionError } = await supabase
      .from('missions')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId);

    if (missionError) {
      console.error('❌ Error contando misiones:', missionError);
    }

    // Contar planetas conquistados
    const { count: conqueredPlanetsCount, error: planetError } = await supabase
      .from('conquered_planets')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId);

    if (planetError) {
      console.error('❌ Error contando planetas conquistados:', planetError);
    }

    const stats = {
      totalMissions: missionsCount || 0,
      totalConqueredPlanets: conqueredPlanetsCount || 0,
    };

    console.log('✅ Estadísticas calculadas:', stats);
    return res.json(stats);
  } catch (err) {
    console.error('❌ Error catch en getProfileStats:', err);
    return res.status(500).json({ message: 'Error al obtener estadísticas', error: err.message });
  }
}

// PUT /api/profile (auth)
async function updateProfile(req, res) {
  const userId = req.user.sub;
  const { username, ship_id } = req.body;

  try {
    const updateData = {};
    if (username !== undefined) updateData.username = username;
    if (ship_id !== undefined) updateData.ship_id = ship_id;

    const { data, error } = await supabase
      .from('profiles')
      .update(updateData)
      .eq('id', userId)
      .select('*')
      .single();

    if (error) {
      console.error('Error updating profile:', error);
      return res.status(500).json({ message: 'Error al actualizar el perfil' });
    }

    return res.json(data);
  } catch (err) {
    console.error('Error interno al actualizar perfil:', err);
    return res.status(500).json({ message: 'Error interno al actualizar perfil', error: err.message });
  }
}

module.exports = {
  getProfileStats,
  updateProfile
};
