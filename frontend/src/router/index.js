/**
 * Konfigurasi router untuk aplikasi
 * Menangani navigasi antar halaman
 */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import HighPassFilter from "../views/HighPassFilter.vue";
import LowPassFilter from "../views/LowPassFilter.vue";
import AmplitudeModulation from "../views/AmplitudeModulation.vue";
import FrequencyModulation from "../views/FrequencyModulation.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Beranda - Praktikum Virtual Sistem Telekomunikasi",
      },
    },
    {
      path: "/highpass",
      name: "highpass",
      component: HighPassFilter,
      meta: {
        title: "High Pass Filter - Praktikum Virtual Sistem Telekomunikasi",
      },
    },
    {
      path: "/lowpass",
      name: "lowpass",
      component: LowPassFilter,
      meta: {
        title: "Low Pass FIlter - Praktikum Virtual Sistem Telekomunikasi",
      },
    },
    {
      path: "/ammodulation",
      name: "ammodulation",
      component: AmplitudeModulation,
      meta: {
        title: "Low Pass FIlter - Praktikum Virtual Sistem Telekomunikasi",
      },
    },
    {
      path: "/freqmod",
      name: "freqmod",
      component: FrequencyModulation,
      meta: {
        title: "Frequency Modulation - Praktikum Virtual Sistem Telekomunikasi",
      },
    },
  ],
});

// Mengubah judul halaman berdasarkan rute
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Praktikum Virtual Sistem Telekomunikasi";
  next();
});

export default router;
