# SQL Database Query

## challenge #7
Buatlah query SQL untuk menampilkan semua department beserta jumlah karyawan di masing-masing department, termasuk department yang tidak memiliki karyawan. Gunakan LEFT JOIN dan tampilkan `department_name`, `budget`, dan `employee_count`.

## database schema
```sql
-- Menggunakan tabel departments dan employees yang sama seperti soal #6
-- Tambahan: Ada department tanpa karyawan
INSERT INTO departments VALUES (5, 'Research', NULL, 100000.00);
```

## expected output
```
department_name  | budget    | employee_count
-----------------|-----------|---------------
Engineering      | 500000.00 | 3
Marketing        | 200000.00 | 1
Sales            | 300000.00 | 1
Human Resources  | 150000.00 | 1
Research         | 100000.00 | 0
```

## keyword
SELECT, LEFT JOIN, COUNT, GROUP BY

## difficulty
Medium
