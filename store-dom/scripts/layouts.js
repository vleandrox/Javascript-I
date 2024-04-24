const navSelector = document.getElementById("nav")

const options = [
    { title: "Ofertas", linkTo: "./index.html",opts: ["Laptops", "Audio", "Auticulares"]},
    { title: "Productos", linkTo: "./index.html", opts: ["Formas de pago", "Envios", "Devoluciones"]},
    { title: "Marcas", linkTo: "./index.html",opts: ["Impuestos","Facturacion"]},
    { title: "Contactos", linkTo: "./index.html" , opts: ["Pedidos", "Lista de deseo"]},
    { title: "Acerca de", linkTo: "./index.html", opts: ["Acerca de ","Email"]  },
];

//ELEMENTOS DOM DEL NAV
const ul = document.createElement("ul");
for (let option of options) {
    
    const li = document.createElement("li"); // crea el elemento li
    const anchor = document.createElement("a"); // Crear un enlace y configurar sus propiedades
    anchor.textContent = option.title;
    anchor.style.margin="20px";
    anchor.href = option.linkTo;

    li.appendChild(anchor); // Agregar el enlace al elemento de lista    
    ul.appendChild(li);// Agregar el elemento de lista a la lista ordenada
}
navSelector.appendChild(ul);

//ELEMENTOS DOM DEL FOOTER
const footerSelector = document.querySelector("footer");

for (const option of options) {
    const col = document.createElement("div");
    col.classList.add("col");

    const ul = document.createElement("ul");
    col.appendChild(ul);

    const titleLi = document.createElement("li");
    titleLi.classList.add("col-main-item");
    const titleLink = document.createElement("a");
    titleLink.href = option.linkTo;
    titleLink.textContent = option.title;
    titleLi.appendChild(titleLink);
    ul.appendChild(titleLi);

    for (const opt of option.opts) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#"; // Esto debería cambiar a la URL correspondiente
        a.textContent = opt;
        li.appendChild(a);
        ul.appendChild(li);
    }

    footerSelector.querySelector(".columns-container").appendChild(col);
}
// for (const option of options) {
//     const anchor = document.createElement("li")    
//     anchor.textContent=option.title
//     anchor.href = option.linkTo    
//     anchor.style.padding="20px"
//     anchor.style.display="flex"
//     anchor.style.justifyContent="space-between"
//     anchor.style.flexDirection="column"
//     footerSelector.appendChild(anchor) 
//     for (const columna of options) {
//         const col = document.createElement("a")
//         col.textContent=columna.opts
//         footerSelector.appendChild(col)    
//     }
// } 

