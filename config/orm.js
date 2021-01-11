const connection = require('./connection')

var tableName = "burgers";

var orm = {
    getBurgers: function(tableName, cb) {
        var s = "SELECT * FROM " + tableName;
        connection.query(s, function(err,res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function(burgers, cb) {
        var s = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
        burgers.devoured = burgers.devoured || 0;
        connection.query(s, [
            burgers.burger_name, burgers.devoured
        ], function (err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne:function(burgers, cb) {
        var s = "UPDATE " + tableName + " SET burger_name=? WHERE id=?";
        connection.query(s, [
            burgers.burger_name, burgers.id
        ], function(err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;
// * `selectAll()`
// * `insertOne()`
// * `updateOne()`