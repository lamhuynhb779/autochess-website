//
let draggedHero = null;

//DOM Elements
const waitingBoxes = document.querySelectorAll('.waiting-box');
const boxes = document.querySelectorAll('.box');

waitingBoxes.forEach((box) => {
    box.addEventListener("dragstart", (e) => {
        draggedHero = e.target;
        console.log(draggedHero);
    });
});

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
        // move dragged element to the selected drop target
        if (e.target.className === 'box') {

        }
        draggedHero.parentNode.removeChild(draggedHero);
        e.target.appendChild(draggedHero);
        box.classList.remove("hovered");
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