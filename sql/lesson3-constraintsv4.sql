-- Basic setup
CREATE TABLE pupils (
  name varchar(40),
  favourite_subject varchar(40)
);

INSERT INTO pupils VALUES ('jozko', 'vlastiveda');
INSERT INTO pupils VALUES ('ferko', 'dejepis');
INSERT INTO pupils VALUES ('dezko', 'prirodopis');

-- Rest

DELETE FROM pupils;

ALTER TABLE pupils ADD COLUMN id SERIAL PRIMARY KEY;

INSERT INTO pupils (name,favourite_subject) VALUES ('jozko', 'vlastiveda');
INSERT INTO pupils (name,favourite_subject) VALUES ('ferko', 'dejepis');
INSERT INTO pupils (name,favourite_subject) VALUES ('dezko', 'prirodopis');

CREATE TABLE thesis (
  student_id serial UNIQUE,
  thesis_rating integer,
  thesis varchar(1000) UNIQUE,
  CONSTRAINT fk_student FOREIGN KEY(student_id) REFERENCES pupils(id)
);

INSERT INTO thesis VALUES (1, 5 ,'Kde bolo, tam bolo2...');
INSERT INTO thesis VALUES (2, 1 ,'Kde bolo, tam bolo...');
INSERT INTO thesis VALUES (3, 1 ,'12345678');

-- SELECT * FROM pupils JOIN thesis ON pupils.name = thesis.student;
