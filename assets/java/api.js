//need array of strings
var queens = ["Rue Paul", "Drag Race", "Yas", "Drag Queen", "Sasha Velor", "Shade", "Bye Felica"];

// function ywasBttn() {
//     $("#giphView").empty();
//     //loop thro
//     for (i = 0; i < queens.length, i++) {
//         $("#giphView".append("<button>" + queens[i] + "</button>")
//     };
// };

// $("#addGiphy").on("click", function(event) {
//     event.preventDefault();
//     var cheesecake = $("#gipyInput").val();
//     var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=olw2WWw5I3IS53qUNPhru0bwOywePa3e&q=" +queens+ "&limit=10&offset=0&rating=PG&lang=en";

//     console.log(cheesecake);
//     console.log(queryUrl)

//     cheesecake.push(cheesecake);
//     glamazon();
// })

// 


//display data
function glamazon() {
    $("#giphyView").empty();
    //create bttns in html
    //use loop to append a bttn for each string
    for (i = 0; i < queens.length; i++) {
        $("#giphyView").append("<button>" + queens[i] + "</button>")
        var frock = $("<button>");
        frock.addClass("queens");
        // frock.attr( " ",queens[i]);
        frock.text(queens[i]);
        $("#giphyView").append(frock)
    };

};
    $("#addGiphy").on("click", function(event) {
        event.preventDefault();
        var cheesecake = $("#gipyInput").val();
        // cheesecake.push(queens);
        glamazon();
    });

$("#giphyView").val();
glamazon();

function catWalk() {
    var queens = $(this).attr("dataName");
    var queeryURL = "https://api.giphy.com/v1/gifs/search?q=" +queens+ "&api_key=olw2WWw5I3IS53qUNPhru0bwOywePa3e&limit=10&offset=0&lang=en";

    $.ajax({
        url: queeryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var dusted = $("<div>");
        // var fishy = response.;

        dusted.text();
        fishy.apend(dusty);

        var giphDisplay = $("<div class = 'giph'>");
        var poster = $("<img>").attr("src",queeryURL);
        dusted.append(poster);

    })
}
//save var to topics

//when clicked grab 10 static (non animated gif) frm gify api
//when hovers of static image>image plays

//add a form so user can add to topics 

// "https://api.giphy.com/v1/gifs/search?api_key=olw2WWw5I3IS53qUNPhru0bwOywePa3e&q=" +queens+ "&limit=10&offset=0&rating=PG&lang=en"
