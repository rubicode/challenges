# Combine - Hard Level

## challenge #16
Buatlah function `dataProcessor` yang menggunakan semua control structures: if untuk validasi, switch untuk tipe data, for untuk iterasi, while untuk kondisi, do-while untuk konfirmasi.

## driver code
```javascript
// Tulis function dataProcessor di sini

let data = [
  {type: "number", value: 10},
  {type: "string", value: "hello"},
  {type: "boolean", value: true}
];
console.log(dataProcessor(data));
```

## output
```javascript
{
  processed: 3,
  numbers: [10],
  strings: ["HELLO"],
  booleans: [true],
  errors: 0
}
```

## keyword
Function, all control structures, data processing

## difficulty
Hard
