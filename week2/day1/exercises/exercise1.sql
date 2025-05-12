CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price INTEGER
);

CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

INSERT INTO items (name, price)
VALUES 
  ('Small Desk', 100),
  ('Large Desk', 300),
  ('Fan', 80);

INSERT INTO customers (first_name, last_name)
VALUES 
	('Greg', 'Jones'),
	('Sandra', 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Melanie', 'Johnson');

select * from items where price > 80;
select * from items where price <= 300;


select * from customers where last_name = 'Smith';
select * from customers where last_name = 'Jones';
select * from customers where first_name != 'Scott';



