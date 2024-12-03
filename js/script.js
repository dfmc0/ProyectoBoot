function desaparece() {
    var parrafo = document.getElementById("cosa");

    switch(parrafo.style.display) { 
       case "inline":  case "":   
            parrafo.style.display = "none"; 
            var enlace =document.getElementById("parrafo");
            enlace.innerHTML = "Hola";
        break;
       case "none":    
            parrafo.style.display = "inline";  
            document.getElementById("parrafo").innerHTML = "Hola";
        break;
    }
 }
 document.addEventListener("DOMContentLoaded", function () {
    var parrafo = document.getElementById("cosa");
    parrafo.addEventListener("click", desaparece, false);
});