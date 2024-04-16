let totalApagar = 0;
let totalProducto = Number(prompt("Cuantos productos diferentes desea llevar :"));

for (let i = 1; i <= totalProducto; i++) {  
    const nombre = prompt("Que producto desea llevar ? ");
    const cantidad = prompt("Cuantas unidades ? ");
    const precio = prompt("Cuanto sale cada unidad ? ");
    const subtotal = cantidad * precio;    
    totalApagar = totalApagar + subtotal;
    console.log("Has llevado :" + cantidad + " unidades de " + nombre + "que costaron : "+ precio);
}
console.log(totalApagar);
alert(totalApagar);
