// Event pick hero
var heroRandomBoxes = document.querySelectorAll(".hero-random-box");

heroRandomBoxes.forEach((heroRandomBox) => {

    heroRandomBox.addEventListener("click", (e) => {

        var selectedRandomBox = e.target;

        var selectedHero = heroRandomBox.innerHTML;

        if (selectedHero != '') {

            var player1Slots = document.getElementById("player1-slots").children;

            for (i = 0; i < player1Slots.length; i++) {

                if (player1Slots[i].innerHTML == '') {

                    player1Slots[i].innerHTML = selectedHero;
                    selectedRandomBox.innerHTML = '';
                    break;
                }
            }
        }
    });
});
