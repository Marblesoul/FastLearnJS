const editor = document.getElementById('editor');
const clearBtn = document.getElementById('clear-btn');

editor.value = localStorage.getItem('editor-content') || '';

editor.addEventListener('input', () => {
  localStorage.setItem('editor-content', editor.value);
});

clearBtn.addEventListener('click', () => {
  editor.value = '';
  localStorage.removeItem('editor-content');
});
