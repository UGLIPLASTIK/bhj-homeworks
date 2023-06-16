const cart = document.querySelector('.cart__products');
const quantityControls = Array.from(document.querySelectorAll('.product__quantity-control'));
const quantityValue = document.querySelector('.product__quantity-value');
const productArr = Array.from(document.querySelectorAll('.product'));
productArr.forEach(item => {
  item.addEventListener('click', () => {
    item.querySelector('.product__quantity-value');
  })
})

// function changeValue(item){
//   if(item.parentElement.querySelector('.product__quantity-value').textContent >= 1) return false;
//   if (item.classList.contains('product__quantity-control_dec')){
//     return item.parentElement.querySelector('.product__quantity-value').textContent--;
//   } else return item.parentElement.querySelector('.product__quantity-value').textContent++;
// } 

quantityControls.forEach(item =>{
  item.addEventListener('click', () => {
    if(item.classList.contains('product__quantity-control_dec') && item.parentElement.querySelector('.product__quantity-value').textContent != 1) return item.parentElement.querySelector('.product__quantity-value').textContent--;
    else if (item.classList.contains('product__quantity-control_inc')) return item.parentElement.querySelector('.product__quantity-value').textContent++;
  })
})