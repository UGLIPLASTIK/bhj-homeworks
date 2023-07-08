const form = document.getElementById('tasks__form');

const taskList = document.getElementById('tasks__list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskInput = document.getElementById('task__input');
  let block = `
  <div class="task">
    <div class="task__title"></div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;
  taskList.insertAdjacentHTML('beforeEnd', block);
  taskList.lastElementChild.querySelector('.task__title').textContent = taskInput.value.trim();

  if(taskList.lastElementChild.querySelector('.task__title').textContent === ''){
    alert('Заполните поле!');
    taskList.lastElementChild.querySelector('.task__remove').parentElement.remove();
  } 
    
  taskList.lastElementChild.querySelector('.task__remove').addEventListener('click', (event) => {
    event.currentTarget.parentElement.remove();
  });
  
  form.reset();
})