<template>
  <div class="dac-view">
    <button type="button" class="home-button" @click="$router.push('/')">
      <i class="fas fa-home"></i>
    </button>
    <h1>Konversi Digital ke Analog (DAC)</h1>
    <figure
      data-tippy-content="Skema rangkaian DAC berbasis jaringan R/2R untuk konversi digital-ke-analog"
    >
      <img
        src="@/assets/daca.png"
        alt="Rangkaian Digital to Analog Converter (DAC)"
      />
      <figcaption>Rangkaian Digital to Analog Converter (DAC)</figcaption>
    </figure>
    <div
      class="input-group"
      data-tippy-content="Masukkan 8 bit biner (0/1) untuk dihitung nilai analognya"
    >
      <label for="binaryInput">Input Biner (8 digit 0/1):</label>
      <input
        type="text"
        id="binaryInput"
        maxlength="8"
        placeholder="Contoh: 10110010"
        v-model="binaryInput"
      />
      <button
        @click="convertDigital"
        data-tippy-content="Klik untuk mengonversi deret biner menjadi tegangan analog"
      >
        Konversi ke Analog
      </button>
    </div>
    <div
      class="output-group"
      data-tippy-content="Menampilkan nilai analog dan hasil rekuantisasi digital/analog"
    >
      <p>
        Nilai Analog Hasil Konversi: <span>{{ dacAnalogOutput }}</span>
      </p>
      <p>
        Nilai Digital Terkuantisasi Ulang:
        <span>{{ reQuantizedDigital }}</span>
      </p>
      <p>
        Nilai Analog Terkuantisasi Ulang:
        <span>{{ reQuantizedAnalog }}</span>
      </p>
      <div class="error-message" v-if="dacError">{{ dacError }}</div>
    </div>
  </div>
</template>

<script>
/**
 * Komponen konversi Digital ke Analog (DAC)
 * Menghitung tegangan analog dari 8 bit biner dan menampilkan hasil rekuantisasi
 */
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

export default {
  data() {
    return {
      binaryInput: "",
      dacAnalogOutput: 0,
      reQuantizedDigital: 0,
      reQuantizedAnalog: 0,
      dacError: "",
      STEP_SIZE: 0.0195,
      R1: 4.7,
      MAX_VOLTAGE: 5.0,
    };
  },
  methods: {
    convertDigital() {
      this.dacError = "";
      if (
        this.binaryInput.length !== 8 ||
        !/^[01]{8}$/.test(this.binaryInput)
      ) {
        this.dacError = "Input harus 8 digit biner (0 atau 1).";
        this.dacAnalogOutput = 0;
        this.reQuantizedDigital = 0;
        this.reQuantizedAnalog = 0;
        return;
      }
      let bits = this.binaryInput.split("").map(Number);
      let X_DAC = this.MAX_VOLTAGE / this.R1;
      let ySum =
        bits[0] / 2 +
        bits[1] / 4 +
        bits[2] / 8 +
        bits[3] / 16 +
        bits[4] / 32 +
        bits[5] / 64 +
        bits[6] / 128 +
        bits[7] / 256;
      let jNormalized = X_DAC * ySum;
      let kAnalogOutput = jNormalized * this.R1;
      let lReQuantizedDigital = Math.round(kAnalogOutput / this.STEP_SIZE);
      let nReQuantizedAnalog =
        lReQuantizedDigital * this.STEP_SIZE + this.STEP_SIZE / 2;
      this.dacAnalogOutput = kAnalogOutput.toFixed(5);
      this.reQuantizedDigital = lReQuantizedDigital;
      this.reQuantizedAnalog = nReQuantizedAnalog.toFixed(5);
    },
  },
  mounted() {
    tippy("[data-tippy-content]", {
      animation: "scale",
      duration: 200,
      theme: "light-border",
    });
  },
};
</script>

<style scoped>
.dac-view {
  width: 90%;
  border-radius: 12px;
  margin: 40px auto 0 auto;
  padding: 2.5rem 2rem 2rem 2rem;
  background-color: #121212;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
}

.dac-view h1 {
  margin: 0;
  padding: 1rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  border-bottom: 2px solid #2d2d2d;
  margin-bottom: 2rem;
}

body {
  font-family: "Segoe UI", Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #252829;
  color: #abb2bf;
  min-height: 100vh;
}

h1 {
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;
}
figure {
  text-align: center;
  margin: 20px 0;
}
figure img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
figure figcaption {
  color: #abb2bf;
  font-style: italic;
  margin-top: 10px;
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
  color: #ffffff;
}
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}
input[type="text"] {
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
  background-color: #42a5f5;
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.6);
}
.output-group p {
  margin: 8px 0;
}
.output-group span {
  font-weight: bold;
  color: #42a5f5;
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
@media (max-width: 600px) {
  .dac-view {
    padding: 1rem;
    max-width: 98vw;
  }
  input[type="text"] {
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
