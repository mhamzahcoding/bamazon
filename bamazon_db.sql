-- Drops the bamazon_db if it already exists --
DROP DATABASE IF EXISTS bamazon_db;
-- Create a database called bamazon_db --
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
    -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
     -- Makes a sting column called "product_name" --
    product_name VARCHAR(30) NOT NULL,
     -- Makes a sting column called "department_name" --
    department_name VARCHAR(30) NOT NULL,
    -- Makes an numeric column called "price" --
    price DECIMAL(5,2),
    -- Makes an numeric column called "stock_quantity" --
    stock_quantity INTEGER(10),
    -- Sets item_id as this table's primary key which means all data contained within it will be unique --
    PRIMARY KEY (item_id)
);

    -- Creates new rows containing data in all named columns --
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("iPhone 8", "Electronic", 799.99, 10);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Doritos", "Chips & Crisps", 1.89, 50);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("King Size Bed", "Furniture", 259.99, 5);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Levis 514", "Clothing", 49.99, 15);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Trampoline", "Sports & Outdoors", 319.00, 9);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Spider-Man Costume", "Halloween", 21.59, 66);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Imperial Diamond Ring", "Engagement Rings", 690.99, 4);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Gucci Bloom", "Fragrances", 79.99, 25);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Castrol Oil", "Oils and Fluids", 24.67, 48);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Balloons", "Party Supplies", 1.22, 100);