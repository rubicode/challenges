# Array Processing

## challenge #7
Buatlah function `transformArray` yang menerima parameter `arr` dan `operations` (objek berisi transformasi yang akan dilakukan). Return objek berisi hasil map, forEach effects, dan statistik.

## driver code
```javascript
// Tulis function transformArray di sini

let numbers = [1, 2, 4, 6, 9];
console.log(transformArray(numbers, { 
  multiply: 2, 
  add: 1, 
  logEach: true 
}));
```

## output
```javascript
// Console output dari forEach:
Processing ke-1: 1 -> 3
Processing ke-2: 2 -> 5  
Processing ke-3: 4 -> 9
Processing ke-4: 6 -> 13
Processing ke-5: 9 -> 19

// Return value:
{
  original: [1, 2, 4, 6, 9],
  transformed: [3, 5, 9, 13, 19],
  stats: { processed: 5, sum: 49, average: 9.8 }
}
```

## keyword
Array map, forEach, array transformation, functional programming

## difficulty
Medium
