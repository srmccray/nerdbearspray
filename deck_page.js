// "*://netrunnerdb.com/*/decklist/*"

var deck_names = document.getElementsByClassName('decklist-name');
deck_names[0].innerHTML = 'A Netrunner Deck'

var deck_description = document.getElementById('deck-description');
deck_description.innerHTML = 'A Netrunner deck description...'

var comments = document.getElementsByClassName('comment-text');
for (var i = 0; i < comments.length; i++) {
    var comment = comments[i];
    comment.innerHTML = 'A Netrunner Deck comment...';
}