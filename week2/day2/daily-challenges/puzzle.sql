-- Q1: Subquery returns NULL, so the NOT IN condition becomes UNKNOWN for all rows.
-- As a result, no rows match and the count is 0.
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL);

-- Q2: Subquery returns (5), so we count rows in FirstTab where id is NOT 5.
-- Rows with id 6 and 7 match, NULL is ignored → count is 2.
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5);

-- Q3: Subquery returns (5, NULL). Because NULL is in the list, the entire NOT IN condition is UNKNOWN.
-- Therefore, no row matches and the count is 0.
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab);

-- Q4: Subquery returns (5). We count rows in FirstTab where id is NOT 5.
-- Rows with id 6 and 7 match the condition → count is 2.
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL);
