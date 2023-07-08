const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip')); 

let message = document.createElement('div');
message.classList.add('tooltip');
document.body.append(message);

hasTooltips.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    let coords = item.getBoundingClientRect();
    let messageCoords = message.getBoundingClientRect();
    message.classList.add('tooltip_active');
    if(messageCoords.left.toFixed(4) === coords.left.toFixed(4)){
      message.classList.remove('tooltip_active');
    }

    message.textContent = item.title;
    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";
  })
})
