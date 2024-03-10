// Define your messages
var messages = {
    'en': 'Page not found. Return to <a href="{{ site.baseurl }}/">main page</a>.',
    'de': 'Seite nicht gefunden. Zurück zur <a href="{{ site.baseurl }}/de/">Hauptseite</a>.',
    // Add more languages as needed
};

// Get the user's language
var userLang = navigator.language || navigator.userLanguage;
userLang = userLang.substr(0,2);

// Check if we have a message for this language
if (messages.hasOwnProperty(userLang)) {
    // If so, use it
    document.getElementById('message').innerHTML = messages[userLang];
} else {
    // Otherwise, fall back to English
    document.getElementById('message').innerHTML = messages['en'];
}
