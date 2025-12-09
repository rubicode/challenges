# SQL Database Query

## challenge #8
Buatlah query SQL untuk menampilkan karyawan yang sudah bekerja lebih dari 2 tahun dari hari ini. Gunakan fungsi date untuk menghitung selisih tahun. Tampilkan `first_name`, `last_name`, `hire_date`, dan `years_worked` (dihitung dari hire_date sampai hari ini).

## database schema
```sql
-- Menggunakan tabel employees yang sama seperti soal #6
-- Asumsi tanggal hari ini adalah '2023-12-01'
```

## expected output
```
first_name | last_name | hire_date  | years_worked
-----------|-----------|------------|-------------
Jane       | Smith     | 2019-03-20 | 4
Alice      | Brown     | 2018-11-05 | 5
John       | Doe       | 2020-01-15 | 3
Charlie    | Wilson    | 2020-09-12 | 3
Diana      | Davis     | 2021-02-28 | 2
```

## keyword
SELECT, WHERE, DATE functions, DATEDIFF, YEAR

## difficulty
Medium
