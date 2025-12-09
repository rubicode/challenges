# Object Processing

## challenge #5
Buatlah function `manageStudents` yang menerima array of objects (students) dan melakukan operasi: add student, find by criteria, calculate statistics, dan group by category.

## driver code
```javascript
// Tulis function manageStudents di sini

let students = [
  { id: 1, name: "Alice", grade: 85, subject: "Math" },
  { id: 2, name: "Bob", grade: 92, subject: "Science" },
  { id: 3, name: "Charlie", grade: 78, subject: "Math" }
];

let result = manageStudents(students, {
  action: "analyze",
  newStudent: { id: 4, name: "Diana", grade: 88, subject: "Science" }
});
console.log(result);
```

## output
```javascript
{
  totalStudents: 4,
  averageGrade: 85.75,
  topStudent: { id: 2, name: "Bob", grade: 92, subject: "Science" },
  bySubject: {
    Math: [
      { id: 1, name: "Alice", grade: 85, subject: "Math" },
      { id: 3, name: "Charlie", grade: 78, subject: "Math" }
    ],
    Science: [
      { id: 2, name: "Bob", grade: 92, subject: "Science" },
      { id: 4, name: "Diana", grade: 88, subject: "Science" }
    ]
  },
  statistics: {
    Math: { count: 2, average: 81.5 },
    Science: { count: 2, average: 90 }
  }
}
```

## keyword
Array of objects, object manipulation, grouping, statistics, data analysis

## difficulty
Medium
