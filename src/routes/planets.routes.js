const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const checkBanned = require('../middleware/checkBanned');
const planetsController = require('../controllers/planets.controller');

const router = express.Router();

// Obtener todos los planetas para una nave específica
router.get('/ship/:shipId', planetsController.listPlanetsByShip);

// Proteger las siguientes rutas
router.use(authMiddleware, checkBanned);

// Crear un nuevo registro de planeta conquistado
router.post('/', planetsController.createPlanet);

// Actualizar un registro de planeta
router.put('/:id', planetsController.updatePlanet);

// Eliminar un registro de planeta
router.delete('/:id', planetsController.deletePlanet);

module.exports = router;

