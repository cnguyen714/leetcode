CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
RETURN(
  # Write your MySQL query statement below.
      SELECT Salary FROM Employee
      ORDER BY Salary DESC
      LIMIT 1
      OFFSET N
);
END