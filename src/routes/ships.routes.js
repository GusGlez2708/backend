const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/isAdmin');
const shipsController = require('../controllers/ships.controller');

const router = express.Router();

router.get('/', shipsController.listShips);
router.get('/:id', shipsController.getShipById);
router.post('/', authMiddleware, isAdmin, shipsController.createShip);
router.put('/:id', authMiddleware, isAdmin, shipsController.updateShip);
router.delete('/:id', authMiddleware, isAdmin, shipsController.deleteShip);

module.exports = router;
