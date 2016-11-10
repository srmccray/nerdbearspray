// "*://netrunnerdb.com/*/decklists/popular" etc...

var deck_names = document.getElementsByClassName('media-body');
for (var i = 0; i < deck_names.length; i++) {
    var deck_name = deck_names[i];
    var deck_name = deck_name.getElementsByTagName('a');
    deck_name[0].innerHTML = 'A Netrunner Deck';
}
