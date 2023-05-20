const img = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter')

img.onclick = function(){
  if(this.width === 200){
    this.width = 250;
  } else {
    this.width = 200
  }
  clicker.textContent++
}