SELECT MAX(MAX_SALARY), MIN(min_salary), 
      (SUM(min_salary) + SUM(max_salary)) AS SALARIO_TOTAL,
      (SUM(min_salary) + SUM(max_salary)/2) AS MEDIA_SALARIAL
FROM hr.jobs