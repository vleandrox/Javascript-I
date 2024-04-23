const h2Tag = document.createElement("h2");

h2Tag.textContent = "ESTE ES EL SUBTITULO";
h2Tag.style.width = "500px";
h2Tag.style.height = "200px";
h2Tag.style.color = "white";
h2Tag.style.backgroundColor = "gray";
h2Tag.style.fontSize = "30px";
h2Tag.style.padding = "20px";
h2Tag.style.margin = "20px 0 ";
h2Tag.style.display = "flex";
h2Tag.style.justifyContent = "center";
h2Tag.style.alignContent = "center";
h2Tag.style.alignItems = "center";

const preSelector = document.querySelector("#subtitulo");
preSelector.appendChild(h2Tag);

const productos = ["celular", "tablets", "computadora"];

const products1Sel = document.querySelector("#products1");
console.log(products1Sel);

for (let producto of productos) {
  const h3Tag = document.createElement("h3");
  h3Tag.style.backgroundColor = "green";
  h3Tag.style.margin = "10px";
  h3Tag.style.padding = "10px";
  h3Tag.textContent = producto;
  products1Sel.appendChild(h3Tag);
}

const objetos = [
  { nombre: "celular", precio: 100 },
  { nombre: "tablet", precio: 100 },
  { nombre: "computadora", precio: 100 },
];
const products2Sel = document.querySelector("#products2");

objetos.forEach((cadaElemento) => {
  const h3Tag = document.createElement("h3");
  h3Tag.style.backgroundColor = "yellow";
  h3Tag.style.margin = "10px";
  h3Tag.style.padding = "10px";
  h3Tag.textContent = cadaElemento.nombre + "- Precio" + cadaElemento.precio;
  products2Sel.appendChild(h3Tag);
});
//FOR OF
for (const objeto of objetos) {
  const h3Tag = document.createElement("h3");
  h3Tag.style.backgroundColor = "red";
  h3Tag.style.margin = "10px";
  h3Tag.style.padding = "10px";
  h3Tag.textContent =
    "Nombre : " + objeto.nombre.toUpperCase() + " Precio :" + objeto.precio;
  products2Sel.appendChild(h3Tag);
}

const products3Sel = document.querySelector("#products3");

let templates = "";

objetos.forEach((cadaElemento) => {
  cadaElemento = `<h3 style="background-color: purple; color: white; padding: 10px; margin: 5em;">${cadaElemento.nombre} - Precio : ${cadaElemento.precio}</h3>`;
  templates = templates + cadaElemento;
});

products3Sel.innerHTML = templates;
