# Array Processing

## challenge #10
Buatlah function `arrayAnalyzer` yang menerima parameter `arr` dan melakukan analisis komprehensif menggunakan semua array methods yang telah dipelajari. Return objek dengan statistik dan transformasi lengkap.

## driver code
```javascript
// Tulis function arrayAnalyzer di sini

let data = [5, 2, 8, 1, 9, 3];
let result = arrayAnalyzer(data);
console.log(result);
```

## output
```javascript
{
  original: [5, 2, 8, 1, 9, 3],
  length: 6,
  statistics: {
    sum: 28,
    average: 4.67,
    min: 1,
    max: 9,
    median: 4,
    mode: null
  },
  transformations: {
    doubled: [10, 4, 16, 2, 18, 6],
    squared: [25, 4, 64, 1, 81, 9],
    filtered: [5, 8, 9],
    reversed: [3, 9, 1, 8, 2, 5]
  },
  sorted: {
    ascending: [1, 2, 3, 5, 8, 9],
    descending: [9, 8, 5, 3, 2, 1]
  },
  validation: {
    allNumbers: true,
    hasNegatives: false,
    hasZeros: false,
    hasDuplicates: false
  }
}
```

## keyword
All array methods, comprehensive analysis, statistics, data processing

## difficulty
Hard
