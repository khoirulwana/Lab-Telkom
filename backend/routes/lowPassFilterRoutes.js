const {
  calculateLowPassFilter,
} = require("../controllers/lowPassFilterController");
router.post("/lowpass", calculateLowPassFilter);
