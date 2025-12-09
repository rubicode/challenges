# Object Processing

## challenge #8
Buatlah function `validateObjectSchema` yang menerima object dan schema definition untuk validasi. Return detailed validation results dengan error messages.

## driver code
```javascript
// Tulis function validateObjectSchema di sini

let user = {
  name: "John",
  email: "john@example.com",
  age: 25,
  address: {
    street: "Jl. Sudirman",
    city: "Jakarta"
  }
};

let schema = {
  name: { type: "string", required: true, minLength: 2 },
  email: { type: "string", required: true, pattern: /@/ },
  age: { type: "number", required: true, min: 18, max: 100 },
  address: {
    type: "object",
    required: true,
    properties: {
      street: { type: "string", required: true },
      city: { type: "string", required: true }
    }
  }
};

console.log(validateObjectSchema(user, schema));
```

## output
```javascript
{
  isValid: true,
  errors: [],
  validatedFields: ["name", "email", "age", "address.street", "address.city"],
  summary: {
    total: 5,
    valid: 5,
    invalid: 0
  }
}
```

## keyword
Object validation, schema validation, nested object validation, error handling

## difficulty
Hard
