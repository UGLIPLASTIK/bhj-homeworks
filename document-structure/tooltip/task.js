const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip')); 

let message = document.createElement('div');
message.classList.add('tooltip');
document.body.append(message);

hasTooltips.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    let coords = item.getBoundingClientRect();
    message.textContent = item.title;
    message.classList.toggle('tooltip_active');
    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";
  })
})
