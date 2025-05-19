import { createRouter, createWebHistory } from "vue-router";
import HighPassFilter from "../views/HighPassFilter.vue";

const routes = [
  {
    path: "/highpass-filter",
    name: "HighPassFilter",
    component: HighPassFilter,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
