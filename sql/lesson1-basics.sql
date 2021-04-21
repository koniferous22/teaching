
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

-- SELECT * FROM roommates
-- SELECT city FROM roommates

UPDATE roommates SET location = 'Kysucke nove mesto' WHERE name = 'bruno';

-- SELECT DISTINCT city from roommates;
-- SELECT * FROM roommates WHERE location = 'Brno';
-- SELECT * FROM roommates WHERE location = 'Brno' AND origin = 'Modra';
-- SELECT * FROM roommates WHERE location = 'Brno' AND (origin = 'Modra' OR origin = 'Žilina');

ALTER TABLE roommates ADD COLUMN hasJob boolean;
UPDATE roommates SET hasJob = true;
UPDATE roommates SET hasJob = false WHERE name = 'samo';

-- SELECT * FROM roommates
-- SELECT * FROM roommates ORDER BY name ASC

DELETE FROM roommates WHERE hasJob = false;
DELETE FROM roommates WHERE NOT hasJob;

-- todo explain difference here
-- DELETE FROM roommates;

DROP TABLE roommates;
