const cartproducts = JSON.parse(localStorage.getItem("cart"));
console.log(cartproducts);

const carritoSelector = document.getElementById("cartproducts");
console.log(carritoSelector)

function createCarrito(cartproducts){
    return `<div class="product-card">
    <img src="${cartproducts.image}" alt="" class="product-img">
    <div class="product-info">
      <span class="product-title">${cartproducts.title}</span>
      <span class="product-color">${cartproducts.color}</span>
      <span class="product-description">${cartproducts.description}</span>
      <div class="product-quantity">
        <input type="text" class="btn-outline" value="${cartproducts.quantity}">
      </div>
    </div>
    <div class="product-price">
      <span class="price">S/.${cartproducts.subtotal}</span>
    </div>
  </div>`
}

let carproductsTemplate = "";
for(const element of cartproducts){
  carproductsTemplate = carproductsTemplate + createCarrito(element)  
}

carritoSelector.innerHTML = carproductsTemplate



// TOTAL DEL CARRITO DE COMPRAS
const arrayOfProducts = JSON.parse(localStorage.getItem("cart"));
console.log(cartproducts);
const totalCartSelector = document.getElementById("totalcart");
console.log(totalCartSelector)

function createTotalTemplate(arrayOfProducts) {
    let total = 0;
    arrayOfProducts.forEach((each) => (total = total + each.subtotal)); 
    // o tambien puede ser total=total+each.price*each.quantity
    console.log(arrayOfProducts)
    return `<span class="titulo-resumen">Resumen del Pedido</span>
    <div class="totproduct-price">
      <span class="total-resumen">Total</span>
      <span class="precio-resumen">$/.${total}</span>
    </div>
    <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
    <div class="product-comprar">
      <button class="button-comprar" onclick=""> Comprar</button>
    </div>`;
}
let totalTemplate = "";
totalTemplate = totalTemplate+createTotalTemplate(arrayOfProducts)

totalCartSelector.innerHTML = totalTemplate