// routes/adcRoutes.js
const express = require("express");
const router = express.Router();
const { convertADC } = require("../controllers/adcController");

router.post("/adc", convertADC);

module.exports = router;
