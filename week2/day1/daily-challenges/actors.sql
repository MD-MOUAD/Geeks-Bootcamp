SELECT count(*) FROM actors;

INSERT INTO actors (first_name, last_name, age)
VALUES ('Matt', 'Damon', '1970-10-08');

--ERROR:  null value in column "number_oscars" of relation "actors" violates not-null constraint
-- DETAIL:  Failing row contains (13, Eric, Sam, 1990-02-08, null).

