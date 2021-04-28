const express = require("express");
const connectDB = require("./db");
const path = require("path");
const CORS = require("cors");
require("dotenv").config();

// Initialize Express server
const app = express();

// Connect Database
connectDB();

// Initialize Middleware
app.use(express.json());
app.use(CORS());

// Define Routes
app.use("/api/users", require("./api_routes/users"));
app.use("/api/auth", require("./api_routes/auth"));
app.use("/api/profile", require("./api_routes/profile"));

// Serve static assets in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("frontend/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
