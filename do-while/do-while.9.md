# Do-While Loop

## challenge #9
Buatlah program instalasi software yang harus menjalankan minimal satu tahap instalasi. Setiap tahap memiliki kemungkinan gagal (simulasi dengan random). Jika gagal, tanya apakah ingin coba install ulang.

## driver code
```javascript
let tahapInstalasi = ["Download file", "Extract file", "Install program", "Setup konfigurasi"];
let berhasil = false;
let percobaan = 0;
// Tulis kode do-while loop di sini untuk simulasi instalasi
if (berhasil) {
  console.log("Instalasi berhasil dalam " + percobaan + " percobaan!");
} else {
  console.log("Instalasi dibatalkan setelah " + percobaan + " percobaan.");
}
```

## output
```javascript
// Jika random gagal di tahap 3, user pilih y, lalu berhasil
// Maka output:
=== PERCOBAAN INSTALASI 1 ===
Download file... berhasil
Extract file... berhasil
Install program... GAGAL!
Instalasi gagal! Coba lagi? (y/n): y
=== PERCOBAAN INSTALASI 2 ===
Download file... berhasil
Extract file... berhasil
Install program... berhasil
Setup konfigurasi... berhasil
Instalasi berhasil dalam 2 percobaan!
```

## keyword
Do-while, installation simulation, failure handling, retry mechanism
