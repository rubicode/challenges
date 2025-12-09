# Object Processing

## challenge #6
Buatlah function `createCalculator` yang mengembalikan object calculator dengan berbagai methods matematika. Calculator harus bisa menyimpan history operasi dan memiliki method untuk reset.

## driver code
```javascript
// Tulis function createCalculator di sini

let calc = createCalculator();
console.log(calc.add(5, 3));
console.log(calc.multiply(4, 2));
console.log(calc.divide(10, 2));
console.log(calc.getHistory());
calc.reset();
console.log(calc.getHistory());
```

## output
```javascript
8
8
5
[
  { operation: "add", operands: [5, 3], result: 8 },
  { operation: "multiply", operands: [4, 2], result: 8 },
  { operation: "divide", operands: [10, 2], result: 5 }
]
[]
```

## keyword
Object methods, function composition, state management, method chaining

## difficulty
Medium
