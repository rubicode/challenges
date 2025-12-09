# SQL Database Query

## challenge #15
Buatlah query SQL untuk menampilkan karyawan yang tidak memiliki bawahan (bukan manager) dan karyawan yang memiliki bawahan terbanyak. Gunakan CTE (Common Table Expression) dan multiple subqueries. Tampilkan `employee_name`, `role` ('Manager' atau 'Individual Contributor'), dan `subordinate_count`.

## database schema
```sql
-- Menggunakan tabel employees dengan manager_id yang sama seperti soal sebelumnya
```

## expected output
```
employee_name   | role                   | subordinate_count
----------------|------------------------|------------------
John Doe        | Individual Contributor | 0
Bob Johnson     | Individual Contributor | 0
Diana Davis     | Individual Contributor | 0
Jane Smith      | Manager                | 1
Alice Brown     | Manager                | 1
Charlie Wilson  | Manager                | 2
```

## keyword
SELECT, CTE, WITH, COUNT, LEFT JOIN, CASE, Subquery

## difficulty
Hard
