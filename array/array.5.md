# Array Processing

## challenge #5
Buatlah function `arrayOperations` yang menerima parameter `arr`, `start`, `deleteCount`, dan `items`. Function melakukan operasi slice dan splice, return objek berisi hasil kedua operasi.

## driver code
```javascript
// Tulis function arrayOperations di sini

console.log(arrayOperations([1, 2, 3, 4, 5], 1, 2, [10, 20]));
console.log(arrayOperations(["a", "b", "c", "d"], 0, 1, ["x"]));
```

## output
```javascript
{
  original: [1, 2, 3, 4, 5],
  sliced: [2, 3],
  spliced: [1, 10, 20, 4, 5],
  removed: [2, 3]
}
{
  original: ["a", "b", "c", "d"],
  sliced: ["a"],
  spliced: ["x", "b", "c", "d"],
  removed: ["a"]
}
```

## keyword
Array slice, splice, array modification, immutable vs mutable

## difficulty
Medium
