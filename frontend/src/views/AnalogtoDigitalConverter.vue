<template>
  <div class="adc-view">
    <button type="button" class="home-button" @click="$router.push('/')">
      <i class="fas fa-home"></i>
    </button>
    <h1>Konversi Analog ke Digital (ADC)</h1>
    <main>
      <div class="left-column">
        <figure>
          <img
            src="@/assets/adca.png"
            alt="Rangkaian Analod to Digital Converter (ADC)"
          />
          <figcaption>
            <p>Rangkaian Analod to Digital Converter (ADC)</p>
          </figcaption>
        </figure>
      </div>
      <div class="right-column">
        <label for="analogInput">Masukkan Nilai Analog (0.00 - 5.00V) :</label>
        <input
          type="number"
          id="analogInput"
          min="0"
          max="5"
          step="0.01"
          v-model="analogInput"
        />
        <button @click="convertAnalog">Konversi ke Digital</button>
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
    </main>
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
      const bitWidth = canvasWidth / 8; // Lebar untuk setiap bit (karena ada 8 bit)
      const centerY = canvasHeight / 2;

      // Menggambar Garis Grid Vertikal
      ctx.strokeStyle = "#3a3f47"; // Warna untuk garis grid (lebih gelap)
      ctx.lineWidth = 1; // Ketebalan garis grid

      for (let i = 1; i < 8; i++) {
        // Menggambar 7 garis untuk 8 bit
        const x = i * bitWidth;
        ctx.beginPath();
        ctx.moveTo(x, 0); // Dari atas canvas
        ctx.lineTo(x, canvasHeight); // Sampai bawah canvas
        ctx.stroke();
      }

      // Garis horizontal tengah (sumbu X)
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = "#5c6370";
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(canvasWidth, centerY);
      ctx.stroke();

      // Menggambar bentuk gelombang NRZ
      ctx.strokeStyle = "#00ff9d";
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

        // --- Menambahkan Teks Bit ---
        ctx.font = "bold 14px Arial"; // Ukuran dan jenis font
        ctx.fillStyle = "#ffffff"; // Warna teks
        ctx.textAlign = "center"; // Pusatkan teks secara horizontal
        ctx.textBaseline = "bottom"; // Posisikan teks di bagian bawah "kotak" teks

        // Hitung posisi X tengah untuk setiap bit
        const textX = startX + bitWidth / 2;
        // Posisikan teks sedikit di atas bagian atas canvas (misalnya 10px dari atas)
        const textY = 20; // Sesuaikan nilai ini sesuai kebutuhan Anda

        ctx.fillText(currentBit.toString(), textX, textY);
        // --- Akhir Teks Bit ---
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
  width: 80%;
  height: 60vh;
  margin: 40px auto 0 auto;
  padding: 2.5rem 2rem 2rem 2rem;
  background-color: #121212;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  position: relative;
}

body {
  font-family: "Segoe UI", Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #252829;
  color: #ffffff;
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

h1 {
  color: #ffffff;
  border-bottom: 2px solid #2d2d2d;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: center;
}

main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 60px;
}

.left-column {
  width: 40%;
  align-self: center;
}

.right-column {
  width: 60%;
  color: #ffffff;
}

figure {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

figcaption {
  margin-top: 1rem;
  color: #e0e0e0;
  font-style: italic;
  font-size: 1rem;
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
  background-color: #121212;
  color: #ffffff;
  font-size: 1em;
  margin-bottom: 10px;
}
button {
  padding: 10px 15px;
  background-color: #2196f3;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #4a9ca6;
}

.output-group {
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  align-items: flex-start;
  gap: 10px;
  margin: 10px auto;
}

.output-group p {
  margin: 8px 0;
}
.output-group span {
  font-weight: bold;
  color: #2196f3;
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
  color: #ffffff;
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
