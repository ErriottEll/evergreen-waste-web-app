-- this \c is for the psql command line to work
\c egdb;

CREATE TABLE events (
    ID SERIAL PRIMARY KEY,
    title VARCHAR,
    allDay BOOLEAN,
    startDate DATE,
    endDate DATE
);

INSERT INTO events (title, allDay, startDate, endDate)
    VALUES ('Trash pickup', true, '5/14/2018', '5/15/2018');