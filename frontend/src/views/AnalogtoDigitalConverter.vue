<template>
  <div class="adc-view">
    <button type="button" class="home-button" @click="$router.push('/')">
      <i class="fas fa-home"></i>
    </button>
    <h2>Konversi Analog ke Digital (ADC)</h2>
    <div class="input-group">
      <label for="analogInput">Nilai Analog (0.00 - 5.00V):</label>
      <input
        type="number"
        id="analogInput"
        min="0"
        max="5"
        step="0.01"
        v-model="analogInput"
      />
      <button @click="convertAnalog">Konversi ke Digital</button>
    </div>
    <div class="output-group">
      <p>
        Nilai Analog Terkuantisasi:
        <span>{{ quantizedAnalog }}</span>
      </p>
      <p>
        Nilai Digital (Desimal): <span>{{ digitalDecimal }}</span>
      </p>
      <p>
        Representasi Biner (8-bit): <span>{{ binaryOutput }}</span>
      </p>
      <div class="error-message" v-if="adcError">{{ adcError }}</div>
    </div>
    <div class="plot-container">
      <h3>Output Polar NRZ</h3>
      <canvas ref="nrzPlot"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      analogInput: 0.0,
      quantizedAnalog: 0,
      digitalDecimal: 0,
      binaryOutput: "00000000",
      adcError: "",
      STEP_SIZE: 0.0195,
      R1: 4.7,
      MAX_VOLTAGE: 5.0,
    };
  },
  methods: {
    convertAnalog() {
      this.adcError = "";
      let inputValue = parseFloat(this.analogInput);
      if (
        isNaN(inputValue) ||
        inputValue < 0 ||
        inputValue > this.MAX_VOLTAGE
      ) {
        this.adcError = `Input harus angka antara 0.00 dan ${this.MAX_VOLTAGE.toFixed(
          2
        )}.`;
        this.quantizedAnalog = 0;
        this.digitalDecimal = 0;
        this.binaryOutput = "00000000";
        this.drawNRZPlot();
        return;
      }
      let k = inputValue / this.STEP_SIZE;
      let l = Math.round(k);
      if (
        inputValue > 4.98 &&
        l === Math.round(this.MAX_VOLTAGE / this.STEP_SIZE)
      ) {
        l = l - 1;
      }
      let mAdjusted = l * this.STEP_SIZE + this.STEP_SIZE / 2;
      l = Math.max(0, Math.min(l, 255));
      this.quantizedAnalog = mAdjusted.toFixed(5);
      this.digitalDecimal = l;
      this.binaryOutput = l.toString(2).padStart(8, "0");
      this.drawNRZPlot();
    },
    drawNRZPlot() {
      const canvas = this.$refs.nrzPlot;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const binaryBits = this.binaryOutput.split("").map(Number);
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const bitWidth = canvasWidth / 8;
      const centerY = canvasHeight / 2;
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = "#f0c674";
      ctx.beginPath();
      ctx.strokeStyle = "#5c6370";
      ctx.moveTo(0, centerY);
      ctx.lineTo(canvasWidth, centerY);
      ctx.stroke();
      ctx.strokeStyle = "#f0c674";
      for (let n = 0; n < binaryBits.length; n++) {
        const currentBit = binaryBits[n];
        const nextBit = binaryBits[n + 1];
        const startX = n * bitWidth;
        const endX = (n + 1) * bitWidth;
        let startY, endY;
        if (currentBit === 0) {
          startY = centerY + canvasHeight * 0.3;
          endY = centerY + canvasHeight * 0.3;
        } else {
          startY = centerY - canvasHeight * 0.3;
          endY = centerY - canvasHeight * 0.3;
        }
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        if (nextBit !== undefined && currentBit !== nextBit) {
          ctx.beginPath();
          ctx.moveTo(endX, startY);
          if (nextBit === 0) {
            ctx.lineTo(endX, centerY + canvasHeight * 0.3);
          } else {
            ctx.lineTo(endX, centerY - canvasHeight * 0.3);
          }
          ctx.stroke();
        }
      }
    },
  },
  mounted() {
    this.drawNRZPlot();
    window.addEventListener("resize", this.drawNRZPlot);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.drawNRZPlot);
  },
};
</script>

<style scoped>
.adc-view {
  max-width: 600px;
  margin: 40px auto 0 auto;
  padding: 2.5rem 2rem 2rem 2rem;
  background-color: #23272e;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  position: relative;
}
body {
  font-family: "Segoe UI", Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #282c34;
  color: #abb2bf;
  min-height: 100vh;
}
.home-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px;
  border-radius: 50%;
  border: none;
  background-color: #2196f3;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.4);
}
.home-button:hover {
  background-color: #42a5f5;
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.6);
}
.home-button i {
  font-size: 1.2rem;
}
h2 {
  color: #c678dd;
  border-bottom: 2px solid #56b6c2;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: center;
}
.input-group,
.output-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}
input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #5c6370;
  border-radius: 5px;
  background-color: #353b45;
  color: #abb2bf;
  font-size: 1em;
  margin-bottom: 10px;
}
button {
  padding: 10px 15px;
  background-color: #56b6c2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #4a9ca6;
}
.output-group p {
  margin: 8px 0;
}
.output-group span {
  font-weight: bold;
  color: #98c379;
}
.error-message {
  color: #e06c75;
  background-color: #4b2a2e;
  border: 1px solid #e06c75;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  display: block;
}
.plot-container {
  margin-top: 25px;
  text-align: center;
}
.plot-container h3 {
  color: #61afef;
  margin-bottom: 15px;
}
canvas {
  background-color: #1e2127;
  border: 1px solid #5c6370;
  border-radius: 5px;
  width: 100%;
  height: 200px;
}
@media (max-width: 600px) {
  .adc-view {
    padding: 1rem;
    max-width: 98vw;
  }
  input[type="number"] {
    width: 100%;
    margin-right: 0;
  }
  button {
    width: 100%;
    margin-top: 10px;
  }
  .input-group {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
