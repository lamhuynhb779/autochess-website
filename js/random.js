// Random heroes each matches
var heroRandomBoxes = document.querySelectorAll(".hero-random-box");

heroRandomBoxes.forEach(heroRandomBox => {

    var random = Math.floor(Math.random() * heroes.length);

    heroRandomBox.innerHTML = heroes[random];

});
