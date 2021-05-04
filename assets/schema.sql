DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE department (
    id NOT NULL AUTO_INCREMENT,
    name VARCHAR(25),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id NOT NULL AUTO_INCREMENT,
    title VARCHAR(25),
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(20,
    last_name VARCHAR(20),
    manager_id INT,
    role_id INT,
    PRIMARY KEY (id)
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;