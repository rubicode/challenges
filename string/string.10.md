# String Processing

## challenge #10
Buatlah function `textAnalyzer` yang menerima parameter `text` dan melakukan analisis lengkap menggunakan semua string methods yang telah dipelajari. Return objek dengan statistik komprehensif.

## driver code
```javascript
// Tulis function textAnalyzer di sini

let result = textAnalyzer("  Hello World! This is a TEST string.  ");
console.log(result);
```

## output
```javascript
{
  original: "  Hello World! This is a TEST string.  ",
  cleaned: "Hello World! This is a TEST string.",
  stats: {
    totalLength: 39,
    cleanedLength: 35,
    wordCount: 6,
    sentenceCount: 1,
    uppercaseCount: 4,
    lowercaseCount: 26
  },
  words: ["Hello", "World!", "This", "is", "a", "TEST", "string."],
  longestWord: "string.",
  shortestWord: "a",
  hasNumbers: false,
  hasSpecialChars: true
}
```

## keyword
All string methods, comprehensive text analysis, multiple validations

## difficulty
Hard
