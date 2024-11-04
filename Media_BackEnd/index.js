import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

import customerInquiryRoutes from "./routes/customerInquiryRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";
import verifyToken from "./middleware/authMiddleware.js";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(express.json()); // Alternative JSON parsing middleware

// Apply the middleware to protected routes
app.get('/api/protected-route', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Define the routes
app.use("/api/inquiries", customerInquiryRoutes);
app.use("/api/staff", staffRoutes);

// Sync the database and start the server
(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database synced successfully.");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();
