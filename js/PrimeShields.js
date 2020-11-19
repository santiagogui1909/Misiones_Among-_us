function cerrar() {
    document.getElementById("divEscudos").style.display = 'none';
    sonidoCierre();
}

function mostrar() {
    document.getElementById("divEscudos").style.display = 'block';
    sonidoCierre();
}


/**Oculta los botones de los escudos */
function hexagono() {
    document.getElementById("Hexuno").style.display = 'none';
    sonidoEscudos();
}

function hexagonoDos() {
    document.getElementById("Hexdos").style.display = 'none';
    sonidoEscudos();
}

function hexagonoTres() {
    document.getElementById("Hextres").style.display = 'none';
    sonidoEscudos();
}

function hexagonoCuatro() {
    document.getElementById("Hexcuatro").style.display = 'none';
    sonidoEscudos();
}


/**Sonido de las animaciones */
function sonidoEscudos() {
    var audio = document.getElementById("audioEscudos");
    audio.play();
}

function sonidoCierre() {
    var audio = document.getElementById("audioCierre");
    audio.play();
}













/*function contadorClick() {   ---contador de clicks
    
    document.getElementById("contador").innerHTML = ++counter;

    if (counter == 1) {
        hexagono();
    } else if (counter == 2) {
        hexagonoDos();
    } else if (counter == 3) {
        hexagonoTres();
    } else if (counter == 4) {
        hexagonoCuatro();
    }

    if (counter >= 4) {
        setInterval(function(){ alert("Tarea terminada"); }, 1);
    }    
}*/