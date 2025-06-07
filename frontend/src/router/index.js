import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import HighPassFilter from "../views/HighPassFilter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/highpass",
      name: "highpass",
      component: HighPassFilter,
    },
  ],
});

export default router;
