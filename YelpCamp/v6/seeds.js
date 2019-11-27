var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80",
        description: "Spicy jalapeno bacon ipsum dolor amet meatball hamburger burgdoggen alcatra cow leberkas salami. Turkey pork chop short loin drumstick t-bone. Boudin leberkas sirloin drumstick hamburger. Salami leberkas meatloaf frankfurter rump porchetta ball tip strip steak venison doner. Burgdoggen boudin flank chicken. Ham strip steak meatball ground round tenderloin ribeye pork loin prosciutto capicola spare ribs pancetta short loin jerky flank. Fatback shoulder corned beef drumstick strip steak rump ham cupim boudin beef turkey biltong tenderloin t-bone."
    },
    {
        name: "Desert Mesa", 
        image: "https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Beef pork loin boudin short loin, meatloaf andouille jerky. Short ribs tenderloin frankfurter, pork belly ham hock jerky corned beef ham beef ribs swine buffalo ground round flank. Strip steak filet mignon shank tail ham hock, beef spare ribs jerky pastrami pork chop cupim capicola pork belly tenderloin turkey. Pastrami jerky buffalo beef ribs tail beef corned beef t-bone picanha sirloin hamburger bresaola. Chuck meatball tri-tip, beef ribs hamburger buffalo ham biltong. Frankfurter alcatra doner, flank beef picanha fatback. Kielbasa chuck shankle turducken, tongue prosciutto pork chop ribeye cow doner landjaeger meatloaf rump pork loin."
    },
    {
        name: "Canyon Floor", 
        image: "https://images.unsplash.com/photo-1525209149972-1d3faa797c3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Sausage beef kielbasa, brisket pancetta short loin flank tri-tip bacon tongue frankfurter bresaola biltong rump. Brisket strip steak chicken frankfurter shankle. Short ribs cow meatball, venison turducken strip steak jerky fatback pork belly bresaola swine jowl. Alcatra beef pork loin frankfurter, pork chop jerky brisket biltong shankle shank cupim venison picanha sirloin kevin."
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