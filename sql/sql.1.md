# SQL Database Query

## challenge #1
Buatlah query SQL untuk menampilkan semua data dari tabel `employees` dan urutkan berdasarkan `last_name` secara ascending.

## database schema
```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    salary DECIMAL(10,2),
    department VARCHAR(50),
    hire_date DATE
);

-- Sample data
INSERT INTO employees VALUES
(1, 'John', 'Doe', 'john.doe@company.com', 50000.00, 'Engineering', '2020-01-15'),
(2, 'Jane', 'Smith', 'jane.smith@company.com', 60000.00, 'Marketing', '2019-03-20'),
(3, 'Bob', 'Johnson', 'bob.johnson@company.com', 55000.00, 'Engineering', '2021-06-10'),
(4, 'Alice', 'Brown', 'alice.brown@company.com', 65000.00, 'Sales', '2018-11-05'),
(5, 'Charlie', 'Wilson', 'charlie.wilson@company.com', 70000.00, 'Engineering', '2020-09-12');
```

## expected output
```
id | first_name | last_name | email                    | salary   | department   | hire_date
---|------------|-----------|--------------------------|----------|--------------|----------
4  | Alice      | Brown     | alice.brown@company.com  | 65000.00 | Sales        | 2018-11-05
1  | John       | Doe       | john.doe@company.com     | 50000.00 | Engineering  | 2020-01-15
3  | Bob        | Johnson   | bob.johnson@company.com  | 55000.00 | Engineering  | 2021-06-10
2  | Jane       | Smith     | jane.smith@company.com   | 60000.00 | Marketing    | 2019-03-20
5  | Charlie    | Wilson    | charlie.wilson@company.com| 70000.00 | Engineering  | 2020-09-12
```

## keyword
SELECT, ORDER BY, ASC

## difficulty
Easy
