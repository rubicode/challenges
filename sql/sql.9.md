# SQL Database Query

## challenge #9
Buatlah query SQL untuk menampilkan karyawan beserta informasi manager mereka. Gunakan self-join pada tabel employees. Tampilkan `employee_name` (first_name + last_name), `employee_salary`, `manager_name`, dan `manager_salary`. Jika karyawan tidak memiliki manager, tampilkan 'No Manager'.

## database schema
```sql
-- Update tabel employees dengan menambah kolom manager_id
ALTER TABLE employees ADD COLUMN manager_id INT;

-- Update data dengan manager relationships
UPDATE employees SET manager_id = 5 WHERE id IN (1, 3); -- Charlie manages John and Bob
UPDATE employees SET manager_id = 2 WHERE id = 6;        -- Jane manages Diana
UPDATE employees SET manager_id = 4 WHERE id = 2;        -- Alice manages Jane
-- Charlie (id=5) dan Alice (id=4) tidak punya manager
```

## expected output
```
employee_name   | employee_salary | manager_name    | manager_salary
----------------|-----------------|-----------------|---------------
John Doe        | 50000.00        | Charlie Wilson  | 70000.00
Jane Smith      | 60000.00        | Alice Brown     | 65000.00
Bob Johnson     | 55000.00        | Charlie Wilson  | 70000.00
Alice Brown     | 65000.00        | No Manager      | NULL
Charlie Wilson  | 70000.00        | No Manager      | NULL
Diana Davis     | 45000.00        | Jane Smith      | 60000.00
```

## keyword
SELECT, SELF JOIN, LEFT JOIN, CONCAT, COALESCE, ISNULL

## difficulty
Medium
