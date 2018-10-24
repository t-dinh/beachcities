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
    address         varchar(255),
    status          varchar(50),
    comments        varchar(500)
    );

CREATE TABLE Bid (
    bid_id          SERIAL PRIMARY KEY,
    consult_date    varchar(50),
    last_contact    varchar(50),
    est_cost        varchar(50),
    est_finish      varchar(50),
    bid_status      varchar(50),
    comments        varchar(500),
    contact_id      int REFERENCES Contact (contact_id)
);

CREATE TABLE Project(
    project_id      SERIAL PRIMARY KEY,
    address         varchar(50),
    est_cost        varchar(50),
    est_finish      varchar(50),
    start_date      varchar(50),
    end_date        varchar(50),
    materials       varchar(500),
    actual_cost     varchar(50),
    comments        varchar(500),
    satisfication   varchar(500),
    contact_id      int REFERENCES Contact (contact_id)
);

CREATE TABLE Employee (
    employee_id     SERIAL PRIMARY KEY,
    name            varchar(50),
    phone           varchar(50),
    email           varchar(50),
    address         varchar(255),
    status          varchar(50),
    comments        varchar(500),
    project_id      int REFERENCES Project (project_id)
);




INSERT INTO Contact(name, phone, email, address, status, comments)
VALUES 
('John Smith', '714-999-9999' , 'johnsmith@fake.com', '123 Fake Street Huntington Beach, CA 92605', 'Return Client', 'Happy with service'),
('Jane Doe', '714-321-4567', 'janetest@gmail.com', '123 Fake Street Huntington Beach, CA 92605', 'Return Client', 'Happy with service');

INSERT INTO Lead (consult_date, est_cost, est_finish, comments, contact_id)
VALUES
( 'October 23rd, 2018', '$3000.00', '2 Weeks', 'Decision to be made by Friday', 1);

INSERT INTO Project (address, est_cost, est_finish, start_date, materials,comments)
VALUES
('123 Fake Street', '$2000.00', '11/14/18', '10/10/18', 'Primer, Enamel Paint', 'Ahead of Schedule');



INSERT INTO Employee (name, phone, email, address, status, comments, project_id)
VALUES
('Jane Smith', '714-555-5555', 'jsmith@fake.com', '321 Fake Street Fountain Valley, CA 92728', 'Employed', 'Great Employee', 1);





INSERT INTO AppUser (username, email, password, admin)
VALUES
('jtorres', 'BeachCityPaintingOC@gmail.com', 'fj39g883', true);