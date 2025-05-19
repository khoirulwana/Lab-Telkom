// backend/routes/highPassFilterRoutes.js
const express = require("express");
const router = express.Router();
const {
  calculateHighPassFilter,
} = require("../controllers/highPassFilterController");

router.post("/highpass", calculateHighPassFilter);

module.exports = router;
