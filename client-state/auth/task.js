const signinForm = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');
const logoutBtn = document.getElementById('logout-btn');

const userId = localStorage.getItem('user_id');

if (userId) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userIdSpan.textContent = userId;
}

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('user_id');
  welcome.classList.remove('welcome_active');
  signin.classList.add('signin_active');
});

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(signinForm);
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

  xhr.addEventListener('load', () => {
    if (xhr.status === 200 || xhr.status === 201) {
      const response = JSON.parse(xhr.responseText);

      if (response.success) {
        localStorage.setItem('user_id', response.user_id);
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userIdSpan.textContent = response.user_id;
        signinForm.reset();
      } else {
        alert('Неверный логин/пароль');
        signinForm.reset();
      }
    }
  });

  xhr.send(formData);
});
