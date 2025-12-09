# Object Processing

## challenge #2
Buatlah function `createPerson` yang mengembalikan object person dengan properties dan methods. Object harus memiliki method `introduce()`, `updateAge()`, dan `getInfo()`.

## driver code
```javascript
// Tulis function createPerson di sini

let person = createPerson("Alice", 30, "Developer");
console.log(person.introduce());
person.updateAge(31);
console.log(person.getInfo());
```

## output
```javascript
Hello, my name is Alice and I am a Developer
{
  name: "Alice",
  age: 31,
  profession: "Developer",
  yearsExperience: 1
}
```

## keyword
Object methods, this keyword, method definition, object behavior

## difficulty
Easy
