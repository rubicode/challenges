# Array Processing

## challenge #8
Buatlah function `aggregateArray` yang menerima parameter `arr` dan melakukan berbagai operasi agregasi menggunakan reduce dan sort. Return objek berisi hasil agregasi dan array yang diurutkan.

## driver code
```javascript
// Tulis function aggregateArray di sini

console.log(aggregateArray([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(aggregateArray(["banana", "apple", "cherry", "date"]));
```

## output
```javascript
{
  original: [3, 1, 4, 1, 5, 9, 2, 6],
  sum: 31,
  product: 6480,
  max: 9,
  min: 1,
  sortedAsc: [1, 1, 2, 3, 4, 5, 6, 9],
  sortedDesc: [9, 6, 5, 4, 3, 2, 1, 1]
}
{
  original: ["banana", "apple", "cherry", "date"],
  concatenated: "bananaapplecherrydate",
  longest: "banana",
  shortest: "date",
  sortedAsc: ["apple", "banana", "cherry", "date"],
  sortedDesc: ["date", "cherry", "banana", "apple"]
}
```

## keyword
Array reduce, sort, aggregation, min/max operations

## difficulty
Hard
