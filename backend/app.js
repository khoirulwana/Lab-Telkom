const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const highPassFilterRoutes = require("./routes/highPassFilterRoutes");
const adcRoutes = require("./routes/adcRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use("/api/filter", highPassFilterRoutes);
app.use("/api/adc", adcRoutes);

// 👉 Serve file hasil build Vue (frontend)
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
