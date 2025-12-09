# SQL Database Query

## challenge #20
Buatlah query SQL kompleks yang mengkombinasikan semua teknik advanced: recursive CTE untuk organizational hierarchy, window functions untuk trend analysis, dan dynamic SQL untuk flexible reporting. Buat laporan komprehensif yang menampilkan struktur organisasi lengkap dengan analisis performa dan prediksi.

## database schema
```sql
-- Tabel tambahan untuk organizational structure
CREATE TABLE positions (
    id INT PRIMARY KEY,
    title VARCHAR(100),
    level_rank INT,
    salary_grade VARCHAR(10)
);

INSERT INTO positions VALUES
(1, 'Software Engineer', 3, 'P3'),
(2, 'Senior Software Engineer', 4, 'P4'),
(3, 'Engineering Manager', 5, 'M1'),
(4, 'Marketing Specialist', 3, 'P3'),
(5, 'Marketing Manager', 5, 'M1'),
(6, 'Sales Representative', 3, 'P3'),
(7, 'Sales Manager', 5, 'M1'),
(8, 'HR Specialist', 3, 'P3');

-- Update employees table
ALTER TABLE employees ADD COLUMN position_id INT;
UPDATE employees SET position_id = 1 WHERE id IN (1, 3);
UPDATE employees SET position_id = 2 WHERE id = 5;
UPDATE employees SET position_id = 4 WHERE id = 2;
UPDATE employees SET position_id = 6 WHERE id = 4;
UPDATE employees SET position_id = 8 WHERE id = 6;

-- Tabel untuk tracking career progression
CREATE TABLE career_history (
    id INT PRIMARY KEY,
    employee_id INT,
    position_id INT,
    start_date DATE,
    end_date DATE,
    salary_at_time DECIMAL(10,2),
    FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (position_id) REFERENCES positions(id)
);
```

## expected output
```
org_level | employee_path                    | employee_name   | position_title           | current_salary | team_size | avg_team_salary | salary_growth_rate | retention_risk | career_progression_score
----------|----------------------------------|-----------------|--------------------------|----------------|-----------|-----------------|--------------------|-----------------|-----------------------
1         | Charlie Wilson                   | Charlie Wilson  | Senior Software Engineer | 70000.00       | 2         | 52500.00        | 15.5%              | Low             | 8.5
2         | Charlie Wilson > John Doe        | John Doe        | Software Engineer        | 50000.00       | 0         | 0.00            | 8.2%               | Medium          | 6.2
2         | Charlie Wilson > Bob Johnson     | Bob Johnson     | Software Engineer        | 55000.00       | 0         | 0.00            | 12.1%              | Low             | 7.1
1         | Alice Brown                      | Alice Brown     | Sales Representative     | 65000.00       | 0         | 0.00            | 18.9%              | Low             | 9.2
1         | Jane Smith                       | Jane Smith      | Marketing Specialist     | 60000.00       | 1         | 45000.00        | 14.3%              | Medium          | 7.8
2         | Jane Smith > Diana Davis         | Diana Davis     | HR Specialist            | 45000.00       | 0         | 0.00            | 5.5%               | High            | 4.5
```

## keyword
Recursive CTE, WITH RECURSIVE, Window Functions, Complex JOINs, Performance Analysis, Organizational Hierarchy

## difficulty
Expert
