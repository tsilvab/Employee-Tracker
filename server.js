const inquirer = require ("inquirer");
const mysql = require ("mysql");
 
require("console.table");

const connection = mysql.createConnection({
 host: "localhost",

  port: 3306,

  user: "root",

  password: "Thefmart1",
  database: "employee_DB",
});

connection.connect(function(err){
    if (err) throw err
    startPrompt();
});

function startPrompt() {
    inquirer
        .prompt([{
            name: "options",
            type: "list",
            message: "Welcome! What would you like to do?",
            choices: [
                    "View all employees",
                    "View all departments",
                    "View all roles",
                    "Add an employee",
                    "Add a department",
                    "Add a role",
                    "EXIT"
                    ]
            }]).then(function (answer) {
                switch (answer.options) {
                    case "View all employees":
                        allEmployees();
                        break;
                    case "View all departments":
                        allDepartments();
                        break;
                    case "View all roles":
                        allRoles();
                        break;
                    case "Add an employee":
                        addEmployee();
                        break;
                    case "Add a department":
                        addDepartment();
                        break;
                    case "Add a role":
                        addRole();
                        break;
                    case "EXIT": 
                        endApp();
                        break;
                    default:
                        break;
                }
        })
};

function allEmployees() {
    connection.query('SELECT * FROM employee', function(err, res) {
        if (err) throw err;
        console.log(res.length + " employees found!");
        console.table("Employees: ", res); 
        startPrompt();
    })
};

function allDepartments() {
    connection.query("SELECT * FROM department", function(err, res) {
        if(err)throw err;
        console.table("Departments: ", res);
        startPrompt();
    })
};

function allRoles() {
    connection.query("SELECT * FROM role", function(err, res){
        if (err) throw err;
        console.table("Roles: ", res);
        startPrompt();
    })
};
function addEmployee() {
    connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input", 
                message: "What is the employee's first name? "
            },
            {
                name: "last_name",
                type: "input", 
                message: "What is the employee's last name? "
            },
            {
                name: "role", 
                type: "list",
                choices: function() {
                let roleArr = [];
                for (let i = 0; i < res.length; i++) {
                    roleArr.push(res[i].title);
                }
                return roleArr;
                },
                message: "What is the role of this employee? "
            }
            ]).then(function (answer) {
                let roleID;
              for (let i = 0; i < res.length; i++) {
                if (res[i].title == answer.role) {
                    roleID = res[i].id;
                    console.log(roleID)
                }                  
                }  
                connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: roleID,
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your employee has been added!");
                     startPrompt();
                }
                )
            })
    })
}
function addDepartment() {
    inquirer
        .prompt(
            {
                name: "newdepartment", 
                type: "input", 
                message: "Which department do you want to add?"
            }
            ).then(function (answer) {
                connection.query(
                    "INSERT INTO department SET ?",
                    {
                        name: answer.newdepartment
                    });
                connection.query("SELECT * FROM department", function(err, res) {
                if(err)throw err;
                console.log("Department has been added!");
                console.table("Departments:", res);
               startPrompt();
                })
            })
};
                
function addRole() {
    connection.query("SELECT role.title AS Title, role.salary AS Salary FROM role", function(err, res) {
        inquirer 
        .prompt([
            {
                name: "role",
                type: "input", 
                message: "Which role do you want to add?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary of this role?"
            
            },
            {
                name: "department",
                type: "list",
                choices: function() 
                {
                    let deptArr = [];
                    for (let i = 0; i < res.length; i++) {
                    deptArry.push(res[i].name);
                    }
                    return deptArr;
                },
            }
        ]).then(function (answer) {
            let departmentId;
            for (let i = 0; i < res.length; i++) {
                if (res[i].name == answer.department) {
                    departmentId = res[i].id;
                }
            }

            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: answer.role,
                    salary: answer.salary,
                    department_id: departmentId
                },
                function (err, res) {
                    if(err)throw err;
                    console.log("Your new role has been added!");
                    startPrompt();
                })
        })
    })
};

function endApp() {
    console.log("Bye!")
    connection.end();
}