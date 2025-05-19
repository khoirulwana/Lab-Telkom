// backend/controllers/highPassFilterController.js
const math = require("mathjs");

exports.calculateHighPassFilter = (req, res) => {
  const { R, C, frequencies } = req.body;
  const results = frequencies.map((f) => {
    const omega = 2 * Math.PI * f;
    const gain = (omega * R * C) / Math.sqrt(1 + Math.pow(omega * R * C, 2));
    return { frequency: f, gain };
  });
  res.json(results);
};
