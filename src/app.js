const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const shipsRoutes = require('./routes/ships.routes');
const planetsRoutes = require('./routes/planets.routes');
const missionsRoutes = require('./routes/missions.routes');
const adminRoutes = require('./routes/admin.routes');
const profileRoutes = require('./routes/profile.routes');

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: ['http://localhost:4200', 'http://localhost:4000', 'https://flotaimperial.onrender.com', 'https://*.onrender.com'],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Endpoint de salud simple
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/ships', shipsRoutes);
app.use('/api/planets', planetsRoutes);
app.use('/api/missions', missionsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/profile', profileRoutes);

module.exports = app;
