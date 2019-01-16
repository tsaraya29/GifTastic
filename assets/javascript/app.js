

var topics = ["oceans", "rain","thunder","rainbows","mountains","fields","rivers","clouds" ];

//Loop to create buttons from array

for (var i = 0; i<topics.length; i++) {
    
    var topicButton = $("<button>");
    topicButton.addClass("themes")

    topicButton.text(topics[i]);
  
    $("#buttons-go-here").append(topicButton);
}
// Button to create more buttons
$("#topicAdd").on("click", function(event) {

    event.preventDefault();
//     // /// clear previous giphys
//     // clear();

//     // Get the to-do "value" from the textbox and store it a variable
    var newTopic = $("#term").val().trim(); 
    var newButton = $("<button>").text(newTopic);
    newButton.addClass("themes");
    $("#buttons-go-here").append(newButton);

});

// // Get Giphy with it
$('.themes').on("click", function() {
    event.preventDefault();
    // Storing our giphy API URL for a random images based on button clicked

    var buttonChoice = $(this).text();
        console.log(buttonChoice);

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=U8JI8rVdSJlQ8F9WXg9VSbn8W0Sls1zK&tag=" + buttonChoice +"";
     // Perfoming an AJAX GET request to our queryURL
     $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After the data from the AJAX request comes back
      .then(function(response) {

        // Saving the image_original_url property
          var imageUrl = response.data.image_original_url;

          // Creating and storing an image tag
          var catImage = $("<img>");

          // Setting the catImage src attribute to imageUrl
          catImage.attr("src", imageUrl);
          catImage.attr("alt", "cat image");
           // Prepending the catImage to the images div
           $("#gifs-go-here").prepend(catImage);
        });
    });




