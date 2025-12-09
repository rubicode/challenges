# SQL Database Query

## challenge #18
Buatlah query SQL untuk mengidentifikasi anomali gaji dan merekomendasikan optimasi. Gunakan statistical functions untuk menghitung outliers berdasarkan standard deviation. Tampilkan karyawan yang gajinya berada di luar 2 standard deviation dari rata-rata department mereka, beserta rekomendasi penyesuaian gaji.

## database schema
```sql
-- Menggunakan tabel yang sama seperti soal sebelumnya
-- Tambahan tabel untuk salary benchmarks
CREATE TABLE salary_benchmarks (
    department_id INT,
    position_level VARCHAR(20),
    min_salary DECIMAL(10,2),
    max_salary DECIMAL(10,2),
    market_avg DECIMAL(10,2),
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

INSERT INTO salary_benchmarks VALUES
(1, 'Junior', 45000.00, 60000.00, 52500.00),
(1, 'Senior', 60000.00, 80000.00, 70000.00),
(2, 'Junior', 40000.00, 55000.00, 47500.00),
(2, 'Senior', 55000.00, 70000.00, 62500.00),
(3, 'Junior', 35000.00, 50000.00, 42500.00),
(3, 'Senior', 50000.00, 75000.00, 62500.00),
(4, 'Junior', 35000.00, 50000.00, 42500.00),
(4, 'Senior', 45000.00, 60000.00, 52500.00);
```

## expected output
```
employee_name   | department_name | current_salary | dept_avg | dept_stddev | z_score | outlier_type | recommended_salary | adjustment_needed
----------------|-----------------|----------------|----------|-------------|---------|--------------|--------------------|-----------------
Charlie Wilson  | Engineering     | 70000.00       | 56250.00 | 8539.13     | 1.61    | High        | 65000.00           | -5000.00
Alice Brown     | Sales           | 65000.00       | 56500.00 | 12020.82    | 0.71    | Normal      | 65000.00           | 0.00
Diana Davis     | Human Resources | 45000.00       | 45000.00 | 0.00        | 0.00    | Normal      | 45000.00           | 0.00
```

## keyword
SELECT, Statistical Functions, STDDEV, AVG, ABS, CASE WHEN, Mathematical calculations

## difficulty
Expert
