"use strict"; //objekt.metod/egenskap(argument)

var Game = {
                // 2,2,4,1,0,3,1,3,4
    memoryArray: [],
    imgTagArray: [],
    count: 1, // antal klick
    score: 0,
    firstClick: null,
    secondClick: null,
    firstClickLocation: null,
    gridCol: 4,
    gridRow: 4,
    counter: document.getElementById("counter"),
    
    init: function() {

    },
};
//När sidan har laddads in så anropas init.
window.onload = Game.init;