const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let counterDead = 0;
let counterLost = 0;
getHole = index => document.getElementById(`hole${index}`);


for(let holeIndex = 1; holeIndex < 10; holeIndex++){
  let hole = getHole(holeIndex);
  hole.onclick = function(){
    if(hole.classList.contains('hole_has-mole')){
      counterDead++;
    }else{
      counterLost++;
    }
    if(counterDead === 10){
      alert('Win!');
      counterDead = 0;
      counterLost = 0;
    }else if(counterLost === 5){
      alert('Lost!')
      counterDead = 0;
      counterLost = 0;
    }
    dead.textContent = counterDead;
    lost.textContent = counterLost;
  }
}