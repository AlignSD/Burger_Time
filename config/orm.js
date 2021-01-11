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
    add: function(addBurger, cb) {
        var s = 'INSERT INTO burgers (burger_name, devoured) VALUES ("${addBurger}",false);';
        connection.query(s, [addBurger.toString()], function (err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    },
    update:function(selectedID, cb) {
        var s = "UPDATE burgers SET devoured=true WHERE id=?";
        connection.query(s, [burgerID], function(err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;
