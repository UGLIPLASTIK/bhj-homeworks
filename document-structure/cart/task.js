const cart = document.querySelector('.cart__products');
const quantityControls = Array.from(document.querySelectorAll('.product__quantity-control'));
const quantityValue = document.querySelector('.product__quantity-value');
const addBtns = document.querySelectorAll('.product__add');


addBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    let products = Array.from(cart.querySelectorAll('.cart__product'));
    let currentID = btn.closest('.product').getAttribute('data-id');

    function compareIndex(el){
      return el.getAttribute('data-id') === currentID;
    }
    let doubleItem = products.find(compareIndex);

    if(doubleItem){
      doubleItem.querySelector('.cart__product-count').textContent = Number(btn.closest('.product').querySelector('.product__quantity-value').textContent) + Number(doubleItem.querySelector('.cart__product-count').textContent);
      return
    }

    const block = `
      <div class="cart__product" data-id="1">
        <img class="cart__product-image" src="">
        <div class="cart__product-count">20</div>
      </div>`
    cart.insertAdjacentHTML('beforeEnd', block);
    let img = btn.closest('.product').querySelector('img').cloneNode(true);
    img.classList.add('cart__product-image');
    img.classList.remove('product__image');
    let newDataId = btn.closest('.product').getAttribute('data-id');
    cart.lastChild.setAttribute('data-id', newDataId);

    cart.lastChild.replaceChild(img, cart.lastChild.children[0]);
    cart.lastChild.querySelector('.cart__product-count').textContent = btn.previousElementSibling.querySelector('.product__quantity-value').textContent;
  })
})

quantityControls.forEach(item => {
  item.addEventListener('click', () => {
    if(item.classList.contains('product__quantity-control_dec') && item.parentElement.querySelector('.product__quantity-value').textContent != 1) return item.parentElement.querySelector('.product__quantity-value').textContent--;
    else if (item.classList.contains('product__quantity-control_inc')) return item.parentElement.querySelector('.product__quantity-value').textContent++;
  })
})

