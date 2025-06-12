<template>
  <div id="app">
    <!-- Judul utama untuk aplikasi Laboratorium Virtual Sistem Telekomunikasi -->
    <h1>PRAKTIKUM VIRTUAL SISTEM TELEKOMUNIKASI</h1>
    <router-view></router-view>
  </div>
</template>

<script>
/**
 * Komponen utama aplikasi
 * Menangani tata letak dasar dan routing
 */
export default {
  name: "App",
};
</script>

<style>
/* Gaya dasar untuk aplikasi */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh;
}

/* Reset CSS dasar */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Reset margin dan padding body */
body {
  margin: 0;
  padding: 0;
}
</style>
