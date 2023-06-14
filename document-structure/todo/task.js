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
  taskList.lastElementChild.firstChild.textContent = taskInput.value;
  Array.from(document.querySelectorAll('.task__remove')).forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement.remove();
    });
  });
  form.reset();
})