# Dicoding - Submission Menjadi Front-end Web Developer Expert (Submission 2 Katalog Restaurant + PWA)

# Read This
Project aplikasi ini hanya untuk submission kelas Menjadi Front-end Web Developer Expert Dicoding, segala bentuk plagiarisme akan otomatis terdeteksi jika menggunakan project aplikasi ini untuk submission. Diharapkan project ini digunakan sebagai referensi belajar dan bukan untuk copy-paste project submission!!!
     
# Screenshot
<img src="https://user-images.githubusercontent.com/96803344/169085569-759ba8ff-c3f1-4eba-8b44-6f481061a25a.PNG"
     style="float: center; margin-right: 10px;"
     width="900" />
<img src="https://user-images.githubusercontent.com/96803344/169202535-745dfca1-8f3d-4d88-89bd-2f22bfae09e5.PNG"
     alt="Home"
     style="float: center; margin-right: 10px;"
     width="900" />
<img src="https://user-images.githubusercontent.com/96803344/169202563-e5e5c80b-d290-46ae-b02c-e6dc00b5ac86.PNG"
     alt="Detail Restaurant"
     style="float: center; margin-right: 10px;"
     width="900" />
<img src="https://user-images.githubusercontent.com/96803344/169202572-d6df19de-cb51-46a0-a89b-e9bd7846060a.PNG"
     alt="Favorite"
     style="float: center; margin-right: 10px;"
     width="900" />
<img src="https://user-images.githubusercontent.com/96803344/169202584-98df7c81-1ba8-4c01-aa28-f2f900347263.PNG"
     alt="Responsive"
     style="float: center; margin-right: 10px;"
     width="400" />
     
## Features
#### Submission Checklists
- [x] Halaman Utama (Daftar Restoran)

      Syarat:
      - Menampilkan daftar restoran yang datanya bersumber dari API https://restaurant-api.dicoding.dev/. Silakan lihat dokumentasinya pada halaman tersebut.
      - Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
      - Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
      - Hero elemen tetap dipertahankan.
        
- [x] Halaman Detail Restoran

      Syarat:
      - Menampilkan detail dari restoran yang dipilih dari halaman utama (daftar restoran) atau halaman favorit restoran.
      - Pada halaman detail restoran harus terdapat:
        - Nama restoran
        - Gambar
        - Alamat
        - Kota 
        - Deskripsi
        - Menu Makanan
        - Menu Minuman
        - Customer Reviews
      - Terdapat tombol favorite untuk memasukkan atau menghapus restoran favorit dari database (gunakan IndexedDB).
       
- [x] Halaman Daftar Restoran Favorit

      Syarat:
      - Halaman Daftar Restoran dapat diakses melalui menu navigasi favorit.
      - Menampilkan restoran yang difavoritkan oleh pengguna (data diambil dari indexedDB).
      - Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
      - Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
      
- [x] Native Capability

      Syarat:
      - Aplikasi dapat diakses dalam keadaan offline tanpa ada aset yang gagal dimuat, termasuk data yang didapatkan dari API. Anda bebas menggunakan strategi caching apapun, bahkan menggunakan workbox.
      - Aplikasi harus menampilkan icon Add to Home Screen.
      - Aplikasi memiliki custom icon yang ditampilkan pada home screen dan splash screen.
      
- [x] Code Quality

      Syarat:
      - Menggunakan ESLint sebagai linter ketika menuliskan kode JavaScript. Harap lampirkan berkas konfigurasi ESLint ya.
      - Menerapkan salah satu style guide baik itu Google JavaScript Code Style, AirBnB JavaScript Code Style, atau StandardJS Code Style.
      - Periksa kembali sebelum mengirimkan submission, apakah project yang Anda kirimkan sesuai dengan kriteria yang ditetapkan atau tidak, ditandai dengan tidak adanya satupun error ketika menjalankan eslint.

- [x] Pertahankan syarat yang ada pada submission sebelumnya. Seperti responsibilitas tampilan, aksesibilitas pada website, appbar, footer dan sebagainya.
- [x] Menerapkan Web Component secara native menggunakan Custom Element.
- [x] indikator loading ketika data sedang dimuat dari server dan tampilkanlah keterangan/halaman bila request yang dilakukan gagal.

### Configure

Get the repo

```cmd
git clone https://github.com/ibnucholdun/Menjadi-Front-end-Web-Developer-Expert.git
cd Menjadi-Front-end-Web-Developer-Expert
yarn install or npm install
```

Script

- `npm run start-dev` - to start locally
- `npm run build` - to build into folder dist
- `npm run lint` - linting

## Built With
- [Webpack](https://webpack.js.org/)
- [PWA](https://developers.google.com/web/progressive-web-apps)
- [IndexedDB](https://developers.google.com/web/ilt/pwa/working-with-indexeddb)
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [JS](https://www.javascript.com/)
- API => https://restaurant-api.dicoding.dev/

## Tools
- [Eslint](https://eslint.org/)


## Author
* #### Ibnu Choldun
