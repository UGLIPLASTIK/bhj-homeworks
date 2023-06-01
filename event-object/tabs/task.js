const tabArr = Array.from(document.querySelectorAll('.tab'));
const contentArr = Array.from(document.querySelectorAll('.tab__content'));



tabArr.forEach(item => {
  item.addEventListener('click', (event) => {
    tabArr.forEach(item => {
      item.classList.remove('tab_active');
    });
    event.currentTarget.classList.toggle('tab_active');
    contentArr.forEach(item => {
      item.classList.remove('tab__content_active');
    });
    contentArr[tabArr.indexOf(item)].classList.toggle('tab__content_active');
  })
})