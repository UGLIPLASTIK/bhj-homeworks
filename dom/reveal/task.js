const blocks = Array.from(document.querySelectorAll('.reveal'));

function isVisible(el){
  const { top, bottom } = el.getBoundingClientRect();
  if(bottom < 0){
    return false;
  }
  if(top > window.innerHeight){
    return false;
  }
  return true;
}

window.addEventListener('scroll', () => {
  blocks.forEach(block => {
    if(isVisible(block)){
      block.classList.add('reveal_active');
    }
    if(!isVisible(block)){
      block.classList.remove('reveal_active');
    }
  })
})
