var mysql = require ("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // port
    port: 3306,

    // username
    user: "user-PC",

    // password
    password: "",
    database: "bamazon_db"

});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
  });