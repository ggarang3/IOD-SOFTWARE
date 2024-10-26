// server.js
import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database.js';
import bookRoutes from './routes/bookRoutes.js';

const app = express();

// app.use(bodyParser.json());
app.use(express.json()); // To parse JSON request body
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins or specify domain
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// API Routes
app.use('/api/book', bookRoutes);

// Sync the models and start the server
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
