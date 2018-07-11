$(document).ready(function () {

    var topics = ["dog", "cat", "giraffe", "lemur", "elephant", "cheetah", "bison"];
    console.log(topics);

    function populateButtons() {
        $(".callButtons").empty();

        topics.forEach(function (i) {
            var callButton = $("<button class='button'>").text(i);
            $(".callButtons").append(callButton);
        });
    };

    populateButtons();

    $("#submit").on("click", function () {

        var input = $("#input").val();
        console.log(input);

        topics.push(input);
        console.log(topics);

        populateButtons();
    });

    $(document).on("click", ".button", function () {

        $(".gifs").empty();

        var btnText = $(this).text();
        console.log(btnText);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + btnText + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                console.log(response);

                var results = response.data;
                console.log(results);

                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $("<div class='item'>");

                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);

                    var gif = $("<img>");
                    gif.attr("class", "gif");
                    gif.attr("src", results[i].images.fixed_width_still.url);
                    gif.attr("data-still", results[i].images.fixed_width_still.url);
                    gif.attr("data-animate",  results[i].images.fixed_width.url);
                    gif.attr("data-state", "still");

                    gifDiv.append(p);
                    gifDiv.append(gif);

                    $(".gifs").prepend(gifDiv);
                }
        });
    });

    $(document).on("click", ".gif", function() {        
        var state = $(this).attr("data-state");

        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
});