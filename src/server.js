const express = require('express');
require('dotenv').config();
const { connectDB, sequelize } = require('./config/db');
const mainRouter = require('./routes/index');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Swagger UI dokumentatsiyasi
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Asosiy router
app.use('/api', mainRouter);

const startServer = async () => {
  try {
    await connectDB();
    await sequelize.sync({ alter: true });
    
    app.listen(PORT, () => {
      console.log(`Server ${PORT}-portda ishga tushdi.`);
    });
  } catch (error) {
    console.error('Serverni ishga tushirishda xatolik:', error);
  }
};

startServer();