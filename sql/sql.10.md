# SQL Database Query

## challenge #10
Buatlah query SQL untuk menampilkan ringkasan gaji per department dengan informasi tambahan. Tampilkan `department_name`, `total_employees`, `avg_salary`, `min_salary`, `max_salary`, dan `salary_range` (max - min). Urutkan berdasarkan `avg_salary` descending.

## database schema
```sql
-- Menggunakan tabel departments dan employees yang sama seperti soal sebelumnya
```

## expected output
```
department_name | total_employees | avg_salary | min_salary | max_salary | salary_range
----------------|-----------------|------------|------------|------------|-------------
Engineering     | 3               | 58333.33   | 50000.00   | 70000.00   | 20000.00
Sales           | 1               | 65000.00   | 65000.00   | 65000.00   | 0.00
Marketing       | 1               | 60000.00   | 60000.00   | 60000.00   | 0.00
Human Resources | 1               | 45000.00   | 45000.00   | 45000.00   | 0.00
```

## keyword
SELECT, JOIN, GROUP BY, AVG, MIN, MAX, COUNT, ORDER BY

## difficulty
Medium
