-- Partially forked from lesson 1

CREATE TABLE roommates (
    id          integer,
  	name        varchar(40),
	location    varchar(1000),
    origin      varchar(1000)
);

INSERT INTO roommates (id, name, location, origin) VALUES (1, 'adam', 'Brno', 'Poprad');
INSERT INTO roommates (id, name, location, origin) VALUES (2, 'vinco', 'Brno', 'Modra');
INSERT INTO roommates (id, name, location, origin) VALUES (3, 'petra', 'Brno', 'Modra');
INSERT INTO roommates (id, name, location, origin) VALUES (4, 'bruno', 'Brno', 'Žilina');
INSERT INTO roommates (id, name, location, origin) VALUES (5, 'samo', 'Brno', 'Žilina');
INSERT INTO roommates (id, name, location, origin) VALUES (6, 'matus', 'Brno', 'Prešov');

UPDATE roommates SET location = 'Kysucke nove mesto' WHERE name = 'bruno';

INSERT INTO roommates (id, name, location, origin) VALUES (7, 'samo', 'Brno', 'Žilina');


ALTER TABLE roommates ADD COLUMN hasJob boolean;
UPDATE roommates SET hasJob = true;
UPDATE roommates SET hasJob = false WHERE id = 5;

-- TODO try query that will fail
-- ! SELECT * FROM roommates GROUP BY location
-- SELECT location FROM roommates GROUP BY location -- same as distinct
-- SELECT location, COUNT(id), FROM roommates GROUP BY location

-- SOME more features
ALTER TABLE roommates ADD COLUMN gender boolean, ADD COLUMN age integer;

UPDATE roommates SET gender = false, age = 23;
UPDATE roommates SET gender = true, age = 25 WHERE id=3;

UPDATE roommates SET age = 24 WHERE id IN (1,2);

-- SELECT origin, COUNT(id), AVG(age)
-- FROM roommates
-- GROUP BY origin;

-- Multiple grouping example

-- SELECT origin, gender, COUNT(id), AVG(age)
-- FROM roommates
-- GROUP BY origin, gender;

-- Endangered species

-- SELECT origin, gender, COUNT(id), AVG(age)
-- FROM roommates
-- GROUP BY origin, gender
-- HAVING COUNT(id) < 3;
