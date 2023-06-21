const textarea = document.querySelector('textarea');
const clearButton = document.getElementById('clear');

const someText = localStorage.getItem('text');

if(someText){
  textarea.value = localStorage.getItem('text')
}

textarea.addEventListener('input', () => {
  let text = textarea.value
  localStorage.setItem('text', text)
})

clearButton.addEventListener('click', () => {
  localStorage.clear()
  textarea.value = null;
})