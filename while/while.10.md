# While Loop

## challenge #10
Buatlah perulangan while yang memproses array angka dan berhenti ketika menemukan angka negatif pertama atau mencapai akhir array. Hitung jumlah angka positif yang ditemukan.

## driver code
```javascript
let angka = [5, 3, 8, 2, -1, 7, 4];
let i = 0;
let jumlahPositif = 0;
let totalPositif = 0;
// Tulis kode while loop di sini untuk memproses array
console.log("Jumlah angka positif: " + jumlahPositif);
console.log("Total nilai positif: " + totalPositif);
if (i < angka.length) {
  console.log("Dihentikan karena menemukan angka negatif: " + angka[i]);
} else {
  console.log("Semua elemen array telah diproses");
}
```

## output
```javascript
Memproses: 5 (positif)
Memproses: 3 (positif)
Memproses: 8 (positif)
Memproses: 2 (positif)
Jumlah angka positif: 4
Total nilai positif: 18
Dihentikan karena menemukan angka negatif: -1
```

## keyword
While, array processing, early termination, conditional counting, multiple conditions
