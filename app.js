var express = require('express')
var app = express();
var dpath = require("path");
var router = express.Router();
var path = __dirname + '/views/';

app.set('view engine', 'ejs');

app.use(express.static(dpath.join(__dirname, 'views')));

app.get("/",function(req,res){
  res.render('index');
});

app.use("*",function(req,res){
  res.render('index.ejs');
});


app.listen(80,function(){
  console.log("Live at Port 80");
});