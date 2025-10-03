const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskText = input.value.trim();

  if (!taskText) {
    return;
  }

  const task = document.createElement('div');
  task.className = 'task';
  task.innerHTML = `
    <div class="task__title">
      ${taskText}
    </div>
    <a href="#" class="task__remove">&times;</a>
  `;

  tasksList.appendChild(task);
  input.value = '';
});

tasksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('task__remove')) {
    e.preventDefault();
    e.target.closest('.task').remove();
  }
});
