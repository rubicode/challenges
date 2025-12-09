# Combine - Hard Level

## challenge #18
Buatlah function `validateForm` yang memvalidasi form data menggunakan if untuk setiap field, for untuk iterasi errors, dan while untuk retry mechanism.

## driver code
```javascript
// Tulis function validateForm di sini

let formData = {
  name: "John",
  email: "invalid-email",
  age: 15,
  password: "123"
};
console.log(validateForm(formData));
```

## output
```javascript
{
  valid: false,
  errors: [
    "Email format invalid",
    "Age must be 18 or older", 
    "Password too short"
  ],
  validFields: ["name"]
}
```

## keyword
Function, if validation, for loop, while loop, form validation

## difficulty
Hard
