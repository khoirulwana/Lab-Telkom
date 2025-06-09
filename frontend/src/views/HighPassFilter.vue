<template>
  <div class="high-pass-filter">
    <main>
      <!-- Kolom Kiri - Input dan Rangkaian -->
      <div class="left-column">
        <div class="image-controlpanel">
          <!-- Diagram Rangkaian -->
          <figure>
            <img
              src="@/assets/highpass1.png"
              alt="Diagram rangkaian High Pass Filter Aktif"
            />
            <figcaption>Rangkaian High Pass Filter Aktif</figcaption>
          </figure>

          <!-- Panel Kontrol Sinyal -->
          <div class="control-panel">
            <h3>Kontrol Sinyal Input</h3>
            <!-- Kontrol Frekuensi -->
            <div
              class="input-group"
              data-tippy-content="Frekuensi sinyal input yang akan difilter"
            >
              <label for="signal-freq">Frekuensi Sinyal (Hz):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="signal-freq-slider"
                  v-model.number="signalFreq"
                  min="1"
                  max="1000"
                  step="1"
                />
                <input
                  type="number"
                  id="signal-freq"
                  v-model.number="signalFreq"
                  placeholder="Frekuensi dalam Hz"
                />
              </div>
            </div>
            <!-- Kontrol Amplitudo -->
            <div
              class="input-group"
              data-tippy-content="Amplitudo sinyal input"
            >
              <label for="signal-amp">Amplitudo Sinyal (V):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="signal-amp-slider"
                  v-model.number="signalAmp"
                  min="1"
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
          </div>
        </div>

        <div class="inputgroup-hasilperhitungan">
          <!-- Form Input Komponen -->
          <form @submit.prevent="submitForm">
            <!-- Input Tegangan -->
            <div
              class="input-group"
              data-tippy-content="Tegangan input yang akan difilter"
            >
              <label for="vin">Nilai Tegangan Input (V):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="vin-slider"
                  v-model.number="vin"
                  min="0"
                  max="12"
                  step="0.1"
                />
                <input
                  type="number"
                  id="vin"
                  v-model.number="vin"
                  placeholder="Masukkan nilai dalam Volt"
                />
              </div>
            </div>

            <!-- Input Kapasitor C1 -->
            <div
              class="input-group"
              data-tippy-content="Kapasitor input yang menentukan frekuensi cut-off"
            >
              <label for="c1">Nilai Kapasitor C1 (µF):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="c1-slider"
                  v-model.number="c1"
                  min="0.1"
                  max="100"
                  step="0.1"
                />
                <input
                  type="number"
                  id="c1"
                  v-model.number="c1"
                  placeholder="Masukkan nilai dalam mikroFarad"
                />
              </div>
            </div>

            <!-- Input Kapasitor C2 -->
            <div
              class="input-group"
              data-tippy-content="Kapasitor feedback yang membantu menstabilkan rangkaian"
            >
              <label for="c2">Nilai Kapasitor C2 (µF):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="c2-slider"
                  v-model.number="c2"
                  min="0.1"
                  max="100"
                  step="0.1"
                />
                <input
                  type="number"
                  id="c2"
                  v-model.number="c2"
                  placeholder="Masukkan nilai dalam mikroFarad"
                />
              </div>
            </div>

            <!-- Input Resistor R1 -->
            <div
              class="input-group"
              data-tippy-content="Resistor input yang menentukan frekuensi cut-off"
            >
              <label for="r1">Nilai Resistor R1 (Ω):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="r1-slider"
                  v-model.number="r1"
                  min="100"
                  max="1000000"
                  step="100"
                />
                <input
                  type="number"
                  id="r1"
                  v-model.number="r1"
                  placeholder="Masukkan nilai dalam Ohm"
                />
              </div>
            </div>

            <!-- Input Resistor R2 -->
            <div
              class="input-group"
              data-tippy-content="Resistor feedback yang menentukan gain rangkaian"
            >
              <label for="r2">Nilai Resistor R2 (Ω):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="r2-slider"
                  v-model.number="r2"
                  min="100"
                  max="1000000"
                  step="100"
                />
                <input
                  type="number"
                  id="r2"
                  v-model.number="r2"
                  placeholder="Masukkan nilai dalam Ohm"
                />
              </div>
            </div>

            <!-- Input Resistor R3 -->
            <div
              class="input-group"
              data-tippy-content="Resistor bias yang membantu menstabilkan op-amp"
            >
              <label for="r3">Nilai Resistor R3 (Ω):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="r3-slider"
                  v-model.number="r3"
                  min="100"
                  max="1000000"
                  step="100"
                />
                <input
                  type="number"
                  id="r3"
                  v-model.number="r3"
                  placeholder="Masukkan nilai dalam Ohm"
                />
              </div>
            </div>

            <!-- Input Resistor R4 -->
            <div
              class="input-group"
              data-tippy-content="Resistor bias yang membantu menstabilkan op-amp"
            >
              <label for="r4">Nilai Resistor R4 (Ω):</label>
              <div class="input-with-slider">
                <input
                  type="range"
                  id="r4-slider"
                  v-model.number="r4"
                  min="100"
                  max="1000000"
                  step="100"
                />
                <input
                  type="number"
                  id="r4"
                  v-model.number="r4"
                  placeholder="Masukkan nilai dalam Ohm"
                />
              </div>
            </div>
          </form>
          <!-- Hasil Perhitungan -->
          <div class="output">
            <div
              class="fc"
              data-tippy-content="Frekuensi di mana gain turun 3dB"
            >
              <p>Frekuensi Cut-Off</p>
              <p>
                <span>{{ cutOffFreq.toFixed(2) }}</span
                >Hz
              </p>
            </div>
            <div
              class="vout"
              data-tippy-content="Tegangan output setelah melewati filter"
            >
              <p>V Out</p>
              <p>
                <span>{{ vout.toFixed(2) }}</span
                >Volt
              </p>
            </div>
            <div
              class="vgain"
              data-tippy-content="Gain dalam bentuk rasio tegangan"
            >
              <p>Gain</p>
              <p>
                <span>{{ gain.toFixed(2) }}</span
                >Volt
              </p>
            </div>
            <div class="dBgain" data-tippy-content="Gain dalam desibel">
              <p>Gain</p>
              <p>
                <span>{{ gainDB.toFixed(2) }}</span
                >dB
              </p>
            </div>
          </div>
        </div>

        <!-- Panel Kontrol Sinyal -->
        <!--
        <div class="control-panel">
          <h3>Kontrol Sinyal Input</h3>
          ----(comment text)Kontrol Frekuensi
          <div
            class="input-group"
            data-tippy-content="Frekuensi sinyal input yang akan difilter"
          >
            <label for="signal-freq">Frekuensi Sinyal (Hz):</label>
            <div class="input-with-slider">
              <input
                type="range"
                id="signal-freq-slider"
                v-model.number="signalFreq"
                min="1"
                max="1000"
                step="1"
              />
              <input
                type="number"
                id="signal-freq"
                v-model.number="signalFreq"
                placeholder="Frekuensi dalam Hz"
              />
            </div>
          </div>
           ----(comment text) Kontrol Amplitudo----(comment text)
          <div class="input-group" data-tippy-content="Amplitudo sinyal input">
            <label for="signal-amp">Amplitudo Sinyal (V):</label>
            <div class="input-with-slider">
              <input
                type="range"
                id="signal-amp-slider"
                v-model.number="signalAmp"
                min="1"
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
        </div>
        -->
      </div>

      <!-- Kolom Kanan - Output dan Grafik -->
      <div class="right-column">
        <!-- Hasil Perhitungan -->
        <!--
        <div class="output">
          <div class="fc" data-tippy-content="Frekuensi di mana gain turun 3dB">
            <p>Frekuensi Cut-Off</p>
            <p>
              <span>{{ cutOffFreq.toFixed(2) }}</span
              >Hz
            </p>
          </div>
          <div
            class="vout"
            data-tippy-content="Tegangan output setelah melewati filter"
          >
            <p>V Out</p>
            <p>
              <span>{{ vout.toFixed(2) }}</span
              >Volt
            </p>
          </div>
          <div
            class="vgain"
            data-tippy-content="Gain dalam bentuk rasio tegangan"
          >
            <p>Gain</p>
            <p>
              <span>{{ gain.toFixed(2) }}</span
              >Volt
            </p>
          </div>
          <div class="dBgain" data-tippy-content="Gain dalam desibel">
            <p>Gain</p>
            <p>
              <span>{{ gainDB.toFixed(2) }}</span
              >dB
            </p>
          </div>
        </div>
        -->

        <!-- Grafik Respons Frekuensi -->
        <div class="graph-container">
          <h3>Respons Frekuensi</h3>
          <canvas ref="frequencyResponse"></canvas>
        </div>

        <!-- Visualisasi Sinyal -->
        <div class="graph-container">
          <h3>Visualisasi Sinyal</h3>
          <div class="signal-graphs">
            <div class="signal-graph">
              <h4>Sinyal Input</h4>
              <canvas ref="inputSignal"></canvas>
            </div>
            <div class="signal-graph">
              <h4>Sinyal Output</h4>
              <canvas ref="outputSignal"></canvas>
            </div>
          </div>
        </div>

        <!-- Panel Informasi Pembelajaran -->
        <!--
        <div class="info-panel">
          <h3>Informasi Pembelajaran</h3>
          <div class="info-content">
            <p>
              <strong>Frekuensi Cut-Off:</strong> Frekuensi di mana gain turun
              3dB dari gain maksimum.
            </p>
            <p>
              <strong>Gain:</strong> Perbandingan antara tegangan output dan
              input.
            </p>
            <p>
              <strong>Filter Aktif:</strong> Menggunakan op-amp untuk memperkuat
              sinyal dan membentuk respons frekuensi.
            </p>
            <div class="formula">
              <p>fc = 1 / (2π × R × C)</p>
              <p>Gain = -R2/R1</p>
            </div>
          </div>
        </div>
        -->
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted, watch, onUnmounted } from "vue";
import { Chart, registerables } from "chart.js";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

// Register Chart.js components
Chart.register(...registerables);

export default {
  name: "HighPassFilter",
  setup() {
    // State variables
    const vin = ref(0);
    const c1 = ref(0.1);
    const c2 = ref(0.1);
    const r1 = ref(1000);
    const r2 = ref(1000);
    const r3 = ref(1000);
    const r4 = ref(1000);
    const signalFreq = ref(10);
    const signalAmp = ref(1);
    const cutOffFreq = ref(0);
    const vout = ref(0);
    const gain = ref(0);
    const gainDB = ref(0);

    // Chart refs
    const frequencyResponse = ref(null);
    const inputSignal = ref(null);
    const outputSignal = ref(null);

    // Chart instances
    let frequencyChart = null;
    let inputSignalChart = null;
    let outputSignalChart = null;
    let animationFrameId = null;
    let startTime = null;

    const updateCharts = () => {
      if (!frequencyChart || !inputSignalChart || !outputSignalChart) return;

      // Update frequency response chart
      const frequencies = Array.from({ length: 100 }, (_, i) =>
        Math.pow(10, i / 10)
      );
      const gains = frequencies.map((f) => {
        const currentGain =
          gain.value / Math.sqrt(1 + Math.pow(cutOffFreq.value / f, 2));
        return 20 * Math.log10(Math.abs(currentGain));
      });

      frequencyChart.data.labels = frequencies;
      frequencyChart.data.datasets[0].data = gains;
      frequencyChart.update();

      // Update signal charts with animation
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        // Generate time points for one second of data
        const timePoints = Array.from({ length: 100 }, (_, i) => i / 100);

        // Generate input signal with phase shift based on elapsed time
        const inputSignalData = timePoints.map((t) => {
          const phase = (elapsed / 1000) * signalFreq.value * 2 * Math.PI;
          return (
            signalAmp.value *
            Math.sin(2 * Math.PI * signalFreq.value * t + phase)
          );
        });

        // Generate output signal with the same phase shift
        const outputSignalData = inputSignalData.map((input) => {
          const frequency = signalFreq.value;
          const currentGain =
            gain.value /
            Math.sqrt(1 + Math.pow(cutOffFreq.value / frequency, 2));
          return input * currentGain;
        });

        inputSignalChart.data.labels = timePoints;
        inputSignalChart.data.datasets[0].data = inputSignalData;
        inputSignalChart.update("none"); // Use 'none' for better performance

        outputSignalChart.data.labels = timePoints;
        outputSignalChart.data.datasets[0].data = outputSignalData;
        outputSignalChart.update("none"); // Use 'none' for better performance

        animationFrameId = requestAnimationFrame(animate);
      };

      // Start animation if not already running
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const calculateParameters = () => {
      // Calculate cut-off frequency
      cutOffFreq.value = 1 / (2 * Math.PI * r1.value * c1.value * 1e-6);

      // Calculate gain
      gain.value = -r2.value / r1.value;

      // Calculate gain in dB
      gainDB.value = 20 * Math.log10(Math.abs(gain.value));

      // Calculate output voltage
      vout.value = vin.value * gain.value;

      // Update charts
      updateCharts();
    };

    // Calculate parameters whenever component values change
    watch(
      [r1, r2, c1, vin, signalFreq, signalAmp],
      () => {
        calculateParameters();
      },
      { immediate: true }
    );

    const initializeCharts = () => {
      // Initialize frequency response chart
      const freqCtx = frequencyResponse.value.getContext("2d");
      frequencyChart = new Chart(freqCtx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Frequency Response",
              data: [],
              borderColor: "blue",
              fill: false,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // Disable animation for better performance
          },
          scales: {
            x: {
              type: "logarithmic",
              title: {
                display: true,
                text: "Frequency (Hz)",
              },
            },
            y: {
              title: {
                display: true,
                text: "Gain (dB)",
              },
            },
          },
        },
      });

      // Initialize signal charts
      const inputCtx = inputSignal.value.getContext("2d");
      inputSignalChart = new Chart(inputCtx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Input Signal",
              data: [],
              borderColor: "blue",
              fill: false,
              tension: 0.4,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // Disable animation for better performance
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Time (s)",
              },
            },
            y: {
              title: {
                display: true,
                text: "Amplitude (V)",
              },
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
              label: "Output Signal",
              data: [],
              borderColor: "green",
              fill: false,
              tension: 0.4,
            },
          ],
        },
        options: {
          animation: {
            duration: 0, // Disable animation for better performance
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Time (s)",
              },
            },
            y: {
              title: {
                display: true,
                text: "Amplitude (V)",
              },
            },
          },
        },
      });

      // Initial calculation
      calculateParameters();
    };

    onMounted(() => {
      initializeCharts();
      // Initialize tooltips
      tippy("[data-tippy-content]", {
        animation: "scale",
        duration: 200,
      });
    });

    // Cleanup animation frame on component unmount
    onUnmounted(() => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    });

    return {
      vin,
      c1,
      c2,
      r1,
      r2,
      r3,
      r4,
      signalFreq,
      signalAmp,
      cutOffFreq,
      vout,
      gain,
      gainDB,
      frequencyResponse,
      inputSignal,
      outputSignal,
    };
  },
};
</script>

<style scoped>
.high-pass-filter {
  padding: 2rem;
  width: 90%;
  margin: 0 auto;
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

.image-controlpanel {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

figure {
  margin: 0;
  text-align: center;
}

figure img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

figcaption {
  margin-top: 1rem;
  color: #666;
  font-style: italic;
}

.inputgroup-hasilperhitungan {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.input-with-slider {
  display: flex;
  gap: 1rem;
  align-items: center;
}

input[type="range"] {
  flex: 1;
}

input[type="number"] {
  width: 100px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.control-panel {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.control-panel h3 {
  margin: 0 0 1rem;
  color: #333;
}

.output {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.output > div {
  text-align: center;
}

.output p:first-child {
  margin: 0 0 0.5rem;
  color: #666;
  font-size: 0.9rem;
}

.output p:last-child {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
}

.output span {
  color: #2196f3;
  font-weight: 600;
}

.graph-container {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  min-height: 400px;
}

.graph-container h3 {
  margin: 0 0 1.5rem;
  color: #333;
  font-size: 1.2rem;
}

.signal-graphs {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  min-height: 350px;
}

.signal-graph {
  min-height: 300px;
}

.signal-graph h4 {
  margin: 0 0 1rem;
  color: #666;
  font-size: 1.1rem;
}

.info-panel {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.info-panel h3 {
  margin: 0 0 1rem;
  color: #333;
}

.info-content p {
  margin: 0 0 1rem;
  color: #666;
  line-height: 1.5;
}

.formula {
  background: #fff;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}

.formula p {
  margin: 0.5rem 0;
  font-family: monospace;
  color: #333;
}

@media (max-width: 1200px) {
  main {
    grid-template-columns: 1fr;
  }

  .graph-container {
    min-height: 350px;
  }

  .signal-graphs {
    min-height: 300px;
  }

  .signal-graph {
    min-height: 250px;
  }
}

@media (max-width: 768px) {
  .high-pass-filter {
    padding: 1rem;
  }

  .signal-graphs {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .output {
    grid-template-columns: 1fr;
  }

  .graph-container {
    min-height: 300px;
  }

  .signal-graph {
    min-height: 200px;
  }
}
</style>
