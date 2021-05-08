USE employee_DB;
/* insert data for department */
INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Adminstration");

INSERT INTO department (name)
VALUES ("Finance");


/* insert data for role */
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 150000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Senior Engineer", 180000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Junior Engineer", 120000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Adminstrative Assistant", 80000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Office Manager", 100000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Director", 200000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 90000, 1);

/* insert data for employee */
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Tiffany", "Silva", null, 1);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Martin", "Bel", null, 2);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Theo", "Ayala", null, 3);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Marie", "Billings", null, 4);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Joe", "Gi", null, 5);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Jane", "Doe", null, 6);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("John", "Jacob", null, 7);