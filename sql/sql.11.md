# SQL Database Query

## challenge #11
Buatlah query SQL untuk menampilkan karyawan yang gajinya di atas rata-rata gaji keseluruhan perusahaan. Gunakan subquery untuk menghitung rata-rata gaji. Tampilkan `first_name`, `last_name`, `salary`, `avg_company_salary`, dan `salary_difference` (selisih gaji dengan rata-rata).

## database schema
```sql
-- Menggunakan tabel employees yang sama seperti soal sebelumnya
```

## expected output
```
first_name | last_name | salary   | avg_company_salary | salary_difference
-----------|-----------|----------|--------------------|-----------------
Jane       | Smith     | 60000.00 | 57500.00          | 2500.00
Alice      | Brown     | 65000.00 | 57500.00          | 7500.00
Charlie    | Wilson    | 70000.00 | 57500.00          | 12500.00
```

## keyword
SELECT, WHERE, Subquery, AVG, Arithmetic operations

## difficulty
Hard
