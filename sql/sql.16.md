# SQL Database Query

## challenge #16
Buatlah query SQL untuk menganalisis tren gaji dan performa hiring. Gunakan window functions untuk menampilkan `employee_name`, `hire_date`, `salary`, `running_total_salary` (kumulatif gaji sampai karyawan tersebut), `salary_rank` (ranking gaji), dan `prev_hire_salary` (gaji karyawan yang dipekerjakan sebelumnya berdasarkan tanggal).

## database schema
```sql
-- Menggunakan tabel employees yang sama seperti soal sebelumnya
-- Tambahan tabel untuk performance tracking
CREATE TABLE employee_performance (
    employee_id INT,
    review_date DATE,
    performance_score DECIMAL(3,2),
    bonus DECIMAL(10,2),
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

INSERT INTO employee_performance VALUES
(1, '2021-12-31', 4.2, 2000.00),
(2, '2021-12-31', 4.8, 3000.00),
(3, '2021-12-31', 4.0, 1500.00),
(4, '2021-12-31', 4.9, 4000.00),
(5, '2021-12-31', 4.7, 3500.00),
(6, '2021-12-31', 3.8, 1000.00);
```

## expected output
```
employee_name   | hire_date  | salary   | running_total_salary | salary_rank | prev_hire_salary
----------------|------------|----------|----------------------|-------------|------------------
Alice Brown     | 2018-11-05 | 65000.00 | 65000.00             | 2           | NULL
Jane Smith      | 2019-03-20 | 60000.00 | 125000.00            | 4           | 65000.00
John Doe        | 2020-01-15 | 50000.00 | 175000.00            | 6           | 60000.00
Charlie Wilson  | 2020-09-12 | 70000.00 | 245000.00            | 1           | 50000.00
Diana Davis     | 2021-02-28 | 45000.00 | 290000.00            | 7           | 70000.00
Bob Johnson     | 2021-06-10 | 55000.00 | 345000.00            | 5           | 45000.00
```

## keyword
SELECT, Window Functions, SUM OVER, RANK, LAG, ORDER BY, ROWS BETWEEN

## difficulty
Expert
