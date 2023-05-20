const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const test = document.getElementById('test__classList');

let counterDead = 0;
let counterLost = 0;
getHole = index => document.getElementById(`hole${index}`);

for(let holeIndex = 0; holeIndex < 10; holeIndex++){
  let hole = getHole(holeIndex);
  hole.onclick = function(){
    console.log('!!!!')
  }
}