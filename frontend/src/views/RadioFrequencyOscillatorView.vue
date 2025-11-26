<template>
  <div
    class="rf-oscillator-placeholder"
    data-tippy-content="Modul Radio Frequency Oscillator akan segera tersedia dalam versi berikutnya"
  >
    <p>Radio Frequency Oscillator</p>
    <p class="subtitle">Fitur ini sedang dalam tahap pengembangan.</p>
  </div>
</template>

<script>
/**
 * Tampilan placeholder untuk modul Radio Frequency Oscillator
 * Menampilkan informasi bahwa fitur masih dalam pengembangan
 */
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

export default {
  name: "RadioFrequencyOscillatorView",
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
.rf-oscillator-placeholder {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  color: #ffffff;
  border-radius: 12px;
  margin: 40px auto 0 auto;
  width: 90%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  text-align: center;
}

.rf-oscillator-placeholder p {
  margin: 0.5rem 0;
}

.rf-oscillator-placeholder .subtitle {
  color: #a0a0a0;
  font-size: 0.95rem;
}
</style>
