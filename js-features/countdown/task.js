let counter = document.getElementById('timer');
let timer = setInterval(() => {
  +counter.textContent--;
  if(+counter.textContent < 1){
    alert('Вы победили в конкурсе!');
    clearInterval(timer);
  }
}, 1000);