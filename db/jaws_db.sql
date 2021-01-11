DROP DATABASE IF EXISTS w71o1aommjrtggrb;

CREATE DATABASE w71o1aommjrtggrb;

USE w71o1aommjrtggrb;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
    
    
);

INSERT INTO burgers (burger_name, devoured) VALUE ("Hamburger", false);
INSERT INTO burgers (burger_name, devoured) VALUE ("Cheeseburger", false);
INSERT INTO burgers (burger_name, devoured) VALUE ("BBQ burger", false);