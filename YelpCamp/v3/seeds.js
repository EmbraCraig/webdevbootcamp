var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80",
        description: "blah blah blah blah"
    },
    {
        name: "Desert Mesa", 
        image: "https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "blah blah blah blah"
    },
    {
        name: "Canyon Floor", 
        image: "https://images.unsplash.com/photo-1525209149972-1d3faa797c3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "blah blah blah blah"
    },
]

function seedDB(){  
   Campground.remove({}, function(err){
        if (err) {
            console.log(err);
        } else {
           console.log("removed campgrounds!");
           data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("Added campground");
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet!",
                                author: "Homer"
                            }, function(err, comment){
                                if (err) {
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created new comment");
                                }
                            });
                    }
                });
            });
        }
    });
    
    
}

module.exports = seedDB;