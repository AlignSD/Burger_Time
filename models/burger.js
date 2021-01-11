const connection = require("../config/connection");
const orm = require("../config/orm");

var burger = {
  getBurgers: function(cb) {
    orm.getBurgers("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

/*
var burger = {
    getBurgers: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;

      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";

      console.log(queryString);

      connection.query(queryString, vals, function(err, res) {
          if (err) {throw err;}
            cb(res);
      });
  },
  updateOne: function(table, objColVals, conditionq, cb) {
      var queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += objToString(objColVals);
      queryString += " Where ";
      queryString += conditionq;

      console.log(queryString);
      connection.query(queryString, function(err, res) {
          if(err) {
              throw err;
          }
          cb(res);
      });
  }
};
*/
// Export functions for controller (burgers)
module.exports = burger;
