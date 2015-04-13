"use strict"; //objekt.metod/egenskap(argument)

var Game= {


 

    correct: 0,
    questionsArray: [],
    
     gameOn: {
        animal: {
            question: 'Vem väger mest?',
            
            answer: [ {
                bild1: 'frg',
                bild2: 'dfg',
                r: ''
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            },
            {   bild1: '',
                bild2: '',
                r: ''
            },
            {   bild1: '',
                bild2: '',
                r: ''
                    
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            }]
        },
    
        geo:{
            question: 'Vad ligger mest söder ut?',
            
            answer: [ {
                bild1: '',
                bild2: '',
                r: ''
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            },
            {   bild1: '',
                bild2: '',
                r: ''
            },
            {   bild1: '',
                bild2: '',
                r: ''
                    
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            }]
        },
             
        music:{
            question: 'Vilken artist/grupp bildades först?',
            
            answer: [ {
                bild1: '',
                bild2: '',
                r: ''
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            },
            {   bild1: '',
                bild2: '',
                r: ''
            },
            {   bild1: '',
                bild2: '',
                r: ''
                    
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            }]
        },
        
         celeb:{
            question: 'Vem är äldst?',
            
            answer: [ {
                bild1: '',
                bild2: '',
                r: ''
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            },
            {   bild1: '',
                bild2: '',
                r: ''
            },
            {   bild1: '',
                bild2: '',
                r: ''
                    
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            }]
        },
              architecture:{
            question: 'Vem är äldst?',
            
            answer: [ {
                bild1: '',
                bild2: '',
                r: ''
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            },
            {   bild1: '',
                bild2: '',
                r: ''
            },
            {   bild1: '',
                bild2: '',
                r: ''
                    
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            },
            {   bild1: '',
                bild2: '',
                r: ''
                
            }]
        },
     },


    init: function() { 
        
      var animalBtn = document.getElementById("li0");
      animalBtn.addEventListener("click", function() {
          	document.getElementById("categories").innerHTML = "";
          	document.getElementById("CategoryTitle").innerHTML = "Vem väger mest?";
          	Game.ran('animal');
          
      });
      
      var geoBtn = document.getElementById("li1");
       geoBtn.addEventListener("click", function() {
           document.getElementById("categories").innerHTML = "";
          	document.getElementById("CategoryTitle").innerHTML = "Vad ligger mest söder ut?";
          Game.ran('geo');
          
      });
      
      var musicBtn = document.getElementById("li2");
      musicBtn.addEventListener("click", function() {
          document.getElementById("categories").innerHTML = "";
          	document.getElementById("CategoryTitle").innerHTML = "Vilken artist/grupp bildades först?";
          Game.ran('music');
          
      });
      
       var celebBtn = document.getElementById("li3");
      celebBtn.addEventListener("click", function() {
           document.getElementById("categories").innerHTML = "";
          	document.getElementById("CategoryTitle").innerHTML = "vem är äldst?";
          Game.ran('celeb');
          
      });
      
       var arcBtn = document.getElementById("li4");
      arcBtn.addEventListener("click", function() {
         document.getElementById("categories").innerHTML = "";
          	document.getElementById("CategoryTitle").innerHTML = "Vilken byggnad är högst?";
          Game.ran('architecture'); 
          
      });

    


    },
    
    ran: function(catName) {
        //Game.gameOn.catName.rubrik // rubriken
        //Game.gameOn.catName.question.length // gör en random funktion med längden av denna
        var random = Math.floor((Math.random() * Game.gameOn[catName].answer.length) +1); 
        
        
        Game.gameOn[catName].answer[random]; // x = svaret random ger
        console.log(random);
        
        
        
    }
    
};
//När sidan har laddads in så anropas init.
window.onload = Game.init;


 /* // main funktionen   
   var template = document.querySelector('#template');
   var gameLayout = template.content.querySelector('#gameLayout').cloneNode(true);
   
   // om du vill hämta element i main funktionen
   gameLayout.questionP = gameLayout.querySelector('#question');
   gameLayout.questionP.innerHTML ='vem van vm 2011';
   
   // lägger ut allt 
   container.appendChild(gameLayout);*/