# SQL Database Query

## challenge #19
Buatlah query SQL yang mengoptimalkan performa dengan menggunakan indexing strategy. Buat query untuk mencari karyawan berdasarkan multiple criteria dengan execution plan yang efisien. Analisis query performance dan berikan rekomendasi index yang diperlukan.

## database schema
```sql
-- Tabel besar untuk testing performance
CREATE TABLE employee_transactions (
    id INT PRIMARY KEY,
    employee_id INT,
    transaction_date DATE,
    transaction_type VARCHAR(50),
    amount DECIMAL(10,2),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- Insert sample data (simulasi 100,000 records)
-- Untuk testing, kita akan menggunakan subset data
INSERT INTO employee_transactions VALUES
(1, 1, '2023-01-15', 'Salary', 50000.00, 'Monthly salary payment', '2023-01-15 09:00:00'),
(2, 1, '2023-01-20', 'Bonus', 2000.00, 'Performance bonus', '2023-01-20 14:30:00'),
(3, 2, '2023-01-15', 'Salary', 60000.00, 'Monthly salary payment', '2023-01-15 09:00:00'),
(4, 3, '2023-01-15', 'Salary', 55000.00, 'Monthly salary payment', '2023-01-15 09:00:00'),
(5, 4, '2023-01-15', 'Salary', 65000.00, 'Monthly salary payment', '2023-01-15 09:00:00'),
(6, 5, '2023-01-15', 'Salary', 70000.00, 'Monthly salary payment', '2023-01-15 09:00:00');

-- Recommended indexes for optimization
-- CREATE INDEX idx_employee_transactions_emp_date ON employee_transactions(employee_id, transaction_date);
-- CREATE INDEX idx_employee_transactions_type_amount ON employee_transactions(transaction_type, amount);
-- CREATE INDEX idx_employees_dept_salary ON employees(department_id, salary);
```

## expected output
```
employee_name   | department_name | total_transactions | total_amount | avg_transaction | last_transaction_date | performance_category
----------------|-----------------|--------------------|--------------|-----------------|-----------------------|--------------------
John Doe        | Engineering     | 2                  | 52000.00     | 26000.00        | 2023-01-20           | High Performer
Jane Smith      | Marketing       | 1                  | 60000.00     | 60000.00        | 2023-01-15           | Standard
Bob Johnson     | Engineering     | 1                  | 55000.00     | 55000.00        | 2023-01-15           | Standard
Alice Brown     | Sales           | 1                  | 65000.00     | 65000.00        | 2023-01-15           | Standard
Charlie Wilson  | Engineering     | 1                  | 70000.00     | 70000.00        | 2023-01-15           | Standard
```

## keyword
SELECT, JOIN, Performance Optimization, INDEX, Execution Plan, EXPLAIN

## difficulty
Expert
