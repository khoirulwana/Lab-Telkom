/** * Komponen Frequency Modulation (FM) * Menampilkan simulasi dan visualisasi
rangkaian modulasi frekuensi */
<template>
  <div class="high-pass-filter">
    <button type="button" class="home-button" @click="$router.push('/')">
      <i class="fas fa-home"></i>
    </button>
    <h1>MODULASI FREKUENSI</h1>
    <!-- <p>
      Modulasi frekuensi (FM) adalah teknik modulasi yang mengubah frekuensi
      sinyal pembawa sesuai dengan amplitudo sinyal informasi. Ini digunakan
      dalam radio FM, televisi, dan komunikasi nirkabel lainnya.
    </p> -->
    <main>
      <!-- Kolom Kiri - Input dan Rangkaian -->
      <div class="left-column">
        <!-- Diagram Rangkaian -->
        <figure>
          <img
            src="@/assets/ammod.png"
            alt="Diagram rangkaian Modulasi Frekuensi (FM)"
          />
          <figcaption>Skema Rangkaian Modulasi Frekuensi</figcaption>
        </figure>

        <div class="visual-graph-container">
          <h3>Kontrol Sinyal Input</h3>
          <div class="signal-graphs">
            <div class="signal-graph">
              <div class="graph-header">
                <h4>Sinyal Informasi</h4>
              </div>
              <label for="signal-freq">Frekuensi Sinyal (Hz):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="signal-freq-slider"
                  v-model.number="signalFreq"
                  min="1"
                  max="20000"
                  step="1"
                />
                <input
                  type="number"
                  id="signal-freq"
                  v-model.number="signalFreq"
                  placeholder="Frekuensi dalam Hz"
                />
              </div>

              <label for="freq-deviation">Deviasi Frekuensi Maks (Hz):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="freq-deviation-slider"
                  v-model.number="freqDeviation"
                  min="1"
                  max="10000"
                  step="1"
                />
                <input
                  type="number"
                  id="freq-deviation"
                  v-model.number="freqDeviation"
                  placeholder="Deviasi Frekuensi Maksimum"
                />
              </div>

              <label for="signal-amp">Amplitudo Sinyal (V):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="signal-amp-slider"
                  v-model.number="signalAmp"
                  min="0.1"
                  max="10"
                  step="0.1"
                />
                <input
                  type="number"
                  id="signal-amp"
                  v-model.number="signalAmp"
                  placeholder="Amplitudo dalam Volt"
                />
              </div>
            </div>
            <div class="signal-graph">
              <div class="graph-header">
                <h4>Sinyal Pembawa</h4>
              </div>
              <label for="carrier-freq">Frekuensi Pembawa (Hz):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="carrier-freq-slider"
                  v-model.number="carrierFreq"
                  min="1"
                  max="20000"
                  step="1"
                />
                <input
                  type="number"
                  id="carrier-freq"
                  v-model.number="carrierFreq"
                  placeholder="Frekuensi dalam Hz"
                />
              </div>
              <label for="carrier-amp">Amplitudo Pembawa (V):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="carrier-amp-slider"
                  v-model.number="carrierAmp"
                  min="0.1"
                  max="10"
                  step="0.1"
                />
                <input
                  type="number"
                  id="carrier-amp"
                  v-model.number="carrierAmp"
                  placeholder="Amplitudo dalam Volt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Kolom Kanan - Grafik -->
      <div class="right-column">
        <!-- Grafik Respons Frekuensi -->
        <div class="graph-container">
          <h3>Sinyal Termodulasi FM</h3>
          <canvas ref="frequencyResponse"></canvas>
        </div>
        <!-- Visualisasi Sinyal -->
        <div class="visual-graph-container">
          <h3>Visualisasi Sinyal</h3>
          <div class="signal-graphs">
            <div class="signal-graph">
              <div class="graph-header">
                <h4>Sinyal Informasi</h4>
                <div class="signal-info">
                  <div class="info-item">
                    <span class="label">Frekuensi:</span>
                    <span class="value">{{ signalFreq.toFixed(2) }} Hz</span>
                  </div>
                  <div class="info-item">
                    <span class="label">Amplitudo:</span>
                    <span class="value">{{ signalAmp.toFixed(2) }} V</span>
                  </div>
                </div>
              </div>
              <canvas ref="inputSignal"></canvas>
            </div>
            <div class="signal-graph">
              <div class="graph-header">
                <h4>Sinyal Sinyal Pembawa</h4>
                <div class="signal-info">
                  <div class="info-item">
                    <span class="label">Frekuensi:</span>
                    <span class="value">{{ carrierFreq.toFixed(2) }} Hz</span>
                  </div>
                  <div class="info-item">
                    <span class="label">Amplitudo:</span>
                    <span class="value">{{ carrierAmp.toFixed(2) }} V</span>
                  </div>
                </div>
              </div>
              <canvas ref="outputSignal"></canvas>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
/**
 * Komponen Frequency Modulation (FM)
 * Menyimulasikan dan memvisualisasikan sinyal informasi, sinyal pembawa,
 * serta sinyal termodulasi frekuensi (FM) secara real-time.
 */
import { ref, onMounted, onUnmounted } from "vue";
import { Chart, registerables } from "chart.js";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { watch } from "vue";

// Mendaftarkan komponen Chart.js
Chart.register(...registerables);

export default {
  name: "FrequencyModulation",
  setup() {
    // State for Amplitude Modulation
    const signalFreq = ref(5);
    const signalAmp = ref(0.2);
    const carrierFreq = ref(50);
    const carrierAmp = ref(0.2);
    const inputSignal = ref(null);
    const outputSignal = ref(null);
    const frequencyResponse = ref(null);
    let inputSignalChart = null;
    let outputSignalChart = null;
    let frequencyChart = null;
    let animationFrameId = null;
    let startTime = null;
    const freqDeviation = ref(50); // dalam Hz, bisa disesuaikan

    /**
     * Update chart untuk sinyal informasi (input)
     * @param {number} phaseOffset - Fase animasi (radian)
     * Window waktu mengikuti 5 siklus sinyal informasi
     */
    const updateInputSignalChart = (phaseOffset = 0) => {
      if (!inputSignalChart) return;
      const cyclesToShow = 5;
      const N = 3000;
      const durationInfo = cyclesToShow / signalFreq.value;
      const timePoints = Array.from(
        { length: N },
        (_, i) => (i * durationInfo) / N
      );
      const infoData = timePoints.map(
        (t) =>
          signalAmp.value *
          Math.sin(2 * Math.PI * signalFreq.value * t + phaseOffset)
      );
      inputSignalChart.data.labels = timePoints;
      inputSignalChart.data.datasets[0].data = infoData;
      inputSignalChart.update("none");
    };

    /**
     * Update chart untuk sinyal pembawa (carrier)
     * @param {number} phaseOffset - Fase animasi (radian)
     * Window waktu mengikuti 5 siklus sinyal carrier
     */
    const updateCarrierSignalChart = (phaseOffset = 0) => {
      if (!outputSignalChart) return;
      const cyclesToShow = 5;
      const N = 3000;
      const durationCarrier = cyclesToShow / carrierFreq.value;
      const timePoints = Array.from(
        { length: N },
        (_, i) => (i * durationCarrier) / N
      );
      const carrierData = timePoints.map(
        (t) =>
          carrierAmp.value *
          Math.sin(2 * Math.PI * carrierFreq.value * t + phaseOffset)
      );
      outputSignalChart.data.labels = timePoints;
      outputSignalChart.data.datasets[0].data = carrierData;
      outputSignalChart.update("none");
    };

    /**
     * Update chart untuk sinyal FM (modulasi frekuensi)
     * @param {number} phaseOffset - Fase animasi (radian)
     * Window waktu mengikuti 5 siklus sinyal carrier
     * Rumus: Ac * sin(2πfc t + β sin(2πfm t) + phaseOffset)
     * β = freqDeviation / signalFreq
     */
    const updateFMChart = (phaseOffset = 0) => {
      if (!frequencyChart) return;
      const cyclesToShow = 5;
      const N = 3000;
      const durationFM = cyclesToShow / carrierFreq.value;
      const timePoints = Array.from(
        { length: N },
        (_, i) => (i * durationFM) / N
      );
      const beta = freqDeviation.value / signalFreq.value;
      const fmData = timePoints.map(
        (t) =>
          carrierAmp.value *
          Math.sin(
            2 * Math.PI * carrierFreq.value * t +
              beta * Math.sin(2 * Math.PI * signalFreq.value * t) +
              phaseOffset
          )
      );
      frequencyChart.data.labels = timePoints;
      frequencyChart.data.datasets[0].data = fmData;
      frequencyChart.update("none");
    };

    /**
     * Fungsi animasi utama, memanggil update chart dengan phaseOffset
     * @param {DOMHighResTimeStamp} timestamp
     */
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const animationSpeed = 0.5;
      const phaseOffset =
        2 * Math.PI * carrierFreq.value * elapsed * animationSpeed;
      updateInputSignalChart(phaseOffset);
      updateCarrierSignalChart(phaseOffset);
      updateFMChart(phaseOffset);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Watcher terpisah
    watch([signalFreq, signalAmp], () => {
      updateInputSignalChart();
    });
    watch([carrierFreq, carrierAmp], () => {
      updateCarrierSignalChart();
    });
    watch(
      [signalFreq, signalAmp, carrierFreq, carrierAmp, freqDeviation],
      () => {
        updateFMChart();
      }
    );

    // Initialize charts
    const initializeCharts = () => {
      const freqCtx = frequencyResponse.value.getContext("2d");
      frequencyChart = new Chart(freqCtx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Sinyal FM (Domain Waktu)",
              data: [],
              borderColor: "#00ff9d",
              borderWidth: 2,
              fill: false,
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: { duration: 0 },
          plugins: { legend: { display: false } },
          scales: {
            x: {
              title: {
                display: true,
                text: "Waktu (s)",
                color: "#e0e0e0",
              },
              grid: { color: "rgba(255,255,255,0.1)" },
              ticks: { color: "#e0e0e0" },
            },
            y: {
              title: { display: true, text: "Amplitudo (V)", color: "#e0e0e0" },
              grid: { color: "rgba(255,255,255,0.1)" },
              ticks: { color: "#e0e0e0" },
            },
          },
        },
      });
      const inputCtx = inputSignal.value.getContext("2d");
      inputSignalChart = new Chart(inputCtx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Sinyal Informasi",
              data: [],
              borderColor: "#ff00ff",
              borderWidth: 2,
              fill: false,
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: { duration: 0 },
          plugins: { legend: { display: false } },
          scales: {
            x: {
              title: { display: true, text: "Waktu (s)", color: "#e0e0e0" },
              grid: { color: "rgba(255,255,255,0.1)" },
              ticks: { color: "#e0e0e0" },
            },
            y: {
              title: { display: true, text: "Amplitudo (V)", color: "#e0e0e0" },
              grid: { color: "rgba(255,255,255,0.1)" },
              ticks: { color: "#e0e0e0" },
            },
          },
        },
      });
      const outputCtx = outputSignal.value.getContext("2d");
      outputSignalChart = new Chart(outputCtx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Sinyal  Pembawa",
              data: [],
              borderColor: "#00ffff",
              borderWidth: 2,
              fill: false,
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: { duration: 0 },
          plugins: { legend: { display: false } },
          scales: {
            x: {
              title: { display: true, text: "Waktu (s)", color: "#e0e0e0" },
              grid: { color: "rgba(255,255,255,0.1)" },
              ticks: { color: "#e0e0e0" },
            },
            y: {
              title: { display: true, text: "Amplitudo (V)", color: "#e0e0e0" },
              grid: { color: "rgba(255,255,255,0.1)" },
              ticks: { color: "#e0e0e0" },
            },
          },
        },
      });
      updateInputSignalChart();
      updateCarrierSignalChart();
      updateFMChart();
    };

    onMounted(() => {
      initializeCharts();
      tippy("[data-tippy-content]", { animation: "scale", duration: 200 });
      animationFrameId = requestAnimationFrame(animate);
    });

    onUnmounted(() => {
      if (animationFrameId) {
        if (typeof animationFrameId === "number") {
          cancelAnimationFrame(animationFrameId);
        } else {
          clearTimeout(animationFrameId);
        }
      }
    });

    return {
      signalFreq,
      signalAmp,
      carrierFreq,
      carrierAmp,
      inputSignal,
      outputSignal,
      frequencyResponse,
      freqDeviation,
    };
  },
};
</script>

<style scoped>
/* Gaya untuk komponen High Pass Filter */
.high-pass-filter {
  padding: 2rem;
  width: 90%;
  border-radius: 12px;
  margin: 0 auto;
  color: #ffffff;
  background: #121212;
  min-height: 100vh;
}

.high-pass-filter h1 {
  margin: 0;
  padding: 1rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  border-bottom: 2px solid #2d2d2d;
  margin-bottom: 2rem;
}

main {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 2rem;
}

.left-column,
.right-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

figure {
  margin: 0;
  text-align: center;
}

figure img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
  border: 2px solid #2d2d2d;
}

figcaption {
  margin-top: 1rem;
  color: #e0e0e0;
  font-style: italic;
  font-size: 1rem;
}

.inputgroup-hasilperhitungan {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #e0e0e0;
  font-weight: 500;
  font-size: 1rem;
}

.input-with-slider {
  display: flex;
  gap: 1rem;
  align-items: center;
}

input[type="range"] {
  flex: 1;
  background: #1e1e1e;
  height: 6px;
  border-radius: 3px;
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid #3d3d3d;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  background: #2196f3;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(33, 150, 243, 0.4);
  transition: all 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #42a5f5;
  box-shadow: 0 0 12px rgba(33, 150, 243, 0.6);
}

input[type="number"] {
  width: 100px;
  padding: 0.5rem;
  border: 1px solid #3d3d3d;
  border-radius: 6px;
  background: #1e1e1e;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.2s ease;
}

input[type="number"]:focus {
  border-color: #2196f3;
  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);
  outline: none;
}

.controlpanel-hasilperhitungan {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2rem;
}

.control-panel {
  background: #1e1e1e;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  border: 2px solid #2d2d2d;
}

.control-panel h3 {
  margin: 0 0 1rem;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid #2d2d2d;
  padding-bottom: 0.5rem;
}

.output {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  background: #1e1e1e;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  border: 2px solid #2d2d2d;
}

.output > div {
  text-align: center;
  padding: 1rem;
  background: #252525;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid #2d2d2d;
}

.output > div:hover {
  background: #2a2a2a;
  transform: translateY(-2px);
  border-color: #2196f3;
}

.output p:first-child {
  margin: 0 0 0.5rem;
  color: #e0e0e0;
  font-size: 1rem;
}

.output p:last-child {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 500;
  color: #ffffff;
}

.output span {
  color: #2196f3;
  font-weight: 600;
}

.graph-container {
  background: #1e1e1e;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  height: 400px;
  position: relative;
  border: 2px solid #2d2d2d;
  display: flex;
  flex-direction: column;
}

.visual-graph-container {
  background: #1e1e1e;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  height: auto;
  position: relative;
  border: 2px solid #2d2d2d;
  display: flex;
  flex-direction: column;
}

.graph-container h3 {
  margin: 0 0 1.5rem;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #2d2d2d;
}

.signal-graphs {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  height: auto;
  padding: 1rem;
  background: #252525;
  border-radius: 8px;
  border: 2px solid #2d2d2d;
}

.signal-graph {
  height: 300px;
  background: #1e1e1e;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid #2d2d2d;
  display: flex;
  flex-direction: column;
}

.graph-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #2d2d2d;
}

.graph-header h4 {
  margin: 0;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
}

.signal-info {
  display: flex;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.info-item .label {
  color: #e0e0e0;
  font-size: 0.9rem;
}

.info-item .value {
  color: #2196f3;
  font-weight: 600;
  font-size: 0.9rem;
}

.info-item .value.above-cutoff {
  color: #4caf50;
}

.info-item .value.below-cutoff {
  color: #f44336;
}

.signal-graph canvas {
  flex: 1;
  width: 100% !important;
  height: calc(100% - 3rem) !important;
}

/* Responsif untuk layar kecil */
@media (max-width: 1200px) {
  main {
    grid-template-columns: 1fr;
  }

  .graph-container {
    height: 350px;
  }

  .signal-graphs {
    height: 300px;
  }

  .signal-graph {
    height: 250px;
  }
}

@media (max-width: 768px) {
  .high-pass-filter {
    padding: 1rem;
  }

  .signal-graphs {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    height: 300px;
  }

  .output {
    grid-template-columns: 1fr;
  }

  .graph-container {
    height: 300px;
  }

  .signal-graph {
    height: 200px;
  }
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
</style>
