// backend/app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const highPassFilterRoutes = require("./routes/highPassFilterRoutes");
const adcRoutes = require("./routes/adcRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/filter", highPassFilterRoutes);
app.use("/api/adc", adcRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
