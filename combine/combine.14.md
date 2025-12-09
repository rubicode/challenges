# Combine - Hard Level

## challenge #14
Buatlah function `processTransactions` yang memproses array transaksi menggunakan switch untuk tipe transaksi, for untuk iterasi, dan if untuk validasi saldo.

## driver code
```javascript
// Tulis function processTransactions di sini

let transactions = [
  {type: "deposit", amount: 1000},
  {type: "withdraw", amount: 500},
  {type: "transfer", amount: 2000}
];
let result = processTransactions(transactions, 800);
console.log(result);
```

## output
```javascript
{
  finalBalance: 1300,
  successful: 2,
  failed: 1,
  log: ["Deposit: +1000", "Withdraw: -500", "Transfer failed: insufficient funds"]
}
```

## keyword
Function, switch statement, for loop, if validation, transaction processing

## difficulty
Hard
