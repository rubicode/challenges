# Object Processing

## challenge #1
Buatlah function `analyzeObject` yang menerima parameter `obj` dan mengembalikan informasi tentang object: jumlah properties, daftar keys, daftar values, dan apakah object kosong.

## driver code
```javascript
// Tulis function analyzeObject di sini

let person = { name: "John", age: 25, city: "Jakarta" };
let empty = {};
console.log(analyzeObject(person));
console.log(analyzeObject(empty));
```

## output
```javascript
{
  propertyCount: 3,
  keys: ["name", "age", "city"],
  values: ["John", 25, "Jakarta"],
  isEmpty: false
}
{
  propertyCount: 0,
  keys: [],
  values: [],
  isEmpty: true
}
```

## keyword
Object properties, Object.keys, Object.values, property access

## difficulty
Easy
