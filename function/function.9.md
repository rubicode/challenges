# Function

## challenge #9
Buatlah function bernama `processOrder` yang menerima parameter `namaItem` dan `jumlah`. Function menampilkan detail pesanan dengan console.log DAN mengembalikan total harga (harga per item = Rp 15000).

## driver code
```javascript
// Tulis function processOrder di sini

// Panggil function dan gunakan return value
let totalBayar1 = processOrder("Nasi Goreng", 2);
let totalBayar2 = processOrder("Mie Ayam", 3);
console.log("Total yang harus dibayar: Rp " + (totalBayar1 + totalBayar2));
```

## output
```javascript
=== Detail Pesanan ===
Item: Nasi Goreng
Jumlah: 2
Harga per item: Rp 15000
Subtotal: Rp 30000

=== Detail Pesanan ===
Item: Mie Ayam
Jumlah: 3
Harga per item: Rp 15000
Subtotal: Rp 45000

Total yang harus dibayar: Rp 75000
```

## keyword
Function declaration, console.log and return, order processing, price calculation
