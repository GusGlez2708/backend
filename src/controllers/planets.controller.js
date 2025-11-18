const { supabase } = require('../config/supabaseClient');

// GET /api/planets/ship/:shipId
async function listPlanetsByShip(req, res) {
  const { shipId } = req.params;

  try {
    const { data, error } = await supabase
      .from('conquered_planets')
      .select(`
        *,
        profile:profiles(id, username)
      `)
      .eq('ship_id', shipId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error listing planets:', error);
      return res.status(500).json({ message: 'Error al obtener planetas' });
    }

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al listar planetas', error: err.message });
  }
}

// POST /api/planets
async function createPlanet(req, res) {
  const userId = req.user.sub;
  const { ship_id, name, region, sector, system, inhabitants, status_notes } = req.body;

  if (!ship_id || !name || !status_notes) {
    return res.status(400).json({ message: 'ship_id, name y status_notes son requeridos' });
  }

  try {
    const { data, error } = await supabase
      .from('conquered_planets')
      .insert({ user_id: userId, ship_id, name, region, sector, system, inhabitants, status_notes })
      .select('*')
      .single();

    if (error) {
      console.error('Error creating planet:', error);
      return res.status(500).json({ message: 'Error al registrar el planeta' });
    }

    return res.status(201).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al registrar el planeta', error: err.message });
  }
}

// PUT /api/planets/:id
async function updatePlanet(req, res) {
  const userId = req.user.sub;
  const { id } = req.params;
  const { name, region, sector, system, inhabitants, status_notes } = req.body;

  try {
    const updateData = { updated_at: new Date().toISOString() };
    if (name !== undefined) updateData.name = name;
    if (region !== undefined) updateData.region = region;
    if (sector !== undefined) updateData.sector = sector;
    if (system !== undefined) updateData.system = system;
    if (inhabitants !== undefined) updateData.inhabitants = inhabitants;
    if (status_notes !== undefined) updateData.status_notes = status_notes;

    // La política RLS de la DB se asegura de que solo el dueño pueda actualizar.
    const { data, error } = await supabase
      .from('conquered_planets')
      .update(updateData)
      .eq('id', id)
      .eq('user_id', userId) // Doble verificación
      .select('*')
      .single();

    if (error) {
      console.error('Error updating planet:', error);
      return res.status(500).json({ message: 'Error al actualizar el planeta. Asegúrate de que eres el creador.' });
    }

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al actualizar el planeta', error: err.message });
  }
}

// DELETE /api/planets/:id
async function deletePlanet(req, res) {
  const userId = req.user.sub;
  const { id } = req.params;

  try {
    // La política RLS de la DB se asegura de que solo el dueño pueda borrar.
    const { error } = await supabase
      .from('conquered_planets')
      .delete()
      .eq('id', id)
      .eq('user_id', userId); // Doble verificación

    if (error) {
      console.error('Error deleting planet:', error);
      return res.status(500).json({ message: 'Error al eliminar el planeta. Asegúrate de que eres el creador.' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al eliminar el planeta', error: err.message });
  }
}

module.exports = {
  listPlanetsByShip,
  createPlanet,
  updatePlanet,
  deletePlanet
};
