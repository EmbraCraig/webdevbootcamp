var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732a78d29249c450_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/54e6d0434957a514f6da8c7dda793f7f1636dfe2564c704c732a78d29249c450_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/54e5dd424856ae14f6da8c7dda793f7f1636dfe2564c704c732a78d29249c450_340.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    
    res.redirect("/campgrounds");
});



app.listen(3000, function() {
    console.log("The YelpCamp server has started!");
})