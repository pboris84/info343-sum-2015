"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('79w6UOonQafk6F7qgez52GgcWS2yOydf4Y99FCfU', '9FGa5Z7XMtoZIErm8zQFJj3Y4ofPWGfCaaN7msqr');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
