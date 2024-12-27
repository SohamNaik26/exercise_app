const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Routes
const exerciseRoutes = require("./routes/exercises");
const userRoutes = require("./routes/users");

app.use("/exercises", exerciseRoutes);
app.use("/users", userRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
