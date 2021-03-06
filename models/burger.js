const orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  add: function(burger_name, cb) {
    orm.add(burger_name, function(res) {
      cb(res);
    });
  },
  
  update: function(selectedId, cb) {
    orm.update(selectedId, function(res) {
      cb(res);
    });
  }
};

// Export functions for controller (burgers)
module.exports = burger;
