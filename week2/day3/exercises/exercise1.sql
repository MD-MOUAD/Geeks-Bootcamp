-- @block
-- 1. Get a list of all the languages
SELECT * FROM language;

-- @block
-- 2. Get all films joined with their languages
SELECT 
  film.title, 
  film.description, 
  language.name AS language_name
FROM film
JOIN language ON film.language_id = language.language_id;

-- @block
-- 3. Get all languages even if no films exist in that language
SELECT 
  film.title, 
  film.description, 
  language.name AS language_name
FROM language
LEFT JOIN film ON film.language_id = language.language_id;


-- @block
-- 4. Create a new table new_film and add films
CREATE TABLE new_film (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES 
('The Silent Wind'), 
('Shadows of Time'), 
('Nova Strike');


-- @block
-- 5. Create the customer_review table
CREATE TABLE customer_review (
  review_id SERIAL PRIMARY KEY,
  film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
  language_id INT REFERENCES language(language_id),
  title VARCHAR(255),
  score INT CHECK (score BETWEEN 1 AND 10),
  review_text TEXT,
  last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- @block
-- Add 2 movie reviews:
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
(1, 1, 'Amazing!', 9, 'A thrilling and emotional story.'),
(2, 2, 'Not bad', 7, 'Enjoyable but a bit slow in the middle.');


-- @block
-- 7. Delete a film that has a review:
DELETE FROM new_film WHERE id = 1;
