function ocultarTitulo() {
    
    var titulo = document.querySelector(".titulo");
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";

    setTimeout(function() {
        titulo.style.display = "none";
    }, 3000);

}

setTimeout(ocultarTitulo, 216000);