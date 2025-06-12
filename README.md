# Praktikum Sistem Telekomunikasi

Repositori ini berisi kode sumber dan dokumentasi untuk praktikum mata kuliah Sistem Telekomunikasi, khususnya untuk simulasi rangkaian filter aktif.

## Deskripsi Project

Project ini merupakan aplikasi web untuk simulasi rangkaian filter aktif yang terdiri dari:

- High Pass Filter Aktif
- Low Pass Filter Aktif
- Band Pass Filter Aktif

## Fitur Utama

- Simulasi rangkaian filter aktif secara real-time
- Visualisasi respons frekuensi
- Visualisasi sinyal input dan output
- Perhitungan parameter rangkaian secara otomatis
- Antarmuka pengguna yang interaktif
- Hot-reload saat pengembangan
- Build untuk produksi
- Linting otomatis

## Persyaratan Sistem

- Node.js (versi 14.x atau lebih baru)
- npm (versi 6.x atau lebih baru)
- Browser modern (Chrome, Firefox, Safari, Edge)

## Cara Menjalankan Project

### 1. Instalasi Dependensi

Jalankan perintah berikut di terminal untuk menginstall semua dependensi:

```bash
# Install dependensi frontend
cd frontend
npm install

# Install dependensi backend
cd ../backend
npm install
```

### 2. Menjalankan Server Pengembangan

Buka dua terminal terpisah untuk menjalankan frontend dan backend:

```bash
# Terminal 1 - Frontend
cd frontend
npm run serve

# Terminal 2 - Backend
cd backend
npm run dev
```

Aplikasi dapat diakses melalui browser di:

- Frontend: http://localhost:8080
- Backend: http://localhost:3000

### 3. Build untuk Produksi

Untuk membuild aplikasi agar siap di-deploy:

```bash
# Build frontend
cd frontend
npm run build

# Build backend
cd ../backend
npm run build
```

Hasil build akan berada di:

- Frontend: `frontend/dist/`
- Backend: `backend/dist/`

### 4. Linting & Perbaikan Otomatis

Untuk melakukan pengecekan kode dan memperbaiki masalah style secara otomatis:

```bash
# Frontend
cd frontend
npm run lint

# Backend
cd ../backend
npm run lint
```

## Struktur Folder

```
Lab-Telkom/
├── frontend/               # Aplikasi Vue.js
│   ├── src/               # Kode sumber frontend
│   │   ├── assets/        # Gambar dan aset statis
│   │   ├── components/    # Komponen Vue
│   │   ├── views/         # Halaman-halaman
│   │   └── App.vue        # Komponen utama
│   └── public/            # File statis publik
│
├── backend/               # Server Node.js
│   ├── src/              # Kode sumber backend
│   │   ├── routes/       # Definisi rute API
│   │   ├── controllers/  # Controller
│   │   └── models/       # Model data
│   └── app.js           # File utama backend
│
└── README.md             # Dokumentasi
```

## Teknologi yang Digunakan

### Frontend

- Vue.js 3
- Chart.js untuk visualisasi
- Tippy.js untuk tooltip
- Vue Router untuk navigasi

### Backend

- Node.js
- Express.js
- Math.js untuk perhitungan
- CORS untuk keamanan

## Kontribusi

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b fitur-baru`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## Lisensi

Project ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detail.

## Kontak

Untuk pertanyaan atau bantuan, silakan buat issue di repository ini.

---
