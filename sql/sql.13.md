# SQL Database Query

## challenge #13
Buatlah query SQL untuk menampilkan karyawan yang gajinya merupakan gaji tertinggi di department mereka masing-masing. Gunakan window function atau correlated subquery. Tampilkan `first_name`, `last_name`, `department_name`, `salary`, dan `rank_in_department`.

## database schema
```sql
-- Menggunakan tabel departments dan employees yang sama seperti soal sebelumnya
```

## expected output
```
first_name | last_name | department_name | salary   | rank_in_department
-----------|-----------|-----------------|----------|-------------------
Charlie    | Wilson    | Engineering     | 70000.00 | 1
Jane       | Smith     | Marketing       | 60000.00 | 1
Alice      | Brown     | Sales           | 65000.00 | 1
Diana      | Davis     | Human Resources | 45000.00 | 1
```

## keyword
SELECT, JOIN, Window Functions, RANK, PARTITION BY, Correlated Subquery

## difficulty
Hard
