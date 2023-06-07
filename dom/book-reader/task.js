const fontButtonsArr = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');

fontButtonsArr.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    fontButtonsArr.forEach(item => {
      item.classList.remove('font-size_active')
    })
    event.currentTarget.classList.toggle('font-size_active')
    if(event.currentTarget.classList.contains('font-size_small')){
      book.classList.remove('book_fs-big')
      book.classList.add('book_fs-small')
    } else if (event.currentTarget.classList.contains('font-size_big')){
      book.classList.remove('book_fs-small')
      book.classList.add('book_fs-big')
    } else {
      book.classList.remove('book_fs-small')
      book.classList.remove('book_fs-big')
    }
  })
})
