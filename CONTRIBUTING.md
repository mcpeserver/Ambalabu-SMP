# Panduan Kontribusi (Contributing Guidelines)

Terima kasih telah meluangkan waktu untuk berkontribusi pada AMBALABU SMP Landing Page! Dokumen ini membantu menjelaskan proses kontribusi Anda agar berjalan lancar.

## Cara Berkontribusi

### 1. Laporkan Bug atau Request Fitur
Jika Anda menemukan bug atau memiliki ide fitur baru, silakan buka **Issue** di repositori GitHub kami dengan deskripsi yang jelas.

### 2. Kirim Pull Request (PR)
Jika Anda ingin memperbaiki bug atau menambahkan fitur sendiri:
1. Fork repositori ini.
2. Buat branch baru untuk fitur Anda (`git checkout -b fitur-saya`).
3. Lakukan commit dengan pesan yang jelas dan deskriptif (`git commit -m 'Menambahkan fitur XYZ'`).
4. Push branch Anda ke GitHub (`git push origin fitur-saya`).
5. Buat Pull Request ke branch `main` dari repositori ini.

## Standar Kode
- Gunakan TypeScript dengan tipe data yang ketat.
- Gaya penulisan CSS menggunakan utility classes dari Tailwind CSS.
- Pastikan website responsif dan memiliki aksesibilitas (ARIA label) yang memadai.
- Jalankan pemeriksaan linter (`npm run lint`) sebelum mengirim Pull Request.

## Lisensi
Dengan berkontribusi pada repositori ini, Anda setuju bahwa kontribusi Anda akan dilisensikan di bawah lisensi **MIT License** yang berlaku.
