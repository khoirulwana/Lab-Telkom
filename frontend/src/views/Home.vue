<template>
  <div class="home">
    <header class="header">
      <h1>PRAKTIKUM VIRTUAL SISTEM TELEKOMUNIKASI</h1>
      <h2>Laboratorium Virtual Elektronika</h2>
      <p>Platform pembelajaran interaktif untuk praktikum elektronika</p>
    </header>

    <main class="main-content">
      <div class="lab-grid">
        <!-- Card High Pass Filter -->
        <div class="lab-card" @click="navigateTo('/highpass')">
          <div class="card-icon">
            <i class="fas fa-wave-square"></i>
          </div>
          <div class="card-content">
            <h2>High Pass Filter</h2>
            <p>Simulasi dan analisis rangkaian High Pass Filter Aktif</p>
            <ul class="features">
              <li>Visualisasi respons frekuensi</li>
              <li>Analisis gain dan cut-off frequency</li>
              <li>Simulasi sinyal input dan output</li>
            </ul>
          </div>
        </div>

        <!-- Card Low Pass Filter (Coming Soon) -->
        <div class="lab-card coming-soon">
          <div class="card-icon">
            <i class="fas fa-filter"></i>
          </div>
          <div class="card-content">
            <h2>Low Pass Filter</h2>
            <p>Simulasi dan analisis rangkaian Low Pass Filter Aktif</p>
            <span class="coming-soon-badge">Coming Soon</span>
          </div>
        </div>

        <!-- Card Amplitude Modulation (Coming Soon) -->
        <div class="lab-card coming-soon">
          <div class="card-icon">
            <i class="fas fa-solid fa-wave-sine"></i>
          </div>
          <div class="card-content">
            <h2>Amplitude Modulation</h2>
            <p>Simulasi dan analisis rangkaian Low Pass Filter Aktif</p>
            <span class="coming-soon-badge">Coming Soon</span>
          </div>
        </div>

        <!-- Card Frequency Modulation (Coming Soon) -->
        <div class="lab-card coming-soon">
          <div class="card-icon">
            <i class="fas fa-solid fa-wave-sine"></i>
          </div>
          <div class="card-content">
            <h2>Frequency Modulation</h2>
            <p>Simulasi dan analisis rangkaian Low Pass Filter Aktif</p>
            <span class="coming-soon-badge">Coming Soon</span>
          </div>
        </div>

        <!-- Card Analog to Digital Converter (Coming Soon) -->
        <div class="lab-card coming-soon">
          <div class="card-icon">
            <i class="fas fa-solid fa-wave-sine"></i>
          </div>
          <div class="card-content">
            <h2>Analog to Digital Converter</h2>
            <p>Simulasi dan analisis rangkaian Low Pass Filter Aktif</p>
            <span class="coming-soon-badge">Coming Soon</span>
          </div>
        </div>

        <!-- Card Digital to Analog Converter (Coming Soon) -->
        <div class="lab-card coming-soon">
          <div class="card-icon">
            <i class="fas fa-solid fa-wave-sine"></i>
          </div>
          <div class="card-content">
            <h2>Digital to Analog Converter</h2>
            <p>Simulasi dan analisis rangkaian Low Pass Filter Aktif</p>
            <span class="coming-soon-badge">Coming Soon</span>
          </div>
        </div>

        <!-- Card Radio Frequency Oscillator (Coming Soon) -->
        <div class="lab-card coming-soon">
          <div class="card-icon">
            <i class="fas fa-solid fa-wave-sine"></i>
          </div>
          <div class="card-content">
            <h2>Radio Frequency Oscillator</h2>
            <p>Simulasi dan analisis rangkaian Low Pass Filter Aktif</p>
            <span class="coming-soon-badge">Coming Soon</span>
          </div>
        </div>

        <!-- Card Band Pass Filter (Coming Soon) -->
        <div class="lab-card coming-soon">
          <div class="card-icon">
            <i class="fas fa-broadcast-tower"></i>
          </div>
          <div class="card-content">
            <h2>Band Pass Filter</h2>
            <p>Simulasi dan analisis rangkaian Band Pass Filter Aktif</p>
            <span class="coming-soon-badge">Coming Soon</span>
          </div>
        </div>

        <!-- Card Band Stop Filter (Coming Soon) -->
        <div class="lab-card coming-soon">
          <div class="card-icon">
            <i class="fas fa-ban"></i>
          </div>
          <div class="card-content">
            <h2>Band Stop Filter</h2>
            <p>Simulasi dan analisis rangkaian Band Stop Filter Aktif</p>
            <span class="coming-soon-badge">Coming Soon</span>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <p>&copy; 2024 Laboratorium Virtual Elektronika. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "HomeView",
  setup() {
    const router = useRouter();

    const navigateTo = (path) => {
      router.push(path);
    };

    return {
      navigateTo,
    };
  },
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
}

.header {
  background: linear-gradient(135deg, #4caf50 0%, #2196f3 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.header h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
}

.header p {
  margin: 1rem 0 0;
  font-size: 1.2rem;
  opacity: 0.9;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.lab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.lab-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.lab-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.lab-card.coming-soon {
  opacity: 0.7;
  cursor: not-allowed;
}

.card-icon {
  font-size: 2.5rem;
  color: #4caf50;
  margin-bottom: 1rem;
}

.card-content h2 {
  margin: 0 0 0.5rem;
  color: #333;
  font-size: 1.5rem;
}

.card-content p {
  margin: 0 0 1rem;
  color: #666;
  font-size: 1rem;
}

.features {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
}

.features li {
  padding: 0.5rem 0;
  color: #666;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

.features li::before {
  content: "•";
  color: #4caf50;
  font-weight: bold;
  margin-right: 0.5rem;
}

.coming-soon-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff9800;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-top: auto;
}

@media (max-width: 768px) {
  .header {
    padding: 2rem 1rem;
  }

  .header h1 {
    font-size: 2rem;
  }

  .main-content {
    padding: 1rem;
  }

  .lab-grid {
    grid-template-columns: 1fr;
  }
}
</style>
