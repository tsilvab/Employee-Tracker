const inquirer = require ("inquirer");
const mysql = require ("mysql");

const connection = mysql.create.connection({
 host: 'localhost',

  port: 3306,

  user: 'root',

  password: '',
  database: 'employee_DB',
});
