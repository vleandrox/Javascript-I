const frase = prompt("Ingrese una palabra o frase");

const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();
const minMay = fraseMayusculas + " " + fraseMinusculas;


const cantidad = frase.length;
const mensajeCantidad = "La frase: " + frase + " y la Cantidad: " + cantidad;

console.log(mensajeCantidad);
console.log(minMay);