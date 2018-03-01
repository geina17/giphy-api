// Initial array of queens
var queens = ["Rue Paul", "Drag Race", "Yas", "Drag Queen", "Sasha Velor", "Shade", "Bye Felica"];

// This function handles events where the add sass button is clicked
$("#addGiph").on("click", function(event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var sass = $("#giphInput").val().trim();

    // The sass from the textbox is then added to our array
    queens.push(sass);

    // Calling glambttn which handles the processing of our sass array
    glambttn();
});

// Adding click event 
$(document).on("click", ".sass", displayCatwalk);

// Calling the glambttn function to display the intial buttons
glambttn();

// Function for displaying sass data
function glambttn() {

    // Deletes the queens prior to adding new queens
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();
    // Loops through the array of queens
    for (var i = 0; i < queens.length; i++) {

        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var sparkle = $("<button>");
        // Adds a class of sass to our button
        sparkle.addClass("sass");
        // Added a data-attribute
        sparkle.attr("data-name", queens[i]);
        // Provided the initial button text
        sparkle.text(queens[i]);
        // Added the button to the buttons-view div
        $("#buttons-view").append(sparkle);
    }
}

// displayCatwalk function re-renders the HTML to display the appropriate content
function displayCatwalk() {

    var sass = $(this).attr("data-name");
    var queeryURL = "https://api.giphy.com/v1/gifs/search?q=" + sass + "&api_key=olw2WWw5I3IS53qUNPhru0bwOywePa3e&limit";

    // Creates AJAX call for the specific sass button being clicked
    $.ajax({
        url: queeryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        // Creates a div to hold the sass
        var crown = $("<div>")

        // Creates an element to hold the image
        var poster = $("<img>").attr("src", imgURL);

        // Appends the image
        crown.append(poster);

        // Puts the entire sass above the previous queens.
        queens - view.preappend(crown);
    });
}

//hover puase over giphs
function freezeFrame(){
  $("#giphView").hover(function(){
    if ($(this).attr()==="still"){
    }else{
      $(this).att("src",$(this).attr("data-still"))
    }
  })
}

//when clicked grab 10 static (non animated gif) frm gify api
//when hovers of static image>image plays

//add a form so user can add to topics     

      