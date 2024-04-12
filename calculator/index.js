const numero1 = Number(prompt("Ingrese primer número"));
const numero2 = Number(prompt("Ingrese segundo número"));

const suma = numero1+numero2;
const promedio = suma / 2;
const triple = promedio * 3;
const resultadoMenosDiez = triple - 10;

//const mensajeSuma = "El resultado de la suma es " + suma;
const mensajeFinal = "El resultado final es " + resultadoMenosDiez;
alert(mensajeFinal);