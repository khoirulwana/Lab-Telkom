// controllers/adcController.js
exports.convertADC = (req, res) => {
  const { inputVoltage, vMin, vMax, quantizationLevels } = req.body;

  if (
    typeof inputVoltage !== "number" ||
    typeof vMin !== "number" ||
    typeof vMax !== "number" ||
    typeof quantizationLevels !== "number" ||
    vMax <= vMin ||
    quantizationLevels < 2
  ) {
    return res.status(400).json({ error: "Invalid input values." });
  }

  if (inputVoltage < vMin || inputVoltage > vMax) {
    return res.status(400).json({ error: "Input voltage out of range." });
  }

  const delta = (vMax - vMin) / quantizationLevels;
  const levelIndex = Math.floor((inputVoltage - vMin) / delta);

  const binaryCode = levelIndex.toString(2).padStart(8, "0");

  // Generate NRZ Polar signal: '1' => +1, '0' => -1
  const nrzSignal = binaryCode.split("").map((bit) => (bit === "1" ? 1 : -1));

  res.json({
    inputVoltage,
    quantizedLevel: levelIndex,
    binaryCode,
    nrzSignal,
  });
};
