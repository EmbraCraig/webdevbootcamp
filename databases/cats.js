var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

/*var george = new Cat({
    name:"Mrs. Norris",
    age:7,
    temperament:"Evil"
});

george.save(function(err, cat){
    if(err){
        console.log("something went wrong");
    } else {
        console.log("cat saved to db");
        console.log(cat);
    }
});*/

/*Cat.find({}, function(err, cats){
    if(err){
        console.log("Error: " + err);
    } else {
        console.log("cats found");
        console.log(cats);
    }
});*/

/*Cat.create({
    name:"Snowball",
    age:15,
    temperament:"Nice"
}, function(err, cat){
    if(err){
        console.log(err)
    } else {
        console.log(cat)
    }
});*/

Cat.find({}, function(err, cats){
    if(err){
        console.log("Error: " + err);
    } else {
        console.log("cats found");
        console.log(cats);
    }
});