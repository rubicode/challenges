# String Processing

## challenge #7
Buatlah function `replaceText` yang menerima parameter `text`, `oldText`, dan `newText`. Return objek berisi teks hasil replace, jumlah replacement yang dilakukan, dan teks original.

## driver code
```javascript
// Tulis function replaceText di sini

console.log(replaceText("Hello world hello", "hello", "hi"));
console.log(replaceText("test test test", "test", "exam"));
console.log(replaceText("JavaScript", "Python", "Java"));
```

## output
```javascript
{
  result: "Hello world hi",
  replacements: 1,
  original: "Hello world hello"
}
{
  result: "exam exam exam",
  replacements: 3,
  original: "test test test"
}
{
  result: "JavaScript",
  replacements: 0,
  original: "JavaScript"
}
```

## keyword
replace, replaceAll, string replacement, case sensitivity

## difficulty
Medium
