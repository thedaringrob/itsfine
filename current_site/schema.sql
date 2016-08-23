DROP TABLE IF EXISTS rsvp;

CREATE TABLE rsvp (
  fname VARCHAR (75) UNIQUE,
  lname VARCHAR (75) UNIQUE,
  phone INTEGER,
  email VARCHAR (100) UNIQUE,
  size INTEGER
)