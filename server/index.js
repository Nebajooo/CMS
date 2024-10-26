import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv"; // Changed require to import
import mongoose from "mongoose"; // Changed require to import
import dbconfig from "./config/db.js"; // Changed require to import
import adminRoutes from "./routes/adminRoutes.js"; // Changed require to import
import studentRoutes from "./routes/studentRoutes.js"; // Changed require to import
import facultyRoutes from "./routes/facultyRoutes.js"; // Changed require to import
import { addDummyAdmin } from "./controller/adminController.js"; // Changed require to import

dotenv.config(); // Ensure environment variables are loaded early

// Connect to MongoDB
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);

    // Log the MongoDB URI
    console.log("MongoDB URI:", dbconfig.connectionString);

    await mongoose.connect(dbconfig.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database successfully connected...");
  } catch (err) {
    console.error("Could not connect to database: " + err.message);
    process.exit(1); // Exit process with failure if connection fails
  }
};

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Define routes
app.use("/api/admin", adminRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/student", studentRoutes);

const PORT = process.env.PORT || 5001;
app.get("/", (req, res) => {
  res.send("Hello to collage ERP API");
});

// Start the server and connect to the database
connectDB().then(() => {
  addDummyAdmin(); // Ensure this runs after the database connection
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
