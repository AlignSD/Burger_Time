const connection = require('./connection.js')



var orm = {
    all: function(getTable, cb) {
        var s = "SELECT * FROM ??";
        connection.query(s, getTable, function(err,res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    },
    create: function(newBurger, cb) {
        var s = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(s, newBurger, function (err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    },
    update:function(selectedID, cb) {
        var s = "UPDATE burgers SET devoured = NOT devoured WHERE id=?";
        connection.query(s, selectedID, function(err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;
