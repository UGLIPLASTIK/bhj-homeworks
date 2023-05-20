const img = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter')

img.onclick = function(){
  this.width = 250;
  clicker.textContent++
}