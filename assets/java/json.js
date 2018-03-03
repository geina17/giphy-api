// Initial array of queens
var queens = ["Rue Paul", "Drag Race", "Yas", "Drag Queen", "Sasha Velor", "Shade", "Bye Felica"];

// This function handles events where the add sass button is clicked
$("#addGiphy").on("click", function(event) {
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
    console.log("Working");
    // Deletes the queens prior to adding new queens
    // (this is necessary otherwise you will have repeat buttons)
    $(".dabttns").empty();
    // Loops through the array of queens
    for (var i = 0; i < queens.length; i++) {

        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var sparkle = $("<button>");
        // Adds a class of sass to our button
        sparkle.addClass("sass btn-primary show");
        // Added a data-attribute
        sparkle.attr("data-name", queens[i]);
        // Provided the initial button text
        sparkle.text(queens[i]);
        // Added the button to the buttons-view div
        $(".dabttns").append(sparkle);
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
                var crown = $("<div class='box'>").html(response.data);
                $("#giphView").append(crown);
                //gif stills from response data
                var poster = response.data[i].images.fixed_height_still.url;
                var jiff = response.data[i].images.fixed_height.url;
                var link = response.data[i].images.fixed_height_still;
                var tearsheet = $("<img class='giphView'>").attr({"src":link,"data-still":poster,"data-animate":jiff,"data-state":"still"});
                // Creates an element to hold the image
               crown.append(image);
               crown.append("<br>");

                // Appends the image
              

                // Puts the entire sass above the previous queens.
                

                //hover puase over giphs
                $("#giphView").on({
                'click': function() {
                    var freezeFrame = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                }
        })
})
$("#addGiphy").on("click", function(event) {
    event.preventDefault();
    var beat = $("#giphInput").val().trim();
    queens.push(sass);
    glambttn();
})
$(document).on("click","sass",displayGiphImages);
glambttn();
//when clicked grab 10 static (non animated gif) frm gify api
//when hovers of static image>image plays

//add a form so user can add to topics     

      