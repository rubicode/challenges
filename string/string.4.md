# String Processing

## challenge #4
Buatlah function `searchInText` yang menerima parameter `text` dan `searchTerm`. Return objek berisi apakah kata ditemukan, posisi pertama, dan total kemunculan.

## driver code
```javascript
// Tulis function searchInText di sini

console.log(searchInText("Hello world hello", "hello"));
console.log(searchInText("JavaScript is awesome", "Python"));
console.log(searchInText("test test test", "test"));
```

## output
```javascript
{ found: true, firstIndex: 12, count: 1 }
{ found: false, firstIndex: -1, count: 0 }
{ found: true, firstIndex: 0, count: 3 }
```

## keyword
indexOf, includes, string search, case sensitivity

## difficulty
Medium
