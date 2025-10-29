# Array Processing

## challenge #4
Buatlah function `manageQueue` yang menerima parameter `arr` dan `operations` (array berisi operasi "enqueue:value" atau "dequeue"). Return objek berisi array hasil dan statistik operasi.

## driver code
```javascript
// Tulis function manageQueue di sini

console.log(manageQueue([1, 2], ["enqueue:3", "dequeue", "enqueue:4"]));
console.log(manageQueue([], ["enqueue:x", "enqueue:y", "dequeue"]));
```

## output
```javascript
{
  result: [2, 3, 4],
  stats: { enqueued: 2, dequeued: 1, operations: 3 }
}
{
  result: ["y"],
  stats: { enqueued: 2, dequeued: 1, operations: 3 }
}
```

## keyword
Array shift, unshift, queue operations, FIFO

## difficulty
Medium
