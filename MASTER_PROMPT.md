# MASTER PROMPT UNIVERSAL: Minecraft Server Landing Page
Dokumen ini dirancang khusus untuk mempermudah replikasi, standarisasi, dan pengembangan landing page server Minecraft berkualitas tinggi (Production-Grade) yang sepenuhnya dioptimalkan secara SEO, ramah pengguna, berkinerja tinggi, dan siap di-deploy ke GitHub serta Vercel.

---

## 🛠️ CARA MENGGUNAKAN PROMPT INI
Salin seluruh teks di bawah ini ke dalam AI Coding Assistant Anda, lalu ganti bagian **[DATA KONFIGURASI SERVER]** dengan informasi server Minecraft yang ingin Anda buatkan landing page-nya.

---

### START OF MASTER PROMPT

```text
Peran: Senior Frontend Engineer, UI/UX Designer, dan Pakar SEO.
Tugas: Buat sebuah Landing Page premium yang modern, berkinerja tinggi, dan responsif penuh untuk server Minecraft berdasarkan spesifikasi data di bawah ini.

=========================================
[DATA KONFIGURASI SERVER]
Nama Server: AMBALABU SMP
Platform yang Didukung: Java & Bedrock Edition (Cross-play)
Server IP (Java): ambalabu.raznar.net:25007
Server IP (Bedrock): ambalabu.raznar.net
Port Bedrock: 25062
Versi Game: 1.21.11
Tautan Grup WhatsApp: https://chat.whatsapp.com/CIjrlWdXz1hCXsKffL5MhH
WhatsApp Kontak Admin (RAN DEV): 0895602592430
Tautan Portofolio Server Lain: https://sfl.gl/x2ic
=========================================

---

### 1. TEKNOLOGI & ARSITEKTUR STRUKTUR
Aplikasi harus dibangun menggunakan standar modern:
- Framework: Next.js 15+ (App Router) atau React 19+ dengan Vite.
- Bahasa: TypeScript (Type-safe penuh, tanpa penggunaan 'any').
- Styling: Tailwind CSS v4 (Menggunakan utility classes, modern theme variables, custom typography).
- Animasi: Motion (motion/react atau framer-motion) untuk transisi halus, micro-interactions, dan layout animations.
- Icons: Lucide-react (Jangan gunakan SVG manual atau gambar ikon eksternal).
- Komponen: Komponen mandiri dengan shadcn/ui (jika menggunakan Next.js).

---

### 2. IDENTITAS VISUAL & UI/UX (AESTHETIC PAIRINGS)
Desain website harus unik, ramah, menyenangkan, dan kental dengan nuansa Minecraft (bukan tema gelap futuristik yang terlalu kaku):
- Palet Warna: Cokelat kayu hangat (amber/stone), kuning keemasan berkilau, hijau rumput segar (emerald), putih bersih, serta sentuhan oranye api hangat.
- Tipografi:
  * Sans-Serif Utama: "Inter" atau "Outfit" untuk keterbacaan teks umum yang tinggi.
  * Headings: "Space Grotesk" atau font display modern lainnya dengan tracking ketat dan ketebalan ekstra (bold/black).
  * Data & Status: "JetBrains Mono" atau "Fira Code" untuk menyajikan detail teknis seperti IP, port, latensi, dan versi server.
- Layout & Spacing: Gunakan konsep Bento Grid untuk menyusun item-item informasi, sudut kartu membulat penuh (rounded-2xl/rounded-3xl), serta efek bayangan halus (shadow-sm/shadow-md).
- Animasi Hover: Semua tombol interaktif wajib memiliki feedback visual instan (seperti scale-102, active:scale-95, transisi warna latar belakang, dan pergeseran sumbu Y yang dinamis).

---

### 3. DETAIL FITUR INTERAKTIF (HUMAN-CENTRIC TEXTS)
Hindari kalimat template kaku buatan AI biasa. Tulis teks dalam Bahasa Indonesia yang kasual, ramah, sopan, dan mudah dipahami:
- Widget Salin IP Otomatis: Satu klik untuk menyalin IP Java, IP Bedrock, dan Port Bedrock secara terpisah dengan notifikasi status sukses.
- Detektor Latensi/Ping Simulator: Tombol interaktif untuk menyimulasikan/mengukur kecepatan koneksi player ke server secara real-time.
- Aturan Komunitas (Official Rules): Tampilkan poin peraturan server secara terstruktur lengkap dengan penanda level urgensi (seperti sanksi Ban Permanen).
- Modul Bento Ranks: Daftar keanggotaan/rank donatur server (KING, DUKE, PALADIN, LORD, KNIGHT) lengkap dengan rincian harga, benefit ringkas, dan call-to-action langsung ke admin WhatsApp.
- Portofolio Developer: Integrasikan promosi karya website server lain yang pernah dibuat oleh developer (RAN DEV) di sfl.gl/x2ic secara elegan di bagian header, badan halaman, dan footer.

---

### 4. OPTIMASI SEO & METADATA (PRODUCTION-GRADE)
Website harus sepenuhnya dioptimalkan untuk mesin pencari:
- Meta Tags Komplet: Berikan judul deskriptif, deskripsi ramah SEO, kata kunci relevan, tag Open Graph (Facebook, WhatsApp), dan Twitter Card untuk visibilitas berbagi tautan yang menawan.
- Schema.org (JSON-LD): Sertakan skema terstruktur bertipe "VideoGame" atau "Organization" yang mendetail di dalam HTML.
- File Pendukung: Buat dan konfigurasi sitemap.xml, robots.txt, manifest.webmanifest, serta favicon.ico agar terbaca dengan baik oleh Google Webmasters.

---

### 5. STRUKTUR BERKAS REPOSITORY (GITHUB & VERCEL READY)
Pastikan struktur repositori sangat lengkap dan rapi untuk kebutuhan pengarsipan maupun deployment otomatis:
- /.github/workflows/deploy.yml (Untuk integrasi CI/CD jika diperlukan)
- /public/* (favicon, logo, banner, robots.txt, sitemap.xml, manifest)
- /src/App.tsx atau /app/page.tsx (Komponen utama landing page)
- /vercel.json (Konfigurasi redirect, routing, clean URLs, dan headers untuk Vercel)
- /README.md (Dokumentasi instalasi, konfigurasi, cara menjalankan lokal, dan fitur)
- /LICENSE (MIT License resmi)
- /CODE_OF_CONDUCT.md (Panduan perilaku berkomunitas)
- /CONTRIBUTING.md (Panduan kontribusi open source)
- /SECURITY.md (Kebijakan pelaporan kerentanan keamanan)
- /CHANGELOG.md (Catatan riwayat pembaruan rilis versi)
- /.editorconfig (Konfigurasi format teks kode seragam)
- /.gitattributes (Normalisasi akhir baris berkas di Git)
```

### END OF MASTER PROMPT
