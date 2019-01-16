
// //figuring out how to dynamically create button

// var sampleButton = $("<button>")
// sampleButton.text("test");
// $("#buttons-go-here").append(sampleButton);



var topics = ["oceans", "rain","thunder","rainbows","wells","fields","rivers","clouds" ];


for (var i = 0; i<topics.length; i++) {
    
    var topicButton = $("<button>");

    topicButton.text(topics[i]);
  
    $("#buttons-go-here").append(topicButton);
}


// // Creating new buttons from topic
$("#topicAdd").on("click", function(event) {

    event.preventDefault();
//     // /// clear previous giphys
//     // clear();

//     // Get the to-do "value" from the textbox and store it a variable
    var newTopic = $("#term").val().trim(); 
    var newButton = $("<button>").text(newTopic)
    $("#buttons-go-here").append(newButton);

});

