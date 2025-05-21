-- 1. In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM customer;

-- 2. Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT first_name || ' ' || last_name AS full_name FROM customer;

-- 3. Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT DISTINCT create_date FROM customer;

-- 4. Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
SELECT * FROM customer ORDER BY first_name DESC;

-- 5. Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT film_id, title, description, release_year, rental_rate 
FROM film 
ORDER BY rental_rate ASC;

-- 6. Address and phone of customers in Texas
SELECT address, phone 
FROM address 
WHERE district = 'Texas';

-- 7. Movies where film_id is 15 or 150
SELECT * 
FROM film 
WHERE film_id IN (15, 150);

-- 8. Check if titanic movie exists
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title = 'Titanic';

-- 9. Find all movies starting with the first 2 letters of my favorite movie
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title LIKE 'My%';

-- 10. Find the 10 cheapest movies
SELECT * 
FROM film 
ORDER BY rental_rate ASC 
LIMIT 10;

-- 11. Find the next 10 cheapest movies (without LIMIT using subquery)
SELECT * 
FROM film 
WHERE rental_rate > (
    SELECT MAX(rental_rate) 
    FROM (
        SELECT rental_rate 
        FROM film 
        ORDER BY rental_rate ASC 
        LIMIT 10
    ) AS first_10
)
ORDER BY rental_rate ASC 
LIMIT 10;

-- 12. Join customer and payment tables
SELECT c.first_name, c.last_name, p.amount, p.payment_date 
FROM customer AS c
JOIN payment AS p ON c.customer_id = p.customer_id 
ORDER BY c.customer_id;

-- 13. Movies not in inventory
SELECT * 
FROM film 
WHERE film_id NOT IN (
    SELECT film_id FROM inventory
);

-- 14. Which city is in which country
SELECT ci.city, co.country 
FROM city AS ci
JOIN country AS co ON ci.country_id = co.country_id;

-- 15. Customer payments by staff member
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, p.staff_id 
FROM customer AS c
JOIN payment AS p ON c.customer_id = p.customer_id 
ORDER BY p.staff_id;
