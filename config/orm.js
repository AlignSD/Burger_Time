const connection = require('./connection')

var tableName = "burgers";

var orm = {
    getBurgers: function(callback) {
        var s = "SELECT * FROM " + tableName;
        connection.query(s, function(err,res) {
            callback(res);
        });
    },
    insertOne: function(burgers, callback) {
        var s = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
        burgers.devoured = burgers.devoured || 0;
        connection.query(s, [
            burgers.burger_name, burgers.devoured
        ], function (err, res) {
            callback(res);
        });
    },
    updateOne:function(burgers, callback) {
        var s = "UPDATE " + tableName + " SET burger_name=? WHERE id=?";
        connection.query(s, [
            burgers.burger_name, burgers.id
        ], function(err, res) {
            callback(res);
        });
    }
};

module.exports = orm;
// * `selectAll()`
// * `insertOne()`
// * `updateOne()`