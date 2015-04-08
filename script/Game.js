"use strict"; //objekt.metod/egenskap(argument)

var Game= {

    pos: 0,
    categoryNr: undefined,
    test: undefined,
    testStatus: undefined,
    question: undefined,
    choice: undefined,
    choises: undefined,
    chA: undefined,
    chB: undefined,
    correct: 0,
    questionsArray: [],


    init: function() { // kalla och lyssna på ett klick som då kommer utföra detta!
        var radios = document.getElementsByName('category');
console.log(radios)
        for (var i = 0, length = radios.length; i < length; i++) 
        {
            if (radios[i].checked) 
            {
                // do whatever you want with the checked radio  tex kör frågorna för den kategorin som radios är sammankopplad med. 
                console.log(radios[i].value);
                break;
            }
        // only one radio can be logically checked, don't check the rest

        }

    },
};
//När sidan har laddads in så anropas init.
window.onload = Game.init;