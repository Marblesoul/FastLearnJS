const products = document.querySelector('.products');
const cartProducts = document.querySelector('.cart__products');

products.addEventListener('click', (e) => {
  const product = e.target.closest('.product');
  if (!product) return;

  const quantityValue = product.querySelector('.product__quantity-value');
  let quantity = parseInt(quantityValue.textContent);

  if (e.target.classList.contains('product__quantity-control_dec')) {
    if (quantity > 1) {
      quantityValue.textContent = --quantity;
    }
  } else if (e.target.classList.contains('product__quantity-control_inc')) {
    quantityValue.textContent = ++quantity;
  } else if (e.target.classList.contains('product__add')) {
    const productId = product.dataset.id;
    const productImage = product.querySelector('.product__image').src;

    const existingCartProduct = cartProducts.querySelector(`[data-id="${productId}"]`);

    if (existingCartProduct) {
      const countElement = existingCartProduct.querySelector('.cart__product-count');
      countElement.textContent = parseInt(countElement.textContent) + quantity;
    } else {
      const cartProduct = document.createElement('div');
      cartProduct.className = 'cart__product';
      cartProduct.dataset.id = productId;
      cartProduct.innerHTML = `
        <img class="cart__product-image" src="${productImage}">
        <div class="cart__product-count">${quantity}</div>
      `;
      cartProducts.appendChild(cartProduct);
    }
  }
});
