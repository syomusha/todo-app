// require("dotenv").config({path: "./config/config.env"});
var express =require('express');
var todoController = require('./controllers/todoController')

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'))

todoController(app);

// localhost:3000/assets/styles.css

app.listen(3000);
console.log('youre listening to port 3000');
