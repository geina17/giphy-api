$(document).on("click", ".sass", displayCatwalk);
glambttn();

var queens = ["Rue Paul", "Drag Race", "Yas", "Drag Queen", "Sasha Velor", "Shade", "Bye Felica"];

function glambttn() {
    $(".dabttns").empty();

    for (var i = 0; i < queens.length; i++) {
        var sparkle = $("<button>");
        sparkle.addClass("sass btn-primary show");
        sparkle.addClass("queens")
        sparkle.attr("data-name", queens[i]);
        sparkle.text(queens[i]);
        $(".dabttns").append(sparkle);
    }
}

function displayCatwalk() {

    var sass = $(this).attr("data-name");
    var queeryURL = "https://api.giphy.com/v1/gifs/search?q=" + sass + "&api_key=olw2WWw5I3IS53qUNPhru0bwOywePa3e&limit";

    $.ajax({
        url: queeryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        $("#giphView").empy();

        // for (var i = 0, i < response.data.length; i++) {
        var crown = $("<div class='box'>").html(response.data);
        $("#giphView").append(crown);
        console.log(response.data.length[i]);

        var poster = response.data[i].images.fixed_height_still.url; //imgurl
        var jiff = response.data[i].images.fixed_height.url; //giphurl
        var link = response.data[i].images.fixed_height_still; //url
        var tearsheet = $("<img class='giphView'>").attr({
            "src": link,
            "data-still": poster,
            "data-animate": jiff,
            "data-state": "still"
        tearsheet.attr("src", response.data[i].images.original_still.url);
        tearsheet.attr("data-state", "still");
        tearsheet.attr("data-animate", response.data[i].images.original.url);
        tearsheet.attr("data-still", response.data[i].images.original_still.url);
        tearsheet.addClass("gif");

        div.append(tearsheet);
        div.append();  

     });
  }
};
        // crown.append(image);
        // crown.append("<br>");

        // $("#giphView").append(div);

function pause() {
  $("#giphView").on({'click'; function() {
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
});

$("#addGiphy").on("click", function(event) {
    event.preventDefault();
    var beat = $("#giphInput").val().trim();
    $("#giphInput").val("");
    queens.push(sass);
    glambttn();
});
