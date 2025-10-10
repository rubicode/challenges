# Function

## challenge #10
Buatlah function bernama `validateAndCalculateGrade` yang menerima parameter `nama` dan `nilai`. Function melakukan validasi nilai (0-100), menampilkan hasil dengan console.log, dan mengembalikan grade huruf (A/B/C/D/E) atau null jika tidak valid.

Grade Range :
90 - 100 = A
80 - 89 = B
70 - 79 = C
60 - 69 = D
0 - 59 = E

## driver code
```javascript
// Tulis function validateAndCalculateGrade di sini

// Test dengan berbagai nilai
let grade1 = validateAndCalculateGrade("Budi", 85);
let grade2 = validateAndCalculateGrade("Sari", 150); // invalid
let grade3 = validateAndCalculateGrade("Andi", 72);

console.log("Grade Budi: " + grade1);
console.log("Grade Sari: " + grade2);
console.log("Grade Andi: " + grade3);
```

## output
```javascript
=== Hasil Penilaian ===
Nama: Budi
Nilai: 85 (Valid)
Grade: B

=== Hasil Penilaian ===
Nama: Sari
Nilai: 150 (Tidak Valid - harus 0-100)

=== Hasil Penilaian ===
Nama: Andi
Nilai: 72 (Valid)
Grade: C

Grade Budi: B
Grade Sari: null
Grade Andi: C
```

## keyword
Function declaration, input validation, conditional logic, mixed output, error handling
