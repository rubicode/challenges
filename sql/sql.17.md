# SQL Database Query

## challenge #17
Buatlah query SQL untuk menganalisis produktivitas department dengan pivot table. Tampilkan department sebagai baris dan tahun hiring sebagai kolom, dengan nilai berupa total gaji karyawan yang dipekerjakan pada tahun tersebut. Gunakan CASE WHEN untuk membuat pivot table manual atau PIVOT function jika tersedia.

## database schema
```sql
-- Menggunakan tabel departments dan employees yang sama seperti soal sebelumnya
-- Tambahan data untuk variasi tahun
INSERT INTO employees VALUES
(7, 'Eva', 'Martinez', 'eva.martinez@company.com', 58000.00, 2, '2018-07-15'),
(8, 'Frank', 'Taylor', 'frank.taylor@company.com', 52000.00, 1, '2019-05-20'),
(9, 'Grace', 'Anderson', 'grace.anderson@company.com', 48000.00, 3, '2020-03-10');
```

## expected output
```
department_name | year_2018 | year_2019 | year_2020 | year_2021 | total_salary
----------------|-----------|-----------|-----------|-----------|-------------
Engineering     | 0.00      | 52000.00  | 120000.00 | 55000.00  | 227000.00
Marketing       | 58000.00  | 60000.00  | 0.00      | 0.00      | 118000.00
Sales           | 65000.00  | 0.00      | 48000.00  | 0.00      | 113000.00
Human Resources | 0.00      | 0.00      | 0.00      | 45000.00  | 45000.00
```

## keyword
SELECT, JOIN, GROUP BY, CASE WHEN, SUM, YEAR, Pivot Table

## difficulty
Expert
