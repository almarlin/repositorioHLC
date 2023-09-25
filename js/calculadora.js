"use strict";

function suma(num1, num2) {
    let resultado = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").innerHTML=resultado;
}

function resta(num1, num2) {
    let resultado = parseFloat(num1) - parseFloat(num2);
    document.getElementById("resultado").innerHTML=resultado;

}

function multiplicacion(num1, num2) {
    let resultado = parseFloat(num1) * parseFloat(num2);
    document.getElementById("resultado").innerHTML=resultado;

}

function division(num1, num2) {
    let resultado = parseFloat(num1) / parseFloat(num2);
    document.getElementById("resultado").innerHTML=resultado;

}

function enviar() {
    let operador = document.getElementById("operador").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    switch (operador) {
        case "Sumar":
            suma(num1, num2);
            break;
        case "Restar":
            resta(num1, num2);
            break;
        case "Multiplicar":
            multiplicacion(num1, num2);
            break;
        case "Dividir":
            division(num1, num2);
            break;
    }

}

