# Array Processing

## challenge #9
Buatlah function `validateArrayData` yang menerima parameter `arr` dan melakukan validasi data menggunakan berbagai array methods. Return objek berisi hasil validasi dan statistik data.

## driver code
```javascript
// Tulis function validateArrayData di sini

let data1 = [1, 2, 3, 4, 5];
let data2 = [1, "2", 3, null, 5, undefined];
console.log(validateArrayData(data1));
console.log(validateArrayData(data2));
```

## output
```javascript
{
  isValid: true,
  allNumbers: true,
  hasNulls: false,
  hasUndefined: false,
  stats: {
    total: 5,
    numbers: 5,
    strings: 0,
    nulls: 0,
    undefined: 0
  },
  cleaned: [1, 2, 3, 4, 5]
}
{
  isValid: false,
  allNumbers: false,
  hasNulls: true,
  hasUndefined: true,
  stats: {
    total: 6,
    numbers: 3,
    strings: 1,
    nulls: 1,
    undefined: 1
  },
  cleaned: [1, 3, 5]
}
```

## keyword
Array every, some, filter, data validation, type checking

## difficulty
Hard
