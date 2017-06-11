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
// dynamically add five buttons to HTML

// each button has the name of a different Arrested Development character

// click on button, nine GIFs related to that button are displayed via AJAX call

// each GIF displays its rating (e.g., "G," "PG," etc.) above it

// click on GIF, it animates

// click again, it stops

// Type another Arrested Development word or character into text box, adds button to list above

// Functions: AJAX; Search btn on click