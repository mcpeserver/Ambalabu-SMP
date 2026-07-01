# AMBALABU SMP - Landing Page Minecraft Server

Website resmi informatif dan modern untuk server Minecraft komunitas **AMBALABU SMP**. Desain web ini mengusung estetika pixel art yang hangat, santai, lucu, dan ramah komunitas, disesuaikan langsung dengan nuansa logo Minecraft yang khas.

Situs web ini dirancang menggunakan **React 19**, **Vite**, **TypeScript**, dan **Tailwind CSS v4** untuk menyajikan antarmuka super responsif, berkecepatan tinggi, ramah SEO, dan berestetika modern.

---

## 🚀 Fitur Utama Website
- **Satu Klik Salin IP (Click-to-Copy)**: Memudahkan pemain menyalin IP server Java (`ambalabu.raznar.net:25007`) atau Bedrock (`ambalabu.raznar.net` port `25062`) secara instan.
- **Detektor Latensi Interaktif**: Widget interaktif yang mensimulasikan pengukuran ping koneksi server secara real-time demi kenyamanan pemain.
- **Daftar Rank & Harga Transparan**: Informasi lengkap keanggotaan mulai dari rank KING, DUKE, PALADIN, LORD, hingga KNIGHT beserta harga dan petunjuk pembelian melalui admin grup WhatsApp.
- **Aturan Resmi Server**: Tata tertib server game demi menjaga keadilan bermain (No X-Ray, No Cheat, No Combat Logging, dsb).
- **SEO & PWA Ready**: Dilengkapi Schema.org JSON-LD structured data, Open Graph meta tags untuk media sosial, robots.txt, sitemap.xml, dan manifest.webmanifest untuk performa Google Lighthouse maksimal.
- **Halaman Error 404 Kustom**: Halaman penanganan 404 mandiri dengan desain hangat yang senada.

---

## 📂 Struktur Folder Proyek
```text
/
├── public/                       # Aset publik statis
│   ├── logo.jpg                  # Logo resmi AMBALABU SMP
│   ├── favicon.ico               # Favicon website
│   ├── robots.txt                # Panduan bot mesin pencari
│   ├── sitemap.xml               # Peta situs web untuk SEO
│   ├── manifest.webmanifest      # Konfigurasi Progressive Web App (PWA)
│   └── 404.html                  # Halaman error kustom 404
├── src/                          # Sumber kode aplikasi
│   ├── assets/                   # Aset media lokal (opsional)
│   ├── App.tsx                   # Komponen utama landing page React
│   ├── index.css                 # File CSS utama (Tailwind v4)
│   └── main.tsx                  # Titik masuk aplikasi (entrypoint)
├── .env.example                  # Contoh file variabel lingkungan
├── .gitignore                    # Berkas pengecualian pelacakan Git
├── CHANGELOG.md                  # Catatan riwayat versi
├── CODE_OF_CONDUCT.md            # Aturan perilaku kontributor
├── CONTRIBUTING.md               # Panduan berkontribusi
├── LICENSE                       # Lisensi MIT
├── package.json                  # Manajemen dependensi Node.js
├── SECURITY.md                   # Prosedur pelaporan celah keamanan
├── tsconfig.json                 # Konfigurasi TypeScript compiler
└── vite.config.ts                # Konfigurasi build tool Vite
```

---

## 🛠️ Cara Menjalankan Secara Lokal

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (versi 18 atau lebih baru) pada komputer Anda.

### Langkah-Langkah:
1. **Kloning Repositori:**
   ```bash
   git clone https://github.com/username/ambalabu-smp-landing.git
   cd ambalabu-smp-landing
   ```

2. **Instal Dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan Mode Pengembangan:**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan secara lokal di URL: [http://localhost:3000](http://localhost:3000) (atau port yang disesuaikan oleh Vite).

4. **Kompilasi/Build untuk Produksi:**
   ```bash
   npm run build
   ```
   Hasil build statis akan disimpan di dalam direktori `dist/` yang siap dideploy.

---

## ⚡ Deployment ke Vercel

Situs web ini didesain sepenuhnya statis dan kompatibel penuh dengan platform hosting **Vercel** tanpa konfigurasi rumit:

1. Daftarkan akun atau masuk ke [Vercel](https://vercel.com).
2. Hubungkan akun GitHub Anda dan pilih repositori `ambalabu-smp-landing`.
3. Vercel akan otomatis mendeteksi konfigurasi **Vite**.
4. Biarkan parameter konfigurasi default, lalu klik tombol **Deploy**.
5. Situs Anda siap diakses publik dalam hitungan detik!

---

## ⚖️ Lisensi
Proyek ini dilisensikan di bawah lisensi **MIT License** - lihat file [LICENSE](./LICENSE) untuk detail lebih lanjut.

---

## 🎨 Kredit Pengembang
Situs web ini dikembangkan secara penuh oleh **RAN DEV**:
- **WhatsApp**: [0895602592430](https://wa.me/62895602592430)
- **Keterangan**: Hubungi nomor WhatsApp di atas jika Anda tertarik atau ingin mempercayakan pembuatan website profesional, portofolio digital, ataupun aplikasi web berkualitas tinggi lainnya kepada kami!
