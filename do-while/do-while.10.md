# Do-While Loop

## challenge #10
Buatlah program simulasi antrian bank yang harus melayani minimal satu nasabah. Setelah melayani, cek apakah masih ada antrian. Jika ada, lanjutkan. Jika tidak, tanya apakah ada nasabah baru yang datang.

## driver code
```javascript
let antrian = ["Budi", "Sari", "Andi"];
let nasabahDilayani = 0;
let adaNasabahBaru;
// Tulis kode do-while loop di sini untuk simulasi antrian bank
console.log("Bank tutup. Total nasabah dilayani: " + nasabahDilayani);
```

## output
```javascript
// Jika setelah antrian habis, ada nasabah baru: y (Dewi), lalu n
// Maka output:
Melayani nasabah: Budi
Sisa antrian: 2 orang
Melayani nasabah: Sari
Sisa antrian: 1 orang
Melayani nasabah: Andi
Antrian kosong.
Ada nasabah baru yang datang? (y/n): y
Nasabah baru: Dewi
Melayani nasabah: Dewi
Antrian kosong.
Ada nasabah baru yang datang? (y/n): n
Bank tutup. Total nasabah dilayani: 4
```

## keyword
Do-while, queue simulation, mandatory service, dynamic queue management
