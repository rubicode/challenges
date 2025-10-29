# Array Processing

## challenge #1
Buatlah function `getArrayInfo` yang menerima parameter `arr` dan mengembalikan objek berisi informasi dasar array: panjang array, elemen pertama, elemen terakhir, dan apakah array kosong.

## driver code
```javascript
// Tulis function getArrayInfo di sini

console.log(getArrayInfo([1, 2, 3, 4, 5]));
console.log(getArrayInfo(["a", "b", "c"]));
console.log(getArrayInfo([]));
```

## output
```javascript
{ length: 5, first: 1, last: 5, isEmpty: false }
{ length: 3, first: "a", last: "c", isEmpty: false }
{ length: 0, first: undefined, last: undefined, isEmpty: true }
```

## keyword
Array length, array indexing, array access, basic array properties

## difficulty
Easy
