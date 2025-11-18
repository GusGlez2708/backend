function isAdmin(req, res, next) {
  // CORRECCIÓN: Cambiamos 'req.user.role' por 'req.user.rol'
  if (!req.user || req.user.rol !== 'admin') {
    return res.status(403).json({ message: 'Admin role required' });
  }

  next();
}

module.exports = isAdmin;