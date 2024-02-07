//Inicia declaración de variables

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMinimo = 1;
//Termina declaración de variables

//Inician funciones

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Felicidades acertaste el numero secreto en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto < numeroDeUsuario) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function asignarTextoElemento(selector, texto) {
    return document.querySelector(selector).innerHTML = texto;

}

function generarNumeroSecreto(maximo, minimo) {
    let numeroGenerado = Math.floor(Math.random() * maximo) + minimo;

    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los número posibles');
    } else {
        //Si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(maximo, minimo);
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function condicionesIniciales() {
    limpiarCaja();
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Elige un numero del ${numeroMinimo} al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(numeroMaximo, numeroMinimo);
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function reiniciar() {
    limpiarCaja();
    condicionesIniciales();
}

//Terminan funciones

condicionesIniciales();