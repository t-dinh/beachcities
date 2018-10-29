DROP DATABASE BcpDatabase;
CREATE DATABASE BcpDatabase;
\c bcpdatabase;

CREATE TABLE AppUser(
    user_id         SERIAL PRIMARY KEY,
    username        varchar(50),
    email           varchar(50),
    password        varchar(500),
    admin           boolean
);

CREATE TABLE Contact (
    contact_id      SERIAL PRIMARY KEY,
    name            varchar(50),
    phone           varchar(50),
    email           varchar(50),
    address         varchar(50),
    city            varchar(50),
    zip             varchar(10),
    status          varchar(50),
    satisfaction    varchar(50),
    comments        varchar(500)
    );

CREATE TABLE Bid (
    bid_id          SERIAL PRIMARY KEY,
    consult_date    varchar(50),
    last_contact    varchar(50),
    address         varchar(50),
    city            varchar(50),
    zip             varchar(10),
    est_cost        varchar(50),
    est_finish      varchar(50),
    bid_status      varchar(50),
    comments        varchar(500),
    contact_id      int REFERENCES Contact (contact_id)
);

CREATE TABLE Project(
    project_id      SERIAL PRIMARY KEY,
    address         varchar(50),
    city            varchar(50),
    zip             varchar(10),
    est_cost        varchar(50),
    est_finish      varchar(50),
    start_date      varchar(50),
    end_date        varchar(50),
    materials       varchar(500),
    actual_cost     varchar(50),
    comments        varchar(500),
    satisfaction   varchar(500),
    contact_id      int REFERENCES Contact (contact_id)
);

CREATE TABLE Employee (
    employee_id     SERIAL PRIMARY KEY,
    name            varchar(50),
    phone           varchar(50),
    email           varchar(50),
    address         varchar(50),
    city            varchar(50),
    zip             varchar(10),
    status          varchar(50),
    comments        varchar(500),
    project_id      int REFERENCES Project (project_id)
);




INSERT INTO Contact(name, phone, email, address, city, zip, status, comments)
VALUES 
('John Smith', '714-999-9999' , 'johnsmith@fake.com', '123 Fake Street', 'Huntington Beach', '92605', 'Client', 'Happy with service'),
('Frank Doe', '714-321-4567', 'franktest@gmail.com', '12233 Fake Street', 'Huntington Beach', '92605', 'Client', 'Happy with service'),
('Jane Bustos', '562-321-4567', 'janetest@gmail.com', '432 Fake Street', 'Huntington Beach','92605', 'Bidding', 'Wants a call back on the 4th'),
('Randy Hawk', '213-321-4567', 'randytest@gmail.com', '987 Fake Street', 'Huntington Beach',  '92605', 'Prospect', 'Chose another company due to cost'),
('Buzz Woodson', '756-321-4567', 'buzztest@gmail.com', '15432 Fake Street', 'Huntington Beach','92605', 'Client', 'May need new service in 6 months');

INSERT INTO Bid (consult_date, last_contact, address, city, zip, est_cost, est_finish, bid_status, comments, contact_id)
VALUES
( 'October 23rd, 2018', 'October 23rd, 2018','123 Fake Street', 'Huntington Beach', '92605', '$3000.00', '3 Weeks', 'Won', 'Will start 10/31', 3),
( 'October 23rd, 2018', 'October 31st, 2018','123 Fake Street', 'Huntington Beach', '92605', '$4000.00', '1 Week', 'Won', 'Wants to move forward next week', 3),
( 'October 23rd, 2018', 'October 24th, 2018', '123 Fake Street', 'Huntington Beach', '92605','$5500.00', '3 Weeks', 'Open', 'Unsure', 4),
( 'October 23rd, 2018', 'October 26th, 2018', '123 Fake Street', 'Huntington Beach', '92605', ' $3000.00', '4 Days', 'Open', 'Decision to be made by Friday', 4),
( 'October 23rd, 2018', 'October 23rd, 2018', '123 Fake Street', 'Huntington Beach','92605', '$1000.00', '2 Weeks', 'Closed', 'Bid counter', 4);

INSERT INTO Project (address, city, zip, est_cost, est_finish, start_date, end_date, materials, actual_cost, comments, satisfaction, contact_id)
VALUES
('123 Fake Street', 'Huntington Beach', '92605','$2000.00', '11/14/18', '10/10/18', '10/31/18', 'Primer, Enamel Paint', '$2100.00', 'happy', 'Ahead of Schedule', 1),
('1233 Fake Street', 'Huntington Beach', '92605', '$2000.00', '11/14/18', '10/10/18', null, 'Primer, Enamel Paint', null, 'content', 'Ahead of Schedule', 2),
('1223 Fake Street', 'Fountain Valley', '92728','$2000.00', '11/14/18', '10/10/18', null, 'Primer, Enamel Paint', null, 'happy', 'Ahead of Schedule', 5),
('1253 Fake Street', 'Fountain Valley', '92728', '$2000.00', '11/14/18', '10/10/18', '10/29/18','Primer, Enamel Paint', '1900.00', 'upset', 'Ahead of Schedule', 1),
('123 Fake Street', 'Huntington Beach', '92605', '$2000.00', '11/14/18', '10/10/18', null, 'Primer, Enamel Paint', '1500.00', 'happy', 'Ahead of Schedule', 2);



INSERT INTO Employee (name, phone, email, address, city, zip, status, comments, project_id)
VALUES
('Bill Nguyen', '714-555-5555', 'jsmith@fake.com', '32145 Fake Street', 'Fountain Valley', '92728', 'Employed', 'Great Employee', 1),
('Carlos Cruz', '714-545-4355', 'jsmith@fake.com', '2321 Fake Street','Fountain Valley', '92728', 'Employed', 'Great Employee', 1),
('Frank Smith', '714-555-5434', 'jsmith@fake.com', '34321 Fake Street' ,'Fountain Valley', '92728', 'Employed', 'Great Employee', 1),
('Tyler Fanley', '714-555-8655', 'jsmith@fake.com', '3212 Fake Street', 'Fountain Valley', '92728', 'Employed', 'Great Employee', 1),
('Jill Wilson', '714-555-4567', 'jsmith@fake.com', '354 Fake Street', 'Fountain Valley','92728', 'Employed', 'Great Employee', 1);





INSERT INTO AppUser (username, email, password, admin)
VALUES
('jtorres', 'BeachCityPaintingOC@gmail.com', 'fj39g883', true);