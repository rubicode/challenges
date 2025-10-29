# Array Processing

## challenge #7
Buatlah function `transformArray` yang menerima parameter `arr` dan `operations` (objek berisi transformasi yang akan dilakukan). Return objek berisi hasil map, forEach effects, dan statistik.

## driver code
```javascript
// Tulis function transformArray di sini

let numbers = [1, 2, 3, 4, 5];
console.log(transformArray(numbers, { 
  multiply: 2, 
  add: 1, 
  logEach: true 
}));
```

## output
```javascript
// Console output dari forEach:
Processing: 1 -> 3
Processing: 2 -> 5  
Processing: 3 -> 7
Processing: 4 -> 9
Processing: 5 -> 11

// Return value:
{
  original: [1, 2, 3, 4, 5],
  transformed: [3, 5, 7, 9, 11],
  stats: { processed: 5, sum: 30, average: 6 }
}
```

## keyword
Array map, forEach, array transformation, functional programming

## difficulty
Medium
