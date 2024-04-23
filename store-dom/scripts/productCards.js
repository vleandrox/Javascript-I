function createCard(product){
  return `<a class="product-card" href="./details.html">
  <img class="product-img" src="${product.images}" alt="${product.title}" />
  <div class="product-info">
    <span class="product-title">Macbook Pro 15'4</span>
    <span class="product-description">${product.description}</span>
    <div class="product-price-block">
      <span class="price">$750.000</span>
      <span class="discount">50% Off</span>
    </div>
    <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
  </div>
  </a>`
}

const productsSelector = document.getElementById("products");

let productsTemplate = "";
for(const element of products){
  productsTemplate = productsTemplate + createCard(element)
}

productsSelector.innerHTML = productsTemplate