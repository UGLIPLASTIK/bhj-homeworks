const popup = document.getElementById('subscribe-modal');
const popupClose = document.querySelector('.modal__close');

function subscribe(){
  let timer = setTimeout(() => {
  popup.classList.add('modal_active');
}, 3000)  
}

if(!document.cookie.includes('checked')){
  subscribe();
}

popupClose.addEventListener('click', () => {
  popup.classList.remove('modal_active');
  document.cookie = 'check' + '=' + encodeURIComponent('checked');
})



