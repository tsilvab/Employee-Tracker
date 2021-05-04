const inquirer = require ("inquirer");
const mysql = require ("mysql");

const connection = mysql.create.connection({
 host: 'localhost',

  port: 3306,

  user: 'root',

  password: 'Thefmart1',
  database: 'employee_DB',
});

connection.connect(function(err){
    if (err) throw err;
})