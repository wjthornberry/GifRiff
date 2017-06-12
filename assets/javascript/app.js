// Initial array of characters
var characters = ["Gangy Arrested Development", "George Michael Arrested Development", "Michael Arrested Development", "Tobias Arrested Development", "GOB Arrested Development"];

// Functions

// createButtons default buttons when page loads
function createButtons(){
    // Remove characters  before adding new ones; no repeat buttons
    $("#buttonsView").empty();
    // Loops through the array of characters
    for (var i = 0; i < characters.length; i++) {
        // Dynamically generates buttons for each character in the array
        var a = $('<button>');
        // Adds class of character to button
        a.addClass('character');
        // Adds a data-attribute
        a.attr('data-name', characters[i]);
        // Provides the inital button text
        a.text(characters[i]);
        // Adds the button to the buttons-view div
        $('#buttonsView').append(a);  
    }
}

// This function handles events where a character button is clicked
$('#addCharacter').on('click', function(event) {
    event.preventDefault();
    // Grabs user's input from the text box
    var character = $('#character-input').val().trim();
    // User's input is added to the characters array
    characters.push(character);
    // Calling createButtons which handles the processing of the character array
    createButtons();
    // This allows user to hit the "enter" key instead of clicking the button
    return false;
});

function displayGif() {
    var character = $(this).attr('data-name');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&limit=10&api_key=dc6zaTOxFJmzC";

    // Calls AJAX
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response.data);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $('<div class=gifs>');
            var characterGif = $('<img>');
                characterGif.attr('src', results[i].images.fixed_height_still.url);
                characterGif.attr('title', "Rating: " + results[i].rating);
                characterGif.attr('data-still', results[i].images.fixed_height_still.url);
                characterGif.attr('data-state', 'still');
                characterGif.addClass('gif');
                characterGif.attr('data-animate', results[i].images.fixed_height.url);
            gifDiv.append(characterGif);
            $('#gifsView').prepend(gifDiv);
        };
    });
}

// Click on GIF to animate
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

// Display character GIFs
$(document).on('click', '.character', displayGif);

// Calls the createButtons function
createButtons();
