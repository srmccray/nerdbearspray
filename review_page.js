// "*://netrunnerdb.com/*/reviews"

var reviews = document.getElementsByClassName('review-text');
for (var i = 0; i < reviews.length; i++) {
    var review = reviews[i];
    review.innerHTML = 'A Netrunner card review...';
}