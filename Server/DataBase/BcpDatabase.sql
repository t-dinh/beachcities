CREATE TABLE AppUser(
    user_id         SERIAL PRIMARY KEY,
    username        varchar(50),
    email           varchar(50),
    password        varchar(500),
    admin           boolean
);

CREATE TABLE Project(
    project_id      SERIAL PRIMARY KEY,
    address         varchar(50),
    est_cost        varchar(50),
    materials       varchar(500),
    start_date      varchar(50),
    end_date        varchar(50),
    actual_cost     varchar(50),
    comments        varchar(500)
);

CREATE TABLE Contact (
    contact_id      SERIAL PRIMARY KEY,
    name            varchar(50),
    phone           varchar(50),
    email           varchar(50),
    address         varchar(255),
    status          varchar(50),
    comments        varchar(500),
    project_id      int REFERENCES Project (project_id)
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


CREATE TABLE Lead (
    lead_id         SERIAL PRIMARY KEY,
    contact_id      int REFERENCES Contact(contact_id),
    consult_date    varchar(50),
    est_cost        varchar(50),
    est_finish      varchar(50),
    comments        varchar(500)
);


-- ALTER TABLE Project 
-- ADD COLUMN    client_id  (
--     client_id      int REFERENCES Contact (contact_id)




INSERT INTO Project (address, est_cost, materials, start_date, comments)
VALUES
('123 Fake Street', '$2000.00', 'Primer, Enamel Paint', '10/10/18','Ahead of Schedule');

INSERT INTO Contact(name, phone, email, address, status, comments, project_id)
VALUES 
('John Smith', '714-999-9999' , 'johnsmith@fake.com', '123 Fake Street Huntington Beach, CA 92605', 'Return Client', 'Happy with service', 1);



INSERT INTO Lead (contact_id, consult_date, est_cost, est_finish, comments)
VALUES
(1, 'October 23rd, 2018', '$3000.00', '2 Weeks', 'Decision to be made by Friday');

INSERT INTO Employee (name, phone, email, address, status, comments, project_id)
VALUES
('Jane Smith', '714-555-5555', 'jsmith@fake.com', '321 Fake Street Fountain Valley, CA 92728', 'Employed', 'Great Employee', 1);





INSERT INTO AppUser (username, email, password, admin)
VALUES
('jtorres', 'BeachCityPaintingOC@gmail.com', 'fj39g883', true);