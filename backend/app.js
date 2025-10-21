// backend/app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const highPassFilterRoutes = require("./routes/highPassFilterRoutes");
const adcRoutes = require("./routes/adcRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes utama API
app.use("/api/filter", highPassFilterRoutes);
app.use("/api/adc", adcRoutes);

// Route default (optional tapi penting di Render)
app.get("/", (req, res) => {
  res.send("✅ Backend LabTelkom aktif di Render!");
});

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
