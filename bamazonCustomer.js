var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",

  // port
  port: 3306,

  // username
  user: "root",

  // password
  password: "Maxima@2005..",
  database: "bamazon_db"

});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  loadProducts();
});

function loadProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) { console.error(err); }
    showProducts(res);
  });
}

function showProducts(products) {
  console.log(products);
  for (var i = 0; i < products.length; i++) {
    console.log(
      "Product ID: " + products[i].item_id +
      " | Product: " + products[i].product_name +
      " | Department: " + products[i].department_name +
      " | Price: " + products[i].price +
      " | Quantity on hand:  " + products[i].stock_quantity
    );
  }
  customerOrder();
}
function customerOrder() {
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "\nWhat is the ID of the item you would like to purchase?",
        validate: function (userInput) {
          //regEx to validate whether number is entered
          if (userInput) {
            console.log('\nPicked Number')
            return true;
          } else {
            console.log("\nPlease give an ID");
            return false;
          }
        }
      },
      {
        name: "Order Quantity",
        type: "input",
        message: "How many of that item would you like?",
        validate: function (requestedQuantity, res) {
          connection.query(`SELECT * FROM products WHERE item_id in (${res.item})`, function (err, result) {
            if (err) { console.error(err); }
            var ourResult = result
            var stock_quantity = ourResult[0].stock_quantity;
            stock_quantity = Number(stock_quantity)
            res.item = Number(res.item)
            var purchase = (stock_quantity - requestedQuantity);
            if (requestedQuantity <= stock_quantity) {
              console.log("\nGreat! Your Order is being Shipped");
              connection.query(`UPDATE products SET stock_quantity = ${purchase} WHERE item_id = ${res.item}`, function (err, res) {
                if (err) { console.error(err); }
                console.log('\nUpdated inventory');
              });
              return true;
            } else {
              console.log("\nWe are not able to process your order. Please try again later.");
              return false;
            }
          });
        },
      }
    ])
};