<template>
  <div class="low-pass-filter">
    <button type="button" class="home-button" @click="$router.push('/')">
      <i class="fas fa-home"></i>
    </button>
    <h1>LOW PASS FILTER AKTIF</h1>
    <main>
      <div class="left-column">
        <figure>
          <img
            src="@/assets/lowpass1.png"
            alt="Diagram rangkaian Low Pass Filter Aktif"
          />
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
              <!-- Input Faktor Q -->
              <div
                class="input-group"
                data-tippy-content="Faktor kualitas yang menentukan karakteristik filter"
              >
                <label for="q">Faktor Q:</label>
                <div class="input-with-slider">
                  <input
                    type="range"
                    id="q-slider"
                    v-model.number="Q"
                    min="0.1"
                    max="10"
                    step="0.01"
                  />
                  <input
                    type="number"
                    id="q"
                    v-model.number="Q"
                    placeholder="Masukkan nilai Q"
                  />
                </div>
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
                <span>{{ cutOffFreq.toFixed(2) }}</span> Hz
              </p>
            </div>
            <div
              class="vout"
              data-tippy-content="Tegangan output setelah melewati filter"
            >
              <p>V Out</p>
              <p>
                <span>{{ vout.toFixed(2) }}</span> Volt
              </p>
            </div>
            <div
              class="vgain"
              data-tippy-content="Gain dalam bentuk rasio tegangan"
            >
              <p>Gain</p>
              <p>
                <span>{{ gain.toFixed(2) }}</span> Volt
              </p>
            </div>
            <div class="dBgain" data-tippy-content="Gain dalam desibel">
              <p>Gain</p>
              <p>
                <span>{{ gainDB.toFixed(2) }}</span> dB
              </p>
            </div>
          </div>
        </div>
      </div>
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
              <div class="graph-header">
                <h4>Sinyal Input</h4>
                <div class="signal-info">
                  <div class="info-item">
                    <span class="label">Frekuensi:</span>
                    <span class="value">{{ signalFreq.toFixed(2) }} Hz</span>
                  </div>
                  <div class="info-item">
                    <span class="label">Amplitudo:</span>
                    <span class="value">{{ signalAmp.toFixed(2) }} V</span>
                  </div>
                  <div class="info-item">
                    <span class="label">Status:</span>
                    <span
                      class="value"
                      :class="{
                        'above-cutoff': signalFreq > cutOffFreq,
                        'below-cutoff': signalFreq <= cutOffFreq,
                      }"
                    >
                      {{
                        signalFreq > cutOffFreq
                          ? "Di Atas Cut-off"
                          : "Di Bawah Cut-off"
                      }}
                    </span>
                  </div>
                </div>
              </div>
              <canvas ref="inputSignal"></canvas>
            </div>
            <div class="signal-graph">
              <div class="graph-header">
                <h4>Sinyal Output</h4>
                <div class="signal-info">
                  <div class="info-item">
                    <span class="label">Frekuensi:</span>
                    <span class="value">{{ signalFreq.toFixed(2) }} Hz</span>
                  </div>
                  <div class="info-item">
                    <span class="label">Amplitudo:</span>
                    <span class="value output-amp"
                      >{{ signalAmp.toFixed(2) }} V</span
                    >
                  </div>
                  <div class="info-item">
                    <span class="label">Gain:</span>
                    <span class="value">
                      {{ (20 * Math.log10(Math.abs(gainAtF))).toFixed(2) }}
                      dB
                    </span>
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
import { ref, computed, onMounted, watch } from "vue";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

let frequencyChart = null;

export default {
  name: "LowPassFilter",
  setup() {
    // Input user
    const vin = ref(1);
    const c1 = ref(0.1); // µF
    const c2 = ref(0.1); // µF
    const r1 = ref(10000); // Ohm
    const r2 = ref(10000);
    const r3 = ref(10000);
    const r4 = ref(10000);

    const signalFreq = ref(10); // Hz
    const signalAmp = ref(1); // Volt
    const Q = ref(0.707);

    // Refs untuk elemen canvas
    const frequencyResponse = ref(null);
    const inputSignal = ref(null);
    const outputSignal = ref(null);

    // ------------------------
    // Perhitungan Filter
    // ------------------------

    const cutOffFreq = computed(() => {
      const R1 = r1.value;
      const R2 = r2.value;
      const C1 = c1.value * 1e-6; // µF ke Farad
      const C2 = c2.value * 1e-6;
      return 1 / (2 * Math.PI * Math.sqrt(R1 * R2 * C1 * C2));
    });

    const gain = computed(() => r2.value / r1.value);
    const gainDB = computed(() => 20 * Math.log10(gain.value));
    const vout = computed(() => vin.value * gain.value);

    const gainAtF = computed(() => {
      const f = signalFreq.value;
      const fc = cutOffFreq.value;
      return f <= fc ? gain.value : gain.value * (fc / f); // ideal low-pass
    });

    // ------------------------
    // Fungsi update chart (dummy)
    // ------------------------
    const updateCharts = () => {
      // Contoh update chart data
      if (frequencyChart) {
        const labels = [];
        const data = [];

        for (let f = 1; f <= 20000; f *= 1.2) {
          labels.push(f.toFixed(0));
          const magnitude =
            f <= cutOffFreq.value
              ? gain.value
              : gain.value * (cutOffFreq.value / f);
          data.push(20 * Math.log10(magnitude));
        }

        frequencyChart.data.labels = labels;
        frequencyChart.data.datasets[0].data = data;
        frequencyChart.update();
      }

      // Input/output signal dapat kamu isi sesuai bentuk gelombang sinus
    };

    // ------------------------
    // Lifecycle
    // ------------------------
    onMounted(() => {
      const freqCtx = frequencyResponse.value.getContext("2d");
      frequencyChart = new Chart(freqCtx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Gain (dB)",
              data: [],
              borderColor: "#00ff9d",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: "logarithmic",
              title: { display: true, text: "Frekuensi (Hz)" },
              ticks: { callback: (v) => v.toFixed(0) },
            },
            y: {
              title: { display: true, text: "Gain (dB)" },
            },
          },
        },
      });

      // Kamu bisa lanjutkan juga inisialisasi chart untuk inputSignalChart dan outputSignalChart jika ingin menampilkan bentuk gelombangnya

      updateCharts();
    });

    // ------------------------
    // Watch untuk perbarui grafik saat input berubah
    // ------------------------
    watch(
      [vin, c1, c2, r1, r2, signalFreq, signalAmp],
      () => {
        updateCharts();
      },
      { deep: true }
    );

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
      Q,
      cutOffFreq,
      gain,
      gainDB,
      vout,
      gainAtF,
      frequencyResponse,
      inputSignal,
      outputSignal,
    };
  },
};
</script>

<style scoped>
.low-pass-filter {
  min-height: 100vh;
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  color: #fff;
  font-family: "Poppins", Arial, sans-serif;
  padding: 2rem 0 0 0;
  position: relative;
}

.low-pass-filter h1 {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  color: #00ff9d;
}

main {
  display: grid;
  grid-template-columns: 1.2fr 1.2fr;
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 0 3rem 0;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.left-column figure {
  margin: 0;
  background: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #2d2d2d;
}

.left-column img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.inputgroup-hasilperhitungan {
  background: #232526;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  padding: 2rem 2rem 1.5rem 2rem;
  border: 2px solid #2d2d2d;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.input-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-size: 1rem;
  font-weight: 500;
  color: #00ff9d;
  margin-bottom: 0.2rem;
}

.input-with-slider {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.input-with-slider input[type="range"] {
  flex: 1;
  accent-color: #00ff9d;
  height: 4px;
}

.input-with-slider input[type="number"] {
  width: 90px;
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  border: 1px solid #2d2d2d;
  background: #181818;
  color: #fff;
  font-size: 1rem;
}

.controlpanel-hasilperhitungan {
  margin-top: 1.5rem;
}

.control-panel {
  background: #181818;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid #2d2d2d;
}

.control-panel h3 {
  color: #00ff9d;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  text-align: center;
}

.output {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  background: #181818;
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid #2d2d2d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
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
  .low-pass-filter {
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
