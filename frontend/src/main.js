/**
 * File utama aplikasi Vue.js
 * Menginisialisasi dan mengkonfigurasi aplikasi
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";

// Membuat instance aplikasi Vue
const app = createApp(App);

// Menggunakan router
app.use(router);

// Mount aplikasi ke elemen dengan id 'app'
app.mount("#app");
