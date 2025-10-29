# String Processing

## challenge #8
Buatlah function `cleanAndFormat` yang menerima parameter `text` dan `width`. Function membersihkan whitespace berlebih, memformat ke lebar tertentu dengan padding, dan return hasil formatting.

## driver code
```javascript
// Tulis function cleanAndFormat di sini

console.log(cleanAndFormat("  Hello   World  ", 15));
console.log(cleanAndFormat("JavaScript", 12));
console.log(cleanAndFormat("  Code  ", 8));
```

## output
```javascript
{
  cleaned: "Hello World",
  padded: "  Hello World  ",
  length: 15
}
{
  cleaned: "JavaScript",
  padded: " JavaScript ",
  length: 12
}
{
  cleaned: "Code",
  padded: "  Code  ",
  length: 8
}
```

## keyword
trim, padStart, padEnd, string cleaning, formatting

## difficulty
Medium
