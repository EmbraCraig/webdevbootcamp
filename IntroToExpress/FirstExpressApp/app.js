var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dog", function(req, res){
    res.send("MEOW!");
});

app.get("/dog/:breed", function(req, res){
    res.send("The " + req.params.breed + " says WOOF!!")
});

app.get("*", function(req, res){
    res.send("YOU ARE A STAR!!");
});

app.listen(3000, function(){
    console.log("Listening on port 3000");
});