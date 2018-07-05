$(document).ready(function() {

    $("#button").on("click", function() {
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=sEwA1wuLQLC8hDK9z5OURh5gmOA1TxHR&tag=cats";

        $.ajax({
        url: queryURL,
        method: "GET"
        })

        .then(function(response) {

            var imageUrl = response.data.image_original_url;

            var catImage = $("<img>");
            catImage.attr("src", imageUrl);

            $("#images").prepend(catImage);
        });
    });
})