# Object Processing

## challenge #9
Buatlah function `createDataStore` yang mengimplementasikan simple database dengan objects dan arrays. Support CRUD operations, indexing, dan query functionality.

## driver code
```javascript
// Tulis function createDataStore di sini

let store = createDataStore();
store.insert({ id: 1, name: "Alice", department: "IT", salary: 5000 });
store.insert({ id: 2, name: "Bob", department: "HR", salary: 4500 });
store.insert({ id: 3, name: "Charlie", department: "IT", salary: 5500 });

console.log(store.find({ department: "IT" }));
console.log(store.update(2, { salary: 4800 }));
console.log(store.getStats());
```

## output
```javascript
[
  { id: 1, name: "Alice", department: "IT", salary: 5000 },
  { id: 3, name: "Charlie", department: "IT", salary: 5500 }
]
{
  success: true,
  updated: { id: 2, name: "Bob", department: "HR", salary: 4800 }
}
{
  totalRecords: 3,
  departments: ["IT", "HR"],
  averageSalary: 5100,
  salaryRange: { min: 4800, max: 5500 }
}
```

## keyword
CRUD operations, data store, indexing, query processing, object database

## difficulty
Hard
