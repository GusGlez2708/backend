const { supabase } = require('../config/supabaseClient');

// GET /api/missions
// Lista misiones. Puede filtrar por ship_id si se provee en la query.
async function listMissions(req, res) {
  const { ship_id } = req.query;

  try {
    let query = supabase.from('missions').select(`
      *,
      ship:ships(id, name, image_url),
      profile:profiles(id, username)
    `).order('created_at', { ascending: false });

    if (ship_id) {
      query = query.eq('ship_id', ship_id);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error listing missions:', error);
      return res.status(500).json({ message: 'Error al obtener misiones' });
    }

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al listar misiones', error: err.message });
  }
}

// GET /api/missions/:id
async function getMissionById(req, res) {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('missions')
      .select(`
        *,
        ship:ships(id, name, image_url),
        profile:profiles(id, username)
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error getting mission:', error);
      return res.status(404).json({ message: 'Misión no encontrada' });
    }

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al obtener la misión', error: err.message });
  }
}

// POST /api/missions
async function createMission(req, res) {
  const userId = req.user.sub;
  const { ship_id, title, description, status, due_date } = req.body;

  if (!ship_id || !title) {
    return res.status(400).json({ message: 'ship_id y title son requeridos' });
  }

  try {
    const { data, error } = await supabase
      .from('missions')
      .insert({ user_id: userId, ship_id, title, description, status, due_date })
      .select('*')
      .single();

    if (error) {
      console.error('Error creating mission:', error);
      return res.status(500).json({ message: 'Error al crear la misión' });
    }

    return res.status(201).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al crear la misión', error: err.message });
  }
}

// PUT /api/missions/:id
async function updateMission(req, res) {
  const userId = req.user.sub;
  const { id } = req.params;
  const { title, description, status, due_date } = req.body;

  try {
    // La política RLS de la DB se asegura de que solo el dueño pueda actualizar.
    const { data, error } = await supabase
      .from('missions')
      .update({ title, description, status, due_date })
      .eq('id', id)
      .eq('user_id', userId) // Doble verificación a nivel de API
      .select('*')
      .single();

    if (error) {
      console.error('Error updating mission:', error);
      return res.status(500).json({ message: 'Error al actualizar la misión. Asegúrate de que eres el creador.' });
    }

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al actualizar la misión', error: err.message });
  }
}

// DELETE /api/missions/:id
async function deleteMission(req, res) {
  const userId = req.user.sub;
  const { id } = req.params;

  try {
    // La política RLS de la DB se asegura de que solo el dueño pueda borrar.
    const { error } = await supabase
      .from('missions')
      .delete()
      .eq('id', id)
      .eq('user_id', userId); // Doble verificación

    if (error) {
      console.error('Error deleting mission:', error);
      return res.status(500).json({ message: 'Error al eliminar la misión. Asegúrate de que eres el creador.' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al eliminar la misión', error: err.message });
  }
}

module.exports = {
  listMissions,
  getMissionById,
  createMission,
  updateMission,
  deleteMission
};
