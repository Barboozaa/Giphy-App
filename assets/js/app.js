$(document).ready(function() {

    var topics = ["dog", "cat", "giraffe", "lemur", "elephant", "cheetah", "bison"];

    function populateButtons() {
        $(".callButtons").empty();

        topics.forEach(function(i) {
            var callButton = $("<button class='button'>").text(i);
            $(".callButtons").append(callButton);
        }) ;
    };

    populateButtons();

    // $(document).on("click", ".button")

    $("#button").on("click", function() {

        var buttonPressed = "dogs"
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonPressed + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
        url: queryURL,
        method: "GET"
        })

        .then(function(response) {
            console.log(response);
        });
    });
})