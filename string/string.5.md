# String Processing

## challenge #5
Buatlah function `extractText` yang menerima parameter `text`, `start`, dan `end`. Return substring dari posisi start sampai end, serta informasi apakah extraction berhasil.

## driver code
```javascript
// Tulis function extractText di sini

console.log(extractText("JavaScript", 0, 4));
console.log(extractText("Programming", 3, 7));
console.log(extractText("Hello", 10, 15));
```

## output
```javascript
{ result: "Java", success: true, original: "JavaScript" }
{ result: "gram", success: true, original: "Programming" }
{ result: "", success: false, original: "Hello" }
```

## keyword
substring, slice, string extraction, bounds checking

## difficulty
Medium
