const { supabase } = require('../config/supabaseClient');

// GET /api/ships
// Soporta filtros por nombre (q), clase y fabricante
async function listShips(req, res) {
  const { q, ship_class, manufacturer } = req.query;

  try {
    let query = supabase.from('ships').select('*').order('created_at', { ascending: false });

    if (q) {
      query = query.ilike('name', `%${q}%`);
    }

    if (ship_class) {
      query = query.eq('class', ship_class);
    }

    if (manufacturer) {
      query = query.ilike('manufacturer', `%${manufacturer}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error listing ships:', error);
      return res.status(500).json({ message: 'Error al obtener naves' });
    }

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al listar naves', error: err.message });
  }
}

// GET /api/ships/:id
async function getShipById(req, res) {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('ships')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error getting ship:', error);
      return res.status(404).json({ message: 'Nave no encontrada' });
    }

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al obtener la nave', error: err.message });
  }
}

// POST /api/ships (admin)
async function createShip(req, res) {
  const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, hyperdrive_rating, class: ship_class, commander, image_url } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'name es requerido' });
  }

  try {
    const { data, error } = await supabase
      .from('ships')
      .insert({ name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, hyperdrive_rating, class: ship_class, commander, image_url })
      .select('*')
      .single();

    if (error) {
      console.error('Error creating ship:', error);
      return res.status(500).json({ message: 'Error al crear la nave' });
    }

    return res.status(201).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al crear la nave', error: err.message });
  }
}

// PUT /api/ships/:id (admin)
async function updateShip(req, res) {
  const { id } = req.params;
  const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, hyperdrive_rating, class: ship_class, commander, image_url } = req.body;

  try {
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (model !== undefined) updateData.model = model;
    if (manufacturer !== undefined) updateData.manufacturer = manufacturer;
    if (cost_in_credits !== undefined) updateData.cost_in_credits = cost_in_credits;
    if (length !== undefined) updateData.length = length;
    if (max_atmosphering_speed !== undefined) updateData.max_atmosphering_speed = max_atmosphering_speed;
    if (crew !== undefined) updateData.crew = crew;
    if (passengers !== undefined) updateData.passengers = passengers;
    if (cargo_capacity !== undefined) updateData.cargo_capacity = cargo_capacity;
    if (hyperdrive_rating !== undefined) updateData.hyperdrive_rating = hyperdrive_rating;
    if (ship_class !== undefined) updateData.class = ship_class;
    if (commander !== undefined) updateData.commander = commander;
    if (image_url !== undefined) updateData.image_url = image_url;


    const { data, error } = await supabase
      .from('ships')
      .update(updateData)
      .eq('id', id)
      .select('*')
      .single();

    if (error) {
      console.error('Error updating ship:', error);
      return res.status(500).json({ message: 'Error al actualizar la nave' });
    }

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al actualizar la nave', error: err.message });
  }
}

// DELETE /api/ships/:id (admin)
async function deleteShip(req, res) {
  const { id } = req.params;

  try {
    // La base de datos (Supabase con ON DELETE CASCADE) se encargará de borrar
    // los planetas y misiones asociados.
    const { error } = await supabase
      .from('ships')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting ship:', error);
      return res.status(500).json({ message: 'Error al eliminar la nave: ' + error.message });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: 'Error interno al eliminar la nave', error: err.message });
  }
}

module.exports = {
  listShips,
  getShipById,
  createShip,
  updateShip,
  deleteShip
};
