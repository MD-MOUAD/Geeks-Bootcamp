-- 1. UPDATE to change the language of some films using valid language IDs
UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2, 3);

-- 2. Foreign keys for the customer table
-- the customer table has two foreign keys :
-- address_id REFERENCES address(address_id)
-- store_id REFERENCES store(store_id)
-- These constraints ensure that a customer cannot be added unless their store and address already exist.

-- 3. Drop the customer_review table


-- This is easy if there are no dependencies; otherwise, you may need to use CASCADE
DROP TABLE customer_review;

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet)
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

-- 5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT 
  f.title, 
  f.replacement_cost
FROM rental AS r
JOIN inventory AS i ON r.inventory_id = i.inventory_id
JOIN film AS f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;

-- Q6

-- 6.1 The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT f.title
FROM film AS f
JOIN film_actor AS fa ON f.film_id = fa.film_id
JOIN actor AS a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
AND f.description ILIKE '%sumo%';

-- 6.2 The 2nd film: short documentary, less than 1 hour, rated 'R'
SELECT title
FROM film
WHERE length < 60
AND rating = 'R'
AND description ILIKE '%documentary%';
