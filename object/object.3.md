# Object Processing

## challenge #3
Buatlah function `processObjectData` yang menerima object dan melakukan operasi: filter properties berdasarkan tipe data, transform values, dan return summary.

## driver code
```javascript
// Tulis function processObjectData di sini

let data = {
  name: "Product A",
  price: 100,
  inStock: true,
  category: "Electronics",
  rating: 4.5
};
console.log(processObjectData(data));
```

## output
```javascript
{
  original: { name: "Product A", price: 100, inStock: true, category: "Electronics", rating: 4.5 },
  byType: {
    strings: { name: "Product A", category: "Electronics" },
    numbers: { price: 100, rating: 4.5 },
    booleans: { inStock: true }
  },
  transformed: {
    NAME: "PRODUCT A",
    PRICE: 200,
    INSTOCK: true,
    CATEGORY: "ELECTRONICS", 
    RATING: 9
  }
}
```

## keyword
Object.entries, Object.fromEntries, type filtering, object transformation

## difficulty
Medium
