/** * Komponen High Pass Filter Aktif * Menampilkan simulasi dan visualisasi
rangkaian High Pass Filter */
<template>
  <div class="high-pass-filter">
    <h1>HIGH PASS FILTER AKTIF</h1>
    <main>
      <!-- Kolom Kiri - Input dan Rangkaian -->
      <div class="left-column">
        <!-- Diagram Rangkaian -->
        <figure>
          <img
            src="@/assets/highpass1.png"
            alt="Diagram rangkaian High Pass Filter Aktif"
          />
          <figcaption>Rangkaian High Pass Filter Aktif</figcaption>
        </figure>

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
                  min="0.01"
                  max="10"
                  step="0.01"
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
                  min="0.01"
                  max="10"
                  step="0.01"
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
                  min="1000"
                  max="100000"
                  step="1000"
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
                  min="1000"
                  max="100000"
                  step="1000"
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
                  min="1000"
                  max="100000"
                  step="1000"
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
                  min="1000"
                  max="100000"
                  step="1000"
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

          <!-- Panel Kontrol Sinyal -->
          <div class="controlpanel-hasilperhitungan">
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
            </div>
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
        </div>
      </div>

      <!-- Kolom Kanan - Grafik -->
      <div class="right-column">
        <!-- Grafik Respons Frekuensi -->
        <div class="graph-container">
          <h3>Respons Frekuensi</h3>
          <canvas ref="frequencyResponse"></canvas>
        </div>

        <!-- Visualisasi Sinyal -->
        <div class="visual-graph-container">
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
/**
 * Komponen High Pass Filter
 * Mengimplementasikan simulasi dan visualisasi rangkaian High Pass Filter Aktif
 */
import { ref, onMounted, watch, onUnmounted } from "vue";
import { Chart, registerables } from "chart.js";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

// Mendaftarkan komponen Chart.js
Chart.register(...registerables);

export default {
  name: "HighPassFilter",
  setup() {
    // Variabel state
    const vin = ref(1);
    const c1 = ref(0.1);
    const c2 = ref(0.1);
    const r1 = ref(10000);
    const r2 = ref(10000);
    const r3 = ref(10000);
    const r4 = ref(10000);
    const signalFreq = ref(1000);
    const signalAmp = ref(1);
    const cutOffFreq = ref(0);
    const vout = ref(0);
    const gain = ref(0);
    const gainDB = ref(0);

    // Referensi untuk grafik
    const frequencyResponse = ref(null);
    const inputSignal = ref(null);
    const outputSignal = ref(null);

    // Instance grafik
    let frequencyChart = null;
    let inputSignalChart = null;
    let outputSignalChart = null;
    let animationFrameId = null;
    let startTime = null;

    /**
     * Memperbarui semua grafik
     * Menghitung dan menampilkan respons frekuensi serta sinyal
     */
    const updateCharts = () => {
      if (!frequencyChart || !inputSignalChart || !outputSignalChart) return;

      // Memperbarui grafik respons frekuensi
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

      // Memperbarui grafik sinyal dengan animasi yang lebih lambat
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        // Menghasilkan titik waktu untuk satu detik data
        const timePoints = Array.from({ length: 100 }, (_, i) => i / 100);

        // Menghasilkan sinyal input dengan pergeseran fase berdasarkan waktu
        // Memperlambat animasi dengan membagi elapsed dengan faktor 2
        const inputSignalData = timePoints.map((t) => {
          const phase = (elapsed / 2000) * signalFreq.value * 2 * Math.PI; // Dibagi 2000 untuk memperlambat
          return (
            signalAmp.value *
            Math.sin(2 * Math.PI * signalFreq.value * t + phase)
          );
        });

        // Menghasilkan sinyal output dengan pergeseran fase yang sama
        const outputSignalData = inputSignalData.map((input) => {
          const frequency = signalFreq.value;
          const currentGain =
            gain.value /
            Math.sqrt(1 + Math.pow(cutOffFreq.value / frequency, 2));
          return input * currentGain;
        });

        inputSignalChart.data.labels = timePoints;
        inputSignalChart.data.datasets[0].data = inputSignalData;
        inputSignalChart.update("none");

        outputSignalChart.data.labels = timePoints;
        outputSignalChart.data.datasets[0].data = outputSignalData;
        outputSignalChart.update("none");

        // Menggunakan requestAnimationFrame dengan interval yang lebih lama
        animationFrameId = setTimeout(() => {
          requestAnimationFrame(animate);
        }, 50); // Menambahkan delay 50ms antara setiap frame
      };

      // Memulai animasi jika belum berjalan
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    /**
     * Menghitung parameter rangkaian
     * Termasuk frekuensi cut-off, gain, dan tegangan output
     */
    const calculateParameters = () => {
      // Menghitung frekuensi cut-off
      cutOffFreq.value = 1 / (2 * Math.PI * r1.value * c1.value * 1e-6);

      // Menghitung gain
      gain.value = -r2.value / r1.value;

      // Menghitung gain dalam dB
      gainDB.value = 20 * Math.log10(Math.abs(gain.value));

      // Menghitung tegangan output
      vout.value = vin.value * gain.value;

      // Memperbarui grafik
      updateCharts();
    };

    // Menghitung parameter setiap kali nilai komponen berubah
    watch(
      [r1, r2, c1, vin, signalFreq, signalAmp],
      () => {
        calculateParameters();
      },
      { immediate: true }
    );

    /**
     * Menginisialisasi grafik
     * Membuat instance Chart.js untuk setiap grafik
     */
    const initializeCharts = () => {
      // Menginisialisasi grafik respons frekuensi
      const freqCtx = frequencyResponse.value.getContext("2d");
      frequencyChart = new Chart(freqCtx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Respons Frekuensi",
              data: [],
              borderColor: "#00ff9d",
              borderWidth: 2,
              fill: false,
              tension: 0.4,
              pointRadius: 3,
              pointHoverRadius: 6,
              pointBackgroundColor: "#00ff9d",
              pointBorderColor: "#ffffff",
              pointBorderWidth: 1,
              pointHoverBackgroundColor: "#00ff9d",
              pointHoverBorderColor: "#fff",
              pointHoverBorderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 0,
          },
          plugins: {
            legend: {
              position: "top",
              labels: {
                color: "#e0e0e0",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
            },
            tooltip: {
              mode: "index",
              intersect: false,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              titleColor: "#fff",
              bodyColor: "#e0e0e0",
              titleFont: {
                size: 14,
                weight: "bold",
              },
              bodyFont: {
                size: 13,
              },
              padding: 10,
              callbacks: {
                label: function (context) {
                  return `Gain: ${context.parsed.y.toFixed(2)} dB`;
                },
              },
            },
          },
          scales: {
            x: {
              type: "logarithmic",
              title: {
                display: true,
                text: "Frekuensi (Hz)",
                color: "#e0e0e0",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
                drawBorder: false,
              },
              ticks: {
                color: "#e0e0e0",
                font: {
                  size: 12,
                },
                callback: function (value) {
                  return value.toLocaleString();
                },
              },
            },
            y: {
              title: {
                display: true,
                text: "Gain (dB)",
                color: "#e0e0e0",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
                drawBorder: false,
              },
              ticks: {
                color: "#e0e0e0",
                font: {
                  size: 12,
                },
              },
            },
          },
        },
      });

      // Menginisialisasi grafik sinyal input
      const inputCtx = inputSignal.value.getContext("2d");
      inputSignalChart = new Chart(inputCtx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Sinyal Input",
              data: [],
              borderColor: "#ff00ff",
              borderWidth: 2,
              fill: false,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 4,
              pointHoverBackgroundColor: "#ff00ff",
              pointHoverBorderColor: "#fff",
              pointHoverBorderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 0,
          },
          layout: {
            padding: {
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            },
          },
          plugins: {
            legend: {
              position: "top",
              labels: {
                color: "#e0e0e0",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
            },
            tooltip: {
              mode: "index",
              intersect: false,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              titleColor: "#fff",
              bodyColor: "#e0e0e0",
              titleFont: {
                size: 14,
                weight: "bold",
              },
              bodyFont: {
                size: 13,
              },
              padding: 10,
              callbacks: {
                label: function (context) {
                  return `Amplitudo: ${context.parsed.y.toFixed(2)} V`;
                },
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Waktu (s)",
                color: "#e0e0e0",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
                drawBorder: false,
              },
              ticks: {
                color: "#e0e0e0",
                font: {
                  size: 12,
                },
                maxTicksLimit: 8,
              },
            },
            y: {
              title: {
                display: true,
                text: "Amplitudo (V)",
                color: "#e0e0e0",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
                drawBorder: false,
              },
              ticks: {
                color: "#e0e0e0",
                font: {
                  size: 12,
                },
              },
            },
          },
        },
      });

      // Menginisialisasi grafik sinyal output
      const outputCtx = outputSignal.value.getContext("2d");
      outputSignalChart = new Chart(outputCtx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Sinyal Output",
              data: [],
              borderColor: "#00ffff",
              borderWidth: 2,
              fill: false,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 4,
              pointHoverBackgroundColor: "#00ffff",
              pointHoverBorderColor: "#fff",
              pointHoverBorderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 0,
          },
          layout: {
            padding: {
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            },
          },
          plugins: {
            legend: {
              position: "top",
              labels: {
                color: "#e0e0e0",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
            },
            tooltip: {
              mode: "index",
              intersect: false,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              titleColor: "#fff",
              bodyColor: "#e0e0e0",
              titleFont: {
                size: 14,
                weight: "bold",
              },
              bodyFont: {
                size: 13,
              },
              padding: 10,
              callbacks: {
                label: function (context) {
                  return `Amplitudo: ${context.parsed.y.toFixed(2)} V`;
                },
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Waktu (s)",
                color: "#e0e0e0",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
                drawBorder: false,
              },
              ticks: {
                color: "#e0e0e0",
                font: {
                  size: 12,
                },
                maxTicksLimit: 8,
              },
            },
            y: {
              title: {
                display: true,
                text: "Amplitudo (V)",
                color: "#e0e0e0",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
                drawBorder: false,
              },
              ticks: {
                color: "#e0e0e0",
                font: {
                  size: 12,
                },
              },
            },
          },
        },
      });

      // Perhitungan awal
      calculateParameters();
    };

    onMounted(() => {
      initializeCharts();
      // Menginisialisasi tooltip
      tippy("[data-tippy-content]", {
        animation: "scale",
        duration: 200,
      });
    });

    // Membersihkan frame animasi saat komponen di-unmount
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
/* Gaya untuk komponen High Pass Filter */
.high-pass-filter {
  padding: 2rem;
  width: 90%;
  margin: 0 auto;
  color: #ffffff;
  background: #1a1a1a;
  min-height: 100vh;
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
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  border: 1px solid #333;
}

figcaption {
  margin-top: 1rem;
  color: #a0a0a0;
  font-style: italic;
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
  color: #ffffff;
  font-weight: 500;
  font-size: 0.95rem;
}

.input-with-slider {
  display: flex;
  gap: 1rem;
  align-items: center;
}

input[type="range"] {
  flex: 1;
  background: #2a2a2a;
  height: 6px;
  border-radius: 3px;
  -webkit-appearance: none;
  border: 1px solid #404040;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  background: #4a9eff;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(74, 158, 255, 0.4);
  transition: all 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #5fb0ff;
  box-shadow: 0 0 12px rgba(74, 158, 255, 0.6);
}

input[type="number"] {
  width: 100px;
  padding: 0.5rem;
  border: 1px solid #404040;
  border-radius: 6px;
  background: #2a2a2a;
  color: #ffffff;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

input[type="number"]:focus {
  border-color: #4a9eff;
  box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.2);
  outline: none;
}

.controlpanel-hasilperhitungan {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2rem;
}

.control-panel {
  background: #2a2a2a;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 1px solid #404040;
}

.control-panel h3 {
  margin: 0 0 1rem;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
}

.output {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  background: #2a2a2a;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 1px solid #404040;
}

.output > div {
  text-align: center;
  padding: 1rem;
  background: #333;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.output > div:hover {
  background: #3a3a3a;
  transform: translateY(-2px);
}

.output p:first-child {
  margin: 0 0 0.5rem;
  color: #a0a0a0;
  font-size: 0.9rem;
}

.output p:last-child {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff;
}

.output span {
  color: #4a9eff;
  font-weight: 600;
}

.graph-container {
  background: #2a2a2a;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  height: 400px;
  position: relative;
  border: 1px solid #404040;
  display: flex;
  flex-direction: column;
}

.visual-graph-container {
  background: #2a2a2a;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  height: auto;
  position: relative;
  border: 1px solid #404040;
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
  border-bottom: 2px solid #404040;
}

.signal-graphs {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  height: auto;
  padding: 1rem;
  background: #222;
  border-radius: 8px;
  border: 1px solid #404040;
}

.signal-graph {
  height: 300px;
  background: #2a2a2a;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #404040;
  display: flex;
  flex-direction: column;
}

.signal-graph h4 {
  margin: 0 0 1rem;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
}

.signal-graph canvas {
  flex: 1;
  width: 100% !important;
  height: calc(100% - 2rem) !important;
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
</style>
