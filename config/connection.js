// connect to mysql server

const mysql = require("mysql");


  if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
  
  var source = {
    localhost: {
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : 'Mfcwa04rsxtypes',
    database : 'burgers_db'
    }
  };
  var connection = mysql.createConnection(source.localhost);
}
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;
