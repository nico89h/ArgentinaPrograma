"use strict";
var _a, _b, _c;
console.log("hola mudo");
//inicio de el algoritmo para generar 3 numeros aleatorios
class Todo {
    //uno es el usuario y dos la maquina
    yo(jugador, maquina) {
        if (jugador == "piedra") {
            switch (maquina) {
                case "papel":
                    return true;
                    break;
                default:
                    return false;
                    break;
            }
        }
        else if (jugador == "papel") {
            switch (maquina) {
                case "tijera":
                    return true;
                    break;
                default:
                    return false;
                    break;
            }
        }
        else {
            switch (maquina) {
                case "piedra":
                    return true;
                    break;
                default:
                    return false;
                    break;
            }
        }
    }
}
class casiTodo extends Todo {
    igualdad(resultado, contra) {
        if (resultado == contra) {
            return true;
        }
        else {
            return false;
        }
    }
    //voy a indicar si la maquina gana es true, sino es false
    ganador(contra, nose) {
        let control;
        control = this.yo(contra, nose);
        return (control);
    }
}
class JUEGO extends casiTodo {
    constructor(azar, contra) {
        super();
        this.numero = azar;
        this.contrincante = contra;
        if (azar == 1) {
            this.resultado = "piedra";
        }
        else if (azar == 2) {
            this.resultado = "papel";
        }
        else {
            this.resultado = "tijera";
        }
    }
    set(v) {
        let resultado;
        if (v == 1) {
            resultado = "piedra";
        }
        else if (v == 2) {
            resultado = "papel";
        }
        else {
            resultado = "tijera";
        }
        this.resultado = resultado;
    }
    indicador(azar) {
        let resultado;
        if (azar == 1) {
            resultado = "piedra";
        }
        else if (azar == 2) {
            resultado = "papel";
        }
        else {
            resultado = "tijera";
        }
        return (resultado);
    }
}
;
function numeroAzar(max, min) {
    let numero;
    numero = Math.floor(Math.random() * (max - min) + 1);
    return numero;
}
function Asignar(nose) {
    let numeroJuego;
    numeroJuego = numeroAzar(4, 1);
    console.log(numeroJuego);
    let objetoJuego = new JUEGO(numeroJuego, nose);
    if (!objetoJuego.igualdad(objetoJuego.resultado, objetoJuego.contrincante)) { // controlo que sean distintos los valores
        if (objetoJuego.ganador(objetoJuego.contrincante, objetoJuego.resultado)) { //controlo quien gano
            document.write("ENE O");
        }
        else {
            document.write("Felicidades, eres el ganador");
        }
    }
    else {
        document.write("El resultado es el mismo, inicia de nuevo");
    }
}
function ola() {
    var _a;
    (_a = document.getElementById('random')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { Asignar("tijera"); });
}
function buenas() {
    var _a;
    (_a = document.getElementById('random')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { Asignar("piedra"); });
}
function vamoQsepuede() {
    var _a;
    (_a = document.getElementById('random')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { Asignar("papel"); });
}
//ya esta dividido el problema ahora se necesita llamar a cada uno
(_a = window.document.getElementById('jose')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', ola);
(_b = window.document.getElementById('pedro')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', vamoQsepuede);
(_c = window.document.getElementById('juan')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', buenas);
