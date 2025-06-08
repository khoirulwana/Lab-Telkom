# Praktikum Sistem Telekomunikasi

Repositori ini berisi kode sumber dan dokumentasi untuk praktikum mata kuliah Sistem Telekomunikasi.

## Fitur Project

- Pengembangan aplikasi berbasis Vue.js
- Hot-reload saat pengembangan
- Build untuk produksi
- Linting otomatis

## Persyaratan

- Node.js & npm sudah terinstall di sistem Anda

## Cara Menjalankan Project

### 1. Instalasi Dependensi

Jalankan perintah berikut untuk menginstall semua dependensi yang dibutuhkan:

```
npm install
```

### 2. Menjalankan Server Pengembangan

Untuk menjalankan aplikasi dalam mode pengembangan (dengan hot-reload):

```
npm run serve
```

Aplikasi dapat diakses melalui browser di alamat yang tertera di terminal (biasanya http://localhost:8080).

### 3. Build untuk Produksi

Untuk membuild aplikasi agar siap di-deploy:

```
npm run build
```

Hasil build akan berada di folder `dist/`.

### 4. Linting & Perbaikan Otomatis

Untuk melakukan pengecekan kode dan memperbaiki masalah style secara otomatis:

```
npm run lint
```

## Struktur Folder Utama

- `src/` : Kode sumber aplikasi Vue.js
- `public/` : File statis publik
- `dist/` : Hasil build produksi (setelah menjalankan build)

## Kustomisasi Konfigurasi

Lihat dokumentasi resmi Vue CLI untuk kustomisasi lebih lanjut: [Configuration Reference](https://cli.vuejs.org/config/).

## Kontribusi

Silakan buat pull request atau issue jika ingin berkontribusi atau melaporkan masalah.

---
