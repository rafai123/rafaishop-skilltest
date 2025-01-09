Berikut adalah **README.md** lengkap yang mencakup semua informasi yang Anda butuhkan:

```markdown
# Rafaishop

Rafaishop adalah aplikasi toko online yang menyediakan berbagai produk dengan fitur pencarian dan halaman detail produk. Aplikasi ini memiliki beberapa fitur utama seperti halaman landing, halaman produk dengan pencarian, dan halaman tentang kami.

## Fitur Utama
- **Landing Page**: Halaman utama aplikasi dengan berbagai informasi tentang toko dan produk.
- **Product Page**: Halaman produk yang menampilkan daftar produk yang diambil dari API dengan fitur pencarian.
- **Product Detail**: Setiap produk yang diklik akan membawa pengguna ke halaman detail produk berdasarkan ID.
- **About Us Page**: Halaman tentang kami yang berisi informasi mengenai tim, misi, dan form untuk mengirim pesan.
- **Navigation**: Navbar dan footer yang dapat digunakan untuk navigasi ke berbagai halaman di aplikasi.

## Cara Menjalankan Aplikasi

### Prasyarat
Pastikan Anda sudah menginstal **[Bun](https://bun.sh/)** sebagai dependency manager untuk JavaScript.

1. **Clone Repository**
   ```bash
   git clone https://github.com/rafai123/rafaishop-skilltest.git
   cd rafaishop
   ```

2. **Install Dependencies**
   Pastikan Bun sudah terinstal, lalu jalankan perintah berikut untuk menginstal dependensi aplikasi:
   ```bash
   bun install
   ```

3. **Menjalankan Aplikasi**
   Setelah dependensi berhasil diinstal, jalankan aplikasi dengan perintah berikut:
   ```bash
   bun dev
   ```
   Aplikasi akan berjalan di `http://localhost:3000`.

4. **Build Aplikasi (Opsional)**
   Jika Anda ingin membuat build produksi, jalankan:
   ```bash
   bun build
   ```

5. **Testing**
   Jika Anda ingin menjalankan unit tests, jalankan perintah berikut:
   ```bash
   bun test
   ```

## Struktur Folder

Berikut adalah struktur folder utama dalam proyek ini:

- **/pages**: Menyimpan halaman-halaman aplikasi.
- **/components**: Berisi komponen yang digunakan di halaman-halaman aplikasi.
- **/hooks**: Menyimpan custom hooks untuk data fetching dan logika lainnya.
- **/styles**: Menyimpan file CSS atau tailwind configurations untuk styling.
- **/public**: Menyimpan aset statis seperti gambar dan logo.

## Penjelasan Fitur

1. **Landing Page**
   Halaman utama yang memperkenalkan Rafaishop dengan berbagai informasi produk dan fitur. Pengguna dapat langsung melihat produk-produk unggulan dari halaman ini.

2. **Halaman Produk**
   Halaman ini menampilkan daftar produk yang diambil dari API. Pengguna dapat melakukan pencarian produk dengan mengetikkan kata kunci di input pencarian, dan daftar produk akan langsung terfilter berdasarkan kata kunci.

3. **Halaman Detail Produk**
   Setiap produk yang diklik akan membawa pengguna ke halaman detail produk yang menunjukkan informasi lebih lanjut tentang produk tersebut, termasuk harga, deskripsi, dan gambar.

4. **Halaman About Us**
   Halaman ini berisi informasi tentang tim pengembang Rafaishop, misi kami, dan form untuk mengirimkan pesan atau pertanyaan kepada tim Rafaishop. Form ini akan mengirimkan pesan langsung ke tim untuk direspons.

5. **Footer & Navbar**
   Navbar digunakan untuk navigasi antar halaman, sementara footer menyimpan informasi tambahan dan link navigasi lainnya.

## Teknologi yang Digunakan
- **Next.js**: Framework React untuk pengembangan aplikasi.
- **Bun**: Dependency manager dan build tool untuk JavaScript.
- **TailwindCSS**: Framework CSS untuk styling.
- **React Query**: Untuk data fetching dan pengelolaan state yang lebih efisien.
- **API DummyJSON**: Untuk mengambil data produk dari API eksternal.

## Kontribusi
Jika Anda ingin berkontribusi dalam pengembangan Rafaishop, Anda dapat melakukan fork pada repository ini, membuat perubahan, dan membuat pull request. Pastikan untuk mengikuti standar pengkodean yang telah ditetapkan dalam proyek ini.

## Lisensi
Aplikasi ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.
```

