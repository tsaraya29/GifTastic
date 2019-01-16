

var topics = ["oceans", "rain","thunder","rainbows","mountains","fields","rivers","clouds" ];

//Loop to create buttons from array

//function renderButtons() {

//clear div that holds buttons
for (var i = 0; i<topics.length; i++) {
    
    var topicButton = $("<button>");
    topicButton.addClass("themes");
    topicButton.attr("data-name", topics[i]);
    topicButton.text(topics[i]);
  
    $("#buttons-go-here").append(topicButton);
}

//}
// CREATE more buttons
$("#topicAdd").on("click", function(event) {

    event.preventDefault();

//     // Get the to-do "value" from the textbox and store it a variable
    var newTopic = $("#term").val().trim();     
    var newButton = $("<button>").text(newTopic);
    newButton.addClass("themes");
    newButton.attr("data-name", newTopic);
    $("#buttons-go-here").append(newButton); 

   // renderButtons();

});

// // // Get Giphy with it
// $('.themes').on("click", function(event) {
//     event.preventDefault();
//     //clear div
//     $("#gifs-go-here").empty();
//     // Storing our giphy API URL for a random images based on button clicked

//     var buttonChoice = $(this).text();
//         console.log(buttonChoice);

//     var queryURL =  "https://api.giphy.com/v1/gifs/search?q=" +
//     buttonChoice + "&api_key=dc6zaTOxFJmzC&limit=10";
//     //  // Perfoming an AJAX GET request to our queryURL
//      $.ajax({
//         url: queryURL,
//         method: "GET"
//       })
//       // After the data from the AJAX request comes back
//       .then(function(response) {

        
//           var results = response.data;
//     //Loop through the results

//           for (var i = 0; i < results.length; i++) {

//             var natureDiv = $("<div>");

//             var p = $("<p>").text("Rating: " + results[i].rating);  
//           }

//           // Creating and storing an image tag
//           var natureImage = $("<img>");

//           // Setting the catImage src attribute to imageUrl
//           natureImage.attr("src", results[i].images.fixed_height.url);

//           natureDiv.append(p);
//           natureDiv.append(natureImage);
//            // Prepending images to the images div
//            $("#gifs-go-here").prepend(natureDiv);
//         });
//     });

    //renderButtons();




