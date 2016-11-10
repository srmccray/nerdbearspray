// "*://netrunnerdb.com/"

var highlight = document.getElementById('highlight');
var deck_names = highlight.getElementsByClassName('decklist-name');
deck_names[0].innerHTML = 'A Netrunner Deck'

var decklist = highlight.getElementsByClassName('decklist');
var descriptions = highlight.getElementsByTagName('p');
for (var i = 0; i < descriptions.length; i++) {
    var description = descriptions[i];
    description.innerHTML = '';
}
descriptions[0].innerHTML = 'A Netrunner deck description...'

var table = document.getElementsByClassName('table')[0];
var deck_names = table.getElementsByTagName('tr');
for (var i = 0; i < deck_names.length; i++) {
    var x = deck_names[i];
    var x = x.getElementsByTagName('div');
    var x = x[0].getElementsByTagName('a');
    var text = x[0].innerHTML;
    x[0].innerHTML = 'A Netrunner Deck';
}

