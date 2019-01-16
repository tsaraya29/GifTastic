var topics = ["rain","thunder","rainbows","mountains","fields","rivers","clouds" ];

function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-go-here").empty();

    // Looping through the array of nature topics
    for (var i = 0; i < topics.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("naturally");
      // Adding a data-attribute with a value of the topic at index i
      a.attr("data-name", topics[i]);
      // Providing the button's text with a value of the topic at index i
      a.text(topics[i]);
      // Adding the button to the HTML
      $("#buttons-go-here").append(a);
    }
  }


  //ADD MORE BUTTONS
   // This function handles events where one button is clicked
   $("#topicAdd").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var topic = $("#term").val().trim();
    // The term from the textbox is then added as a new topic to our array
    topics.push(topic);

    // calling renderButtons which handles the processing of our movie array
    renderButtons();
  });


//Calls inital function when page loads
  renderButtons();

  //GIPHY ACTION
   // Event listener for our topic buttons
   $(".naturally").on("click", function(event) {
    // In this case, the "this" keyword refers to the button that was clicked
    event.preventDefault();
   // console.log(topics);

    var newTopic = $(this).attr("data-name");
    console.log(newTopic);
    

    // Constructing a URL to search Giphy for the name of the person who said the quote
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      newTopic + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing our AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After the data comes back from the API
      .then(function(response) {
        // Storing an array of results in the results variable
        var results = response.data;

        // Looping over every result item
        for (var i = 0; i < results.length; i++) {

          // Only taking action if the photo has an appropriate rating
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            // Creating a div for the gif
            var gifDiv = $("<div>");

            // Storing the result item's rating
            var rating = results[i].rating;

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + rating);

            // Creating an image tag
            var natureImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
           natureImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and personImage we created to the "gifDiv" div we created
            gifDiv.append(p);
            gifDiv.append(natureImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#images-go-here").prepend(gifDiv);
          }
        }
      });
  })