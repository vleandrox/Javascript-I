const navSelector = document.getElementById("nav")

const options = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html",opts: ["Laptops", "Audio", "Auticulares"]},
    { title: "Productos", linkTo: "./how.html", opts: ["Formas de pago", "Envios", "Devoluciones"]},
    { title: "Marcas", linkTo: "./taxs.html",opts: ["Impuestos","Facturacion"]},
    { title: "Contactos", linkTo: "./orders.html" , opts: ["Pedidos", "Lista de deseo"]},
    { title: "Acerca de", linkTo: "./warranty.html", opts: ["Acerca de ","Email"]  },
];

for(let option of options){
    const anchor = document.createElement("a")
    anchor.className = "nav-button"
    anchor.style.padding= "40px"
    anchor.style.color = "white" 
    anchor.style.textDecoration = "none"
    anchor.style.fontSize = "20px"
    anchor.textContent = option.title
    anchor.href = option.linkTo
    navSelector.appendChild(anchor)  
}

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

