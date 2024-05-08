const cartfavoritos = JSON.parse(localStorage.getItem("favoritos"));
const favoritosSelector = document.getElementById("favoritos");

function createFavoritos(cartfavoritos) {
  return `
  <div class="cards">
    <button class="btn-eliminarfav" onclick="eliminarFavorito(event)" id="${cartfavoritos.id}">
        <img src="assets/delete.png" class="imgDel" alt="Eliminar">
    </button>
    <a class="product-card" href="./details.html?id=${cartfavoritos.id}">   
        <img class="product-img" src="${cartfavoritos.image}" alt="${cartfavoritos.title}" />
        <div class="product-info">
            <span class="product-title">${cartfavoritos.title}</span>
            <span class="product-description">${cartfavoritos.description}</span>
            <div class="product-price-block">
                <span class="price">$/.${cartfavoritos.price}</span>
                <span class="discount">Cantidad:${cartfavoritos.quantity}</span>
            </div>      
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>      
        </div> 
    </a>
</div>`;

}
let favoritosTemplate = "";
for (const element of cartfavoritos) {
  favoritosTemplate = favoritosTemplate + createFavoritos(element);
}
favoritosSelector.innerHTML = favoritosTemplate;


//**FUNCION ELIMINAR DE FAVORITOS */
function eliminarFavorito(event) {
  const obtenerid = event.currentTarget.getAttribute("id"); //Obtiene el id desde el botón 

  // Encontrar el índice del producto a eliminar en el array
  const indexAEliminar = cartfavoritos.findIndex((cartfavoritos) => cartfavoritos.id === obtenerid );
  console.log(indexAEliminar)
  if (indexAEliminar !== -1) {
    cartfavoritos.splice(indexAEliminar, 1); // Eliminar el producto del array
  }

  // Volver a almacenar el array actualizado en el localStorage
  localStorage.setItem("favoritos", JSON.stringify(cartfavoritos));
  const favoritosTemplate = cartfavoritos.map(createFavoritos).join("");
  favoritosSelector.innerHTML = favoritosTemplate;
}
