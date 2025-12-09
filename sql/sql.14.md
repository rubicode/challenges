# SQL Database Query

## challenge #14
Buatlah query SQL untuk menampilkan analisis gaji berdasarkan tahun hiring. Tampilkan `hire_year`, `employees_hired`, `avg_salary`, `total_salary`, dan `cumulative_employees` (jumlah kumulatif karyawan yang dipekerjakan sampai tahun tersebut). Urutkan berdasarkan tahun.

## database schema
```sql
-- Menggunakan tabel employees yang sama seperti soal sebelumnya
```

## expected output
```
hire_year | employees_hired | avg_salary | total_salary | cumulative_employees
----------|-----------------|------------|--------------|--------------------
2018      | 1               | 65000.00   | 65000.00     | 1
2019      | 1               | 60000.00   | 60000.00     | 2
2020      | 2               | 60000.00   | 120000.00    | 4
2021      | 2               | 50000.00   | 100000.00    | 6
```

## keyword
SELECT, GROUP BY, YEAR, AVG, SUM, COUNT, Window Functions, SUM OVER

## difficulty
Hard
