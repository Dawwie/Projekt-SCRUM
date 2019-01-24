document.addEventListener("keydown", function(event) {
  console.log(event);
        if(event.which == 37) { //left randomowy
            var min=1; 
            var max=3;  
            var random =Math.floor(Math.random() * (+max - +min)) + +min; 
            document.getElementById("loading-wrapper").style.display = "none";
            switch(random) {
              case 1: //randomowo nie ma kota
                document.getElementById("result-wrapper").style.display = "block";
                document.getElementById("result-nope").style.display = "block";
                document.getElementById("result-text-nope").style.display = "block";
                    var audio = new Audio('Sounds/Nie_ma.mp3');
                    audio.play();
                break;
              case 2: //randomowo jest kot
                document.getElementById("result-wrapper").style.display = "block";
                document.getElementById("result-yup").style.display = "block";
                document.getElementById("result-text-yup").style.display = "block";
                    var audio = new Audio('Sounds/Jest.mp3');
                    audio.play();
                break;
            }
        }
        if(event.which == 38) { //up nie ma kota
            document.getElementById("loading-wrapper").style.display = "none";
            document.getElementById("result-wrapper").style.display = "block";
            document.getElementById("result-nope").style.display = "block";
            document.getElementById("result-text-nope").style.display = "block";
                var audio = new Audio('Sounds/Nie_ma.mp3');
                audio.play();

        }
        if(event.which == 39) { //right jest kot
            document.getElementById("loading-wrapper").style.display = "none";
            document.getElementById("result-wrapper").style.display = "block";
            document.getElementById("result-yup").style.display = "block";
            document.getElementById("result-text-yup").style.display = "block";
                var audio = new Audio('Sounds/Jest.mp3');
                audio.play();
        }
        if(event.which == 40) { //down od nowa
            document.getElementById("loading-wrapper").style.display = "block";
            document.getElementById("result-wrapper").style.display = "none";

            document.getElementById("result-nope").style.display = "none";
            document.getElementById("result-text-nope").style.display = "none";

            document.getElementById("result-yup").style.display = "none";
            document.getElementById("result-text-yup").style.display = "none";
        }
});

document.addEventListener('touchstart', handleTouchStart, false);   
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            var min=1; 
            var max=3;  
            var random =Math.floor(Math.random() * (+max - +min)) + +min; 
            document.getElementById("loading-wrapper").style.display = "none";
            switch(random) {
              case 1: //randomowo nie ma kota
                document.getElementById("result-wrapper").style.display = "block";
                document.getElementById("result-nope").style.display = "block";
                document.getElementById("result-text-nope").style.display = "block";
                    var audio = new Audio('Sounds/Nie_ma.mp3');
                    audio.play();
                break;
              case 2: //randomowo jest kot
                document.getElementById("result-wrapper").style.display = "block";
                document.getElementById("result-yup").style.display = "block";
                document.getElementById("result-text-yup").style.display = "block";
                    var audio = new Audio('Sounds/Jest.mp3');
                    audio.play();
                break;
            }
        } else {
            /* right swipe jest kot */
            document.getElementById("loading-wrapper").style.display = "none";
            document.getElementById("result-wrapper").style.display = "block";
            document.getElementById("result-yup").style.display = "block";
            document.getElementById("result-text-yup").style.display = "block";
                var audio = new Audio('Sounds/Jest.mp3');
                audio.play();
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe nie ma kota */ 
            document.getElementById("loading-wrapper").style.display = "none";
            document.getElementById("result-wrapper").style.display = "block";
            document.getElementById("result-nope").style.display = "block";
            document.getElementById("result-text-nope").style.display = "block";
                var audio = new Audio('Sounds/Nie_ma.mp3');
                audio.play();
        } else { 
            /* down swipe od nowa */
            document.getElementById("loading-wrapper").style.display = "block";
            document.getElementById("result-wrapper").style.display = "none";

            document.getElementById("result-nope").style.display = "none";
            document.getElementById("result-text-nope").style.display = "none";

            document.getElementById("result-yup").style.display = "none";
            document.getElementById("result-text-yup").style.display = "none";
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};