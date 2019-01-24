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
                break;
              case 2: //randomowo jest kot
                document.getElementById("result-wrapper").style.display = "block";
                document.getElementById("result-yup").style.display = "block";
                document.getElementById("result-text-yup").style.display = "block";
                break;
            }
        }
        if(event.which == 38) { //up nie ma kota
            document.getElementById("loading-wrapper").style.display = "none";
            document.getElementById("result-wrapper").style.display = "block";
            document.getElementById("result-nope").style.display = "block";
            document.getElementById("result-text-nope").style.display = "block";

        }
        if(event.which == 39) { //right jest kot
            document.getElementById("loading-wrapper").style.display = "none";
            document.getElementById("result-wrapper").style.display = "block";
            document.getElementById("result-yup").style.display = "block";
            document.getElementById("result-text-yup").style.display = "block";
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