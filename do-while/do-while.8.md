# Do-While Loop

## challenge #8
Buatlah program generator nama pengguna yang harus membuat minimal satu username dari nama depan + angka random. Setelah generate, tanya apakah user puas dengan hasilnya. Jika tidak, generate lagi.

## driver code
```javascript
let namaDepan = "user";
let username;
let puas;
let percobaan = 0;
// Tulis kode do-while loop di sini untuk generate username
console.log("Username final: " + username + " (dibuat dalam " + percobaan + " percobaan)");
```

## output
```javascript
// Jika random: 1234, n, 5678, y
// Maka output:
Percobaan 1: Username yang dihasilkan: user1234
Apakah Anda puas dengan username ini? (y/n): n
Percobaan 2: Username yang dihasilkan: user5678
Apakah Anda puas dengan username ini? (y/n): y
Username final: user5678 (dibuat dalam 2 percobaan)
```

## keyword
Do-while, username generation, satisfaction check, generate-then-approve
