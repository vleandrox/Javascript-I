// const numero1 = Number(prompt("Ingrese primer número"));
// const numero2 = Number(prompt("Ingrese segundo número"));

// const suma = numero1+numero2;
// const promedio = suma / 2;
// const triple = promedio * 3;
// const resultadoMenosDiez = triple - 10;

// const mensajeFinal = "El resultado final es " + resultadoMenosDiez;
// alert(mensajeFinal);

const cantidad = Number(prompt("Cuantos numeros desea sumar ?"));
let sumatoria = 0;

for (let i = 1; i <= cantidad; i++) {
    const numeroAsumar=Number(prompt("Ingrese un numero a sumar"));
    sumatoria = sumatoria + numeroAsumar;
}
console.log(sumatoria);
alert(sumatoria);