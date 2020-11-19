/**funcion del el programa */

var canvas = document.getElementById("electricidad");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(234, 234, 84)";

var activarEnergia = document.getElementById("activar");  //evento de click sobre un boton
activarEnergia.addEventListener('click', activarRectangulo);


const LIMITE_CARGA = 65;


//se crea un objeto para asignar los valores del rectangulo

var energia = {
    posicionX: 0,
    posicionY: 100,
    ancho: 50,
    altura: 20
}

//llamada a funciones


var interval = null;

//funciones

function activarRectangulo() {

    //intervalo, permite hacer la ilucion de que se llena a un tiempo determinado 

    if (interval === null) {
        interval = setInterval(function () {


            if (estaEnElLimite()) {
                alert("Tarea completada");
                clearInterval(interval);
                interval = null;
            }

            energia.posicionY -= 0.4;
            energia.altura += 0.4;

            limpiar();
            llenarEnergia(energia);

        }, 1)
    }
    else {
        clearInterval(interval);
        interval = null;
    }
}


function estaEnElLimite() {
    return energia.posicionY <= LIMITE_CARGA;
}

function limpiar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function llenarEnergia({ posicionX, posicionY, ancho, altura }) {
    //    poscisiones en x y ancho y alto 
    ctx.fillRect(posicionX, posicionY, ancho, altura);
}

/**ocultar juego */

function cerrarJuego() {
    document.getElementById("divEnergia").style.display = 'none';
    sonidoCierre();
}

function mostrarJuego(){
    document.getElementById("divEnergia").style.display = 'block';
    sonidoCierre();
}

function botonDos(){
    document.getElementById("boton2").style.display = 'block';
    document.getElementById("activar").style.display = 'none';
    sonidoEnergia();
}



/**sonido animaciones */

function sonidoEnergia() {
    var audio = document.getElementById("audioEnergia");
    audio.play();
}

function sonidoCierre() {
    var audio = document.getElementById("audioCierre");
    audio.play();
}
