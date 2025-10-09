# Do-While Loop

## challenge #6
Buatlah program kuis yang harus menampilkan minimal satu soal. Setelah user menjawab, tampilkan hasilnya dan tanya apakah ingin soal berikutnya. Buat 3 soal matematika sederhana.

## driver code
```javascript
let soal = ["5 + 3 = ?", "10 - 4 = ?", "7 * 2 = ?"];
let jawaban = [8, 6, 14];
let jawabanUser;
let lanjut;
let nomorSoal = 0;
let benar = 0;
// Tulis kode do-while loop di sini untuk kuis
console.log("Kuis selesai! Skor: " + benar + "/" + nomorSoal);
```

## output
```javascript
// Jika user jawab: 8, y, 5, y, 14, n
// Maka output:
Soal 1: 5 + 3 = ?
Jawaban Anda: 8
Benar! 
Lanjut ke soal berikutnya? (y/n): y
Soal 2: 10 - 4 = ?
Jawaban Anda: 5
Salah! Jawaban yang benar: 6
Lanjut ke soal berikutnya? (y/n): y
Soal 3: 7 * 2 = ?
Jawaban Anda: 14
Benar!
Lanjut ke soal berikutnya? (y/n): n
Kuis selesai! Skor: 2/3
```

## keyword
Do-while, quiz system, mandatory first question, score tracking
