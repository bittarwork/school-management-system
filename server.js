// server.js
const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();

app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/materials", require("./routes/materialRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));
app.use("/api/exams", require("./routes/examRoutes"));
app.use("/api/examResults", require("./routes/examResultRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
