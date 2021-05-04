USE DATABASE employee_DB;

/* insert data for department */
INSERT INTO department (name)
VALUE ("Sales");

INSERT INTO department (name)
VALUE ("Engineering");

INSERT INTO department (name)
VALUE ("Adminstration");

INSERT INTO department (name)
VALUE ("Finance");


/* insert data for role */
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 150000, 4);

INSERT INTO role (title, salary, department_id)
VALUE ("Senior Engineer", 180000, 2);

INSERT INTO role (title, salary, department_id)
VALUE ("Junior Engineer", 120000, 2);

INSERT INTO role (title, salary, department_id)
VALUE ("Adminstrative Assistant", 80000, 3);

INSERT INTO role (title, salary, department_id)
VALUE ("Office Manager", 100000, 3);

INSERT INTO role (title, salary, department_id)
VALUE ("Director", 200000, 1);

INSERT INTO role (title, salary, department_id)
VALUE ("Sales Lead", 90000, 1);

/* insert data for employee */
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Tiffany", "Silva", null, 1);

INSERT INTO employeee (first_name, last_name, manager_id, role_id)
VALUE ("Martin", "Bel", null, 2);

INSERT INTO employeee (first_name, last_name, manager_id, role_id)
VALUE ("Theo", "Ayala", null, 3);

INSERT INTO employeee (first_name, last_name, manager_id, role_id)
VALUE ("Marie", "Billings", null, 4);

INSERT INTO employeee (first_name, last_name, manager_id, role_id)
VALUE ("Joe", "Gi", null, 5);

INSERT INTO employeee (first_name, last_name, manager_id, role_id)
VALUE ("Jane", "Doe", null, 6);

INSERT INTO employeee (first_name, last_name, manager_id, role_id)
VALUE ("John", "Jacob", null, 7);