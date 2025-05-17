-- @block
-- All items, ordered by price (lowest to highest).
SELECT * FROM items
ORDER BY price ASC;

-- @block
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items
WHERE price >= 80
ORDER BY price DESC;

-- @block
-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name FROM customers
ORDER BY first_name ASC;

-- @block
-- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM customers
ORDER BY last_name DESC;



-- @block
-- fill items table
INSERT INTO items (name, price) VALUES
('Fan', 80),
('Small Desk', 100),
('Large Desk', 300),
('Lamp', 40),
('Office Chair', 150),
('Bookshelf', 120),
('Monitor', 200),
('Keyboard', 60),
('Mouse', 30),
('Notebook', 15),
('Pen Holder', 10),
('Desk Mat', 25),
('Whiteboard', 90),
('Filing Cabinet', 180),
('Printer', 250),
('Router', 85),
('Laptop Stand', 70),
('Table Clock', 35),
('USB Hub', 20),
('Power Strip', 50);



