const edad = Number(prompt("Ingrese su edad"));

//Verificiar si una persona es mayor o menor de edad:
// if (edad > 18) {
// 	alert("Es mayor de edad");
// }
// else{
//     alert("Es menor de edad");
// }

//Evaluación de múltiples condiciones
if (edad > 18) {
	alert("Es mayor de edad");
} else if (edad > 0) {
	alert("Es menor de edad");
} else {
	alert("Edad incorrecta");
}