<template>
  <div id="app">
    <!-- Judul utama untuk aplikasi Laboratorium Virtual Sistem Telekomunikasi -->

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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1a1a1a;
  color: #ffffff;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #404040;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #505050;
}

/* Selection styling */
::selection {
  background: #4a9eff;
  color: #ffffff;
}

/* Link styling */
a {
  color: #4a9eff;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #5fb0ff;
}

/* Focus outline styling */
:focus {
  outline: 2px solid #4a9eff;
  outline-offset: 2px;
}

/* Placeholder styling */
::placeholder {
  color: #666;
  opacity: 1;
}

/* Input number arrows styling */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
