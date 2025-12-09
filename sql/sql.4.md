# SQL Database Query

## challenge #4
Buatlah query SQL untuk menampilkan karyawan yang dipekerjakan antara tahun 2019 dan 2020 (inclusive), atau yang gajinya di atas 65000. Tampilkan semua kolom dan urutkan berdasarkan `salary` descending.

## database schema
```sql
-- Menggunakan tabel employees yang sama seperti soal #1
```

## expected output
```
id | first_name | last_name | email                      | salary   | department  | hire_date
---|------------|-----------|----------------------------|----------|-------------|----------
5  | Charlie    | Wilson    | charlie.wilson@company.com | 70000.00 | Engineering | 2020-09-12
4  | Alice      | Brown     | alice.brown@company.com    | 65000.00 | Sales       | 2018-11-05
2  | Jane       | Smith     | jane.smith@company.com     | 60000.00 | Marketing   | 2019-03-20
1  | John       | Doe       | john.doe@company.com       | 50000.00 | Engineering | 2020-01-15
```

## keyword
SELECT, WHERE, BETWEEN, OR, ORDER BY, DESC

## difficulty
Easy
