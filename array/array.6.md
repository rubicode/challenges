# Array Processing

## challenge #6
Buatlah function `searchArray` yang menerima parameter `arr` dan `criteria` (objek berisi type, value, condition). Return objek berisi hasil pencarian menggunakan find, filter, dan includes.

## driver code
```javascript
// Tulis function searchArray di sini

let numbers = [1, 5, 10, 15, 20];
console.log(searchArray(numbers, { type: "number", value: 10, condition: "greater" }));

let words = ["apple", "banana", "cherry"];
console.log(searchArray(words, { type: "string", value: "an", condition: "contains" }));
```

## output
```javascript
{
  found: 15,
  filtered: [15, 20],
  includes: true,
  count: 2
}
{
  found: "banana",
  filtered: ["banana"],
  includes: false,
  count: 1
}
```

## keyword
Array find, filter, includes, indexOf, search operations

## difficulty
Medium
