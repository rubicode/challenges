# While Loop

## challenge #6
Buatlah perulangan while yang terus meminta password dari user sampai password benar. Password yang benar adalah "admin123". Batasi maksimal 3 percobaan.

## driver code
```javascript
let password;
let percobaan = 0;
let maxPercobaan = 3;
let berhasil = false;
// Tulis kode while loop di sini untuk validasi password
if (berhasil) {
  console.log("Login berhasil!");
} else {
  console.log("Akses ditolak. Terlalu banyak percobaan gagal.");
}
```

## output
```javascript
// Jika user input: 123, admin, admin123
// Maka output:
Password salah. Sisa percobaan: 2
Password salah. Sisa percobaan: 1  
Login berhasil!
```

## keyword
While, authentication, attempt counter, security logic, multiple conditions
