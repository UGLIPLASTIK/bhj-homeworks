let counter = document.getElementById('timer');
let timer = setInterval(() => {
  +counter.textContent--;
  if(+counter.textContent < 1){
    alert('Вы победили в конкурсе!');
    clearInterval(timer);
  }
}, 1000);

const counterTwo = document.getElementById('timerTwo');
let HH = document.getElementById('HH'),
    MM = document.getElementById('MM'),
    SS = document.getElementById('SS');
let timerTwo = setInterval(() => {
  +SS.textContent--
  if(+SS.textContent <= 9 || +SS.textContent <= 0 ){
    SS.textContent = SS.textContent.padStart(2, '0')
  } else if(+MM.textContent <= 9 || +MM.textContent <= 0){
    MM.textContent = MM.textContent.padStart(2, '0')
  }
  if(+SS.textContent <= 0){
    +MM.textContent--;
    SS.textContent = 60;
  } else if(+MM.textContent <= 0){
    HH.textContent--;
    MM.textContent = 59;
  } else if((+HH.textContent + +MM.textContent + +SS.textContent) === 0){
    alert('Время вышло!')
    clearInterval(timer);
  }
}, 1000);