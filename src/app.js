const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

app.disable('x-powered-by');
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
  })
);
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      message: 'Too many requests, please try again later.',
    },
  })
);

const mongoUri = process.env.MONGODB_URI;

if (mongoUri) {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
      autoIndex: true,
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error.message);
    });
} else {
  console.warn('MONGODB_URI not configured. MongoDB features will be unavailable until it is set.');
}

require('./models/brand');
require('./models/car');

const indexRoute = require('./routes/index-route');
const healthRoute = require('./routes/health-route');
const carRoute = require('./routes/car-route');
const brandRoute = require('./routes/brand-route');
const swaggerRoute = require('./routes/swagger');

app.use('/', indexRoute);
app.use('/health', healthRoute);
app.use('/cars', carRoute);
app.use('/brands', brandRoute);
app.use('/swagger', swaggerRoute);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  console.error(error);
  res.status(500).json({ message: 'Falha ao processar sua requisição.' });
});

module.exports = app;