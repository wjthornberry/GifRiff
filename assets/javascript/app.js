// set up variables
var authKey = "dc6zaTOxFJmzC";
var searchTerm = "";
var characters = ["Gangy", "George Michael", "Michael", "Tobias", "GOB"]

// GIPHY API URL and search parameters
var queryURLBase = "http://api.giphy.com/v1/gifs/search?q=" + character + "&limit=10&" + authKey;

// Functions

// Creates default buttons when page loads
function createButtons() {
    // Remove characters  before adding new ones; no repeat buttons
    $('.buttonsView').empty;
    for (var i = 0; i < characters.length; i++) {
        // Dynamically adds buttons to the DOM for every character in the "characters" array above
        var btn = ('<button');
        btn.addClass('character');
        btn.attr('data-name', characters[i]);
        btn.text(characters[i]);
        $('.buttonsView').append(btn);  
    }
}

// Event: addCharacter button
$('addCharacter').on('click', function(){
    // Grabs user's input
    var character = $('.characterInput').val().trim();
    // User's input is added to the characters array
    characters.push(character);
    // Calling line 12 fx
    createButtons();
    // If users hit enter instead of clicking the button
    return false;
})

// click on button, ten GIFs related to that button are displayed via AJAX call
function displayGIFs(){
    var character = $(this).attr('data-name');

    // Calls AJAX
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response.data);

        var results = response.data;

        for (var i = 0; results.length; i++) {
            var gifDiv = $('<div class=GIFs>');
            var characterGIF = $('<img>');
                characterGIF.attr('src', results[i].images.fixed_heigh_still.url);
                characterGIF.attr('title', "Rating: " + results[i].rating);
                characterGIF.attr('data-still', results[i].images.fixed_height_still.url);
                characterGIF.attr('data-state', 'still');
                characterGIF.addClass('gif');
                characterGIF.attr('data-animate', results[i].images.fixed_heigh.url);
            gifDiv.append(characterGIF);
            $('.addCharacters');
        };
    });
}
// each GIF displays its rating (e.g., "G," "PG," etc.) above it

// click on GIF, it animates
$(document).on('click', '.gif', function() {
    var state = $(this).attr('data-state');
        if (state === 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        };
});
// click again, it stops

// Type another Arrested Development word or character into text box, adds button to list above

// Functions: AJAX; Search btn on click