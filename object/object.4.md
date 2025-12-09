# Object Processing

## challenge #4
Buatlah function `extractUserData` yang menerima object user dan menggunakan destructuring untuk extract data. Return object dengan data yang sudah di-restructure dan validasi.

## driver code
```javascript
// Tulis function extractUserData di sini

let user = {
  id: 1,
  profile: {
    name: "John Doe",
    email: "john@example.com",
    address: {
      street: "Jl. Sudirman",
      city: "Jakarta",
      zipCode: "12345"
    }
  },
  preferences: {
    theme: "dark",
    language: "id"
  }
};
console.log(extractUserData(user));
```

## output
```javascript
{
  userId: 1,
  fullName: "John Doe",
  email: "john@example.com",
  location: "Jl. Sudirman, Jakarta 12345",
  settings: {
    theme: "dark",
    language: "id"
  },
  isComplete: true
}
```

## keyword
Object destructuring, nested objects, data extraction, object restructuring

## difficulty
Medium
