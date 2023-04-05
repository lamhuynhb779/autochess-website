//
var draggedHero;

//DOM Elements
const waitingBoxes = document.querySelectorAll('.waiting-box');

//Loop through each boxes element
boxes.forEach((box) => {
    //When a draggable element dragged over a box element
    box.addEventListener("dragover", (e) => {
        e.preventDefault(); //Prevent default behaviour
        box.classList.add("hovered");
    });

    //When a draggable element leaves box element
    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered");
    });

    //When a draggable element is dropped on a box elemen
    box.addEventListener("drop", (e) => {
        console.log(obj);
        // box.appendChild(e.target);
        // box.classList.remove("hovered");
    });
});


// Random hero
var heroRandomBoxes = document.querySelectorAll(".hero-random-box");
heroRandomBoxes.forEach(heroRandomBox => {
    var random = Math.floor(Math.random() * heroes.length);
    heroRandomBox.innerHTML = heroes[random];
});


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

// select the item element
const item = document.querySelector('.waiting-box');

// attach the dragstart event handler
item.addEventListener('dragstart', dragStart);

// handle the dragstart

function dragStart(e) {
   drappedHero = e.target
}