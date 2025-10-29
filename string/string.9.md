# String Processing

## challenge #9
Buatlah function `validateEmail` yang menerima parameter `email` dan melakukan validasi menggunakan berbagai string methods. Return objek berisi status validasi dan detail pengecekan.

## driver code
```javascript
// Tulis function validateEmail di sini

console.log(validateEmail("user@example.com"));
console.log(validateEmail("invalid.email"));
console.log(validateEmail("  test@domain.co.id  "));
```

## output
```javascript
{
  valid: true,
  email: "user@example.com",
  checks: {
    hasAt: true,
    hasDot: true,
    validLength: true,
    noSpaces: true
  }
}
{
  valid: false,
  email: "invalid.email",
  checks: {
    hasAt: false,
    hasDot: true,
    validLength: true,
    noSpaces: true
  }
}
{
  valid: true,
  email: "test@domain.co.id",
  checks: {
    hasAt: true,
    hasDot: true,
    validLength: true,
    noSpaces: true
  }
}
```

## keyword
includes, indexOf, trim, length, multiple string validations

## difficulty
Hard
