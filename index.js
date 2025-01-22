require("dotenv").config();
const express = require("express");
const dbConnect = require("./db/db.connection");

const todoRoutes = require("./routes/todo.router");
const userRoutes = require("./routes/user.router");
const notificationRoutes = require("./routes/notification.router");

const app = express();

// Middleware
app.use(express.json());

// Database Connection
dbConnect();

// Routes
app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);
app.use("/api/notifications", notificationRoutes);

// Root Route
app.get("/", (req, res) => res.send("BEAM-BACKEND"));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));