const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const checkBanned = require('../middleware/checkBanned');
const missionsController = require('../controllers/missions.controller');

const router = express.Router();

// Proteger todas las rutas de misiones
router.use(authMiddleware, checkBanned);

// Obtener todas las misiones (puede ser de una nave específica o de un usuario)
router.get('/', missionsController.listMissions);

// Crear una nueva misión
router.post('/', missionsController.createMission);

// Obtener una misión específica por su ID
router.get('/:id', missionsController.getMissionById);

// Actualizar una misión que pertenece al usuario
router.put('/:id', missionsController.updateMission);

// Eliminar una misión que pertenece al usuario
router.delete('/:id', missionsController.deleteMission);

module.exports = router;

