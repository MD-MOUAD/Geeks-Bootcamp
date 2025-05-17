-- 1. Create 2 tables : Customer and Customer profile. They have a One to One relationship.
create table customer (
	id serial not null primary key,
	first_name varchar(50),
	last_name varchar(50) NOT NULL
);
create table customer_profile(
	id serial not null primary key,
	customer_id int not null,
	isLoggedIn boolean default false,
	constraint c_customer_id foreign key (customer_id) references customer(id)
);

-- 2. Insert those customers
insert into customer (first_name, last_name) 
values
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');
-- 3. Insert those customer profiles, use subqueries
insert into customer_profile(isLoggedIn , customer_id)
values 
(true, (select id from customer where first_name='John')),
(false, (select id from customer where first_name='Jerome'))

-- 4. Use the relevant types of Joins to display
-- The first_name of the LoggedIn customers
select customer.first_name from customer
inner join customer_profile on customer.id=customer_profile.customer_id
where customer_profile.isloggedin=true;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
select customer.first_name , customer_profile.isloggedin from customer
left join customer_profile on customer.id=customer_profile.customer_id;

-- The number of customers that are not LoggedIn
select count(*) from customer_profile 
inner join customer on customer.id=customer_profile.customer_id
where customer_profile.isloggedin=true;

-- Part II:
-- Q1
create table book (
	book_id serial not null primary key,
	title varchar(255) not null,
	author varchar(100) not null
);
-- Q2
insert into Book (title, author) 
values
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');
-- Q3
create table student (
	student_id serial not null primary key,
	name varchar(100) not null unique,
	age int check (age <=15)
)

-- Q4
insert into Student (name, age) 
values
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);
-- Q5
create table library(
	book_fk_id int not null,
	student_fk_id int not null,
	borrowed_date date,
	foreign key (book_fk_id) references Book(book_id) on delete cascade on update cascade,
	foreign key (student_fk_id) references student(student_id) on delete cascade on update cascade,
	primary key (book_fk_id, student_fk_id)
)

-- Q6
insert into library (student_fk_id,book_fk_id,borrowed_date)
values
((select student_id from student where name='John'),(select book_id from Book where title='Alice In Wonderland'),'15/02/2022'),
((select student_id from student where name='Bob'),(select book_id from Book where title='To kill a mockingbird'),'03/03/2021'),
((select student_id from student where name='Lera'),(select book_id from Book where title='Alice In Wonderland'),'23/05/2021'),
((select student_id from student where name='Bob'),(select book_id from Book where title='Harry Potter'),'12/08/2021');

-- Q7
select * from library;

select student.name , Book.title from student 
inner join library on library.student_fk_id=student.student_id
inner join Book on Book.book_id=library.book_fk_id;

select avg(student.age) as average_age from student 
inner join library on library.student_fk_id=student.student_id
inner join Book on Book.book_id=library.book_fk_id
where Book.title='Alice In Wonderland'

delete from student 
where student_id=1

-- when the student was removed the borrowing was removed from the library table 
