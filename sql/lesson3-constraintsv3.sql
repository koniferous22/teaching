-- Basic setup
CREATE TABLE pupils (
  name varchar(40),
  favourite_subject varchar(40)
);

INSERT INTO pupils VALUES ('jozko', 'vlastiveda');
INSERT INTO pupils VALUES ('ferko', 'dejepis');
INSERT INTO pupils VALUES ('dezko', 'prirodopis');

-- Rest

CREATE TABLE thesis (
  student varchar(40),
  thesis_rating integer,
  thesis varchar(1000) UNIQUE,
  CONSTRAINT fk_student FOREIGN KEY(student) REFERENCES pupils(name)
);

-- note thesis has to be fixed otherwise will fail on unique constraints
INSERT INTO thesis VALUES ('jozko', 5 ,'Kde bolo, tam bolo2...');
INSERT INTO thesis VALUES ('ferko', 1 ,'Kde bolo, tam bolo...');
INSERT INTO thesis VALUES ('dezko', 1 ,'12345678');

-- SELECT * FROM pupils JOIN thesis ON pupils.name = thesis.student;
