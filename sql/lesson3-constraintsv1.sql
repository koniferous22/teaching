-- Basic setup
CREATE TABLE pupils (
  name varchar(40),
  favourite_subject varchar(40)
);

INSERT INTO pupils VALUES ('jozko', 'vlastiveda');
INSERT INTO pupils VALUES ('ferko', 'dejepis');
INSERT INTO pupils VALUES ('dezko', 'prirodopis');

-- Rest

ALTER TABLE pupils ADD COLUMN thesis_rating integer, ADD COLUMN thesis varchar(10000);

UPDATE pupils SET thesis_rating = 5, thesis='Kde bolo tam bolo...' WHERE name = 'jozko';
UPDATE pupils SET thesis_rating = 1, thesis='Kde bolo tam bolo...' WHERE name = 'ferko';
UPDATE pupils SET thesis_rating = 2, thesis='12345678' WHERE name = 'dezko';

ALTER TABLE pupils ADD UNIQUE(thesis);

-- SELECT * FROM pupils
