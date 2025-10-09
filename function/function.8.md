# Function

## challenge #8
Buatlah function bernama `sumAllNumbers` yang dapat menerima jumlah parameter yang tidak terbatas (variadic) dan mengembalikan total penjumlahan semua angka. Gunakan rest parameters (...args).

## driver code
```javascript
// Tulis function sumAllNumbers di sini

// Panggil function dengan jumlah parameter berbeda
let total1 = sumAllNumbers(1, 2, 3);
let total2 = sumAllNumbers(5, 10, 15, 20);
let total3 = sumAllNumbers(2, 4, 6, 8, 10, 12);
console.log("Total (1,2,3): " + total1);
console.log("Total (5,10,15,20): " + total2);
console.log("Total (2,4,6,8,10,12): " + total3);
```

## output
```javascript
Total (1,2,3): 6
Total (5,10,15,20): 50
Total (2,4,6,8,10,12): 42
```

## keyword
Function declaration, rest parameters, variadic function, array processing
