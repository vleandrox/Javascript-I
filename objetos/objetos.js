const producto = {
    nombre:"Celular",
    precio : 1000,
    stock: 15
}
console.log(producto);

producto.id="00112233abcde"
producto.foto = "https://falabella.scene7.com/is/image/FalabellaPE/20031004_1?wid=1500&hei=1500&qlt=70";
producto["detalle"] = "Escribe el detalle del celular";
producto["color"] = "gris";

console.log(producto);

delete producto["id"];
delete producto.detalle;

console.log(producto)

console.log(producto.nombre);
console.log(producto["foto"]);