var express = require("express");
// Set Handlebars.
var exphbs = require("express-handlebars");



// Import routes and give the server access to them.
var routes = require("./controllers/burger_time_controller");

var PORT = process.env.PORT || 8080;

var app = express();
// Static content for the app from the "public" directory
app.use(express.static("public"));

// parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");



app.use(routes);

// Start our server so that it can begin listening to client
app.listen(PORT, function() {
    // Log (server-side) When our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});