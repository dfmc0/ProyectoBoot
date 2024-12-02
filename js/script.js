function desaparece() {
    var parrafo = document.getElementById("cosa");

    switch(parrafo.style.display) { 
       case "inline":  case "":   
            parrafo.style.display = "none"; 
        break;
       case "none":    
            parrafo.style.display = "inline";  
        break;
    }
 }
 var parrafo = document.getElementById("cosa");
 parrafo.addEventListener("click",desaparece,false);