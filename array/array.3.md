# Array Processing

## challenge #3
Buatlah function `manageStack` yang menerima parameter `arr` dan `operations` (array berisi operasi "push:value" atau "pop"). Return objek berisi array hasil dan log operasi.

## driver code
```javascript
// Tulis function manageStack di sini

console.log(manageStack([1, 2], ["push:3", "push:4", "pop"]));
console.log(manageStack([], ["push:a", "push:b", "pop", "push:c"]));
```

## output
```javascript
{
  result: [1, 2, 3],
  log: ["Added 3", "Added 4", "Removed 4"]
}
{
  result: ["a", "c"],
  log: ["Added a", "Added b", "Removed b", "Added c"]
}
```

## keyword
Array push, pop, stack operations, string parsing

## difficulty
Easy
