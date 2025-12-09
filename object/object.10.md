# Object Processing

## challenge #10
Buatlah function `objectAnalyzer` yang melakukan analisis komprehensif terhadap complex nested objects. Analyze structure, dependencies, dan perform deep operations.

## driver code
```javascript
// Tulis function objectAnalyzer di sini

let complexData = {
  users: [
    { id: 1, name: "Alice", posts: [{ title: "Hello", likes: 10 }] },
    { id: 2, name: "Bob", posts: [{ title: "World", likes: 5 }, { title: "Test", likes: 15 }] }
  ],
  settings: {
    theme: "dark",
    notifications: { email: true, push: false }
  },
  metadata: {
    version: "1.0",
    lastUpdated: "2023-01-01"
  }
};

console.log(objectAnalyzer(complexData));
```

## output
```javascript
{
  structure: {
    depth: 4,
    totalKeys: 12,
    arrayCount: 3,
    objectCount: 8,
    primitiveCount: 11
  },
  analysis: {
    users: {
      count: 2,
      totalPosts: 3,
      totalLikes: 30,
      averageLikes: 10
    },
    settings: {
      enabledFeatures: ["email"],
      disabledFeatures: ["push"]
    }
  },
  flattened: {
    "users.0.id": 1,
    "users.0.name": "Alice",
    "users.0.posts.0.title": "Hello",
    "users.0.posts.0.likes": 10,
    "settings.theme": "dark",
    "settings.notifications.email": true,
    "metadata.version": "1.0"
  }
}
```

## keyword
Deep object analysis, nested structures, object flattening, complex data processing

## difficulty
Hard
