const query = location.search
console.log(query)
const params= new URLSearchParams(query) ;
console.log(params)
const id = params.get('id');
console.log(id);


function printDetails(id) {
    const product = products.find((each) => each.id === id);
    const detailsTemplate =
    `<div class="columns-container">
      <div class="product-images-block">
        <div class="thumbnail-container">
          ${product.images.map((each) => `<img class="miniImg" src="${each}" alt="mini" />`).join("")}
        </div>                        
        <img class="main-image" src="${product.images[0]}" alt="${product.title}"/>                  
    </div>
    <div class="product-description-block">
        <h1 class="title">${product.title}</h1>
        <form class="selector">
            <fieldset>
              <label class="label" for="color">Color</label>
              <select type="text" placeholder="Selecciona un color">
                ${product.colors.map((each) => `<option value=${each}>${each}</option>`).join("")}
              </select>
            </fieldset>
        </form>
        <div class="description">
            <h1>${product.title}</h1>
            <p> ${product.description}</p>
        </div>
    </div>
    <div class="product-checkout-block">
      <div class="checkout-container">
        <span class="checkout-total-label">Total:</span>
        <h2 class="checkout-total-price">S/.${product.price}</h2>
        <p class="checkout-description">
          Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
          haciendo la solicitud en AFIP.
        </p>                    
        <ul class="checkout-policy-list">
          <li>
            <span class="policy-icon"><img src="assets/truck.png" alt="Truck"/></span>
            <span class="policy-desc">Agrega el producto al carrito para conocer los costos de envío</span>
          </li>
          <li>
            <span class="policy-icon"><img src="assets/plane.png" alt="Plane"/></span>
            <span class="policy-desc">Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal</span>
          </li>
        </ul>
        <div class="checkout-process">
          <div class="top">
            <input type="number" value="1" />
            <button class="btn-primary">Comprar</button>
          </div>
          <div class="bottom">
            <button class="btn-outline">Añadir al Carrito</button>
          </div>
        </div>
      </div>                  
    </div>
</div>
    `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
  }
printDetails(id)

