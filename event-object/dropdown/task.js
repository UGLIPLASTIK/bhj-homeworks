const dropdown = document.querySelector('.dropdown');
const dropdownList = dropdown.querySelector('.dropdown__list');
const listItemsArray = Array.from(document.querySelectorAll('.dropdown__item'));
dropdown.addEventListener('click', () => {
  !dropdownList.classList.contains('dropdown__list_active') ? dropdownList.classList.toggle('dropdown__list_active') : dropdownList.classList.remove('dropdown__list_active')
})

listItemsArray.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    item.closest('div').querySelector('.dropdown__value').textContent = item.textContent;
  })
})

