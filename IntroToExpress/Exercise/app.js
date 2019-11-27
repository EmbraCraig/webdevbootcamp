var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "Meow",
        goldfish: "..."
    }
    var sound = sounds[animal];
    
    if (sound === undefined) {
        res.redirect("/unknown");
    }
    else {
        res.send("The " + animal + " says '" + sound + "'");
    }
});

app.get("/:repeat/:message/:number", function(req, res) {
    var word = req.params.message;
    var number = Number(req.params.number);
    res.send(getRepeatResponse(word, number));
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

function getRepeatResponse(word, number){
    var response = "";
    for(var i = 0; i < number; i++ ) {
        response += word + " ";
    }
    return response;
}

app.listen(3000, function() {
    console.log("Listening on port 3000");
});
