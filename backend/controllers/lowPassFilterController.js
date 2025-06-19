const math = require("mathjs");

exports.calculateLowPassFilter = (req, res) => {
  const { R, C, frequencies } = req.body;
  const results = frequencies.map((f) => {
    const omega = 2 * Math.PI * f;
    // Low Pass Filter gain formula (first order RC)
    const gain = 1 / Math.sqrt(1 + Math.pow(omega * R * C, 2));
    return { frequency: f, gain };
  });
  res.json(results);
};
