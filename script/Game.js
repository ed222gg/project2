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


    init: function() { 
        var radios = document.getElementsByName('category'); // samla alla cetegoryelementen i en lista
        console.log(radios)
        
        for (var i = 0; i < radios.length; i++) {   
            eventClick(i);
        }
        //funktionen eventclick som vi kallar på i forloopen ovan,
        //lägger en eventlistener på alla elementen i radios
        function eventClick(categoryId){
            radios[categoryId].addEventListener("click", function() {
            if (radios[categoryId].checked)
            {
                
                //nu har vi checkat samt vet vilket id categorin har. nu kan vi sätta rätt frågor. next step.
                //hmm hur var det jag hade tänkt nu då...
                console.log(categoryId)
                
            }
           
           
            });
        }
        
       

    },
};
//När sidan har laddads in så anropas init.
window.onload = Game.init;
