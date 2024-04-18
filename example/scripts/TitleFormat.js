function titleFormat(text){
    const primeraLetra = text.charAt(0).toUpperCase(); // Obtener la primera letra y convertirla a mayúscula
    const restoTitulo = text.slice(1,11).toLowerCase(); // Obtener el resto del título desde el segundo carácter en adelante
    return primeraLetra+restoTitulo;
}

console.log(titleFormat("hello world"))
console.log(titleFormat("HELLO world"))
console.log(titleFormat("HellO WOrLd")) //deben imprimir “Hello world”