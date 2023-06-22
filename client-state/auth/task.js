let userId = localStorage.getItem('user_id');

if(userId){
  welcome.classList.add('welcome_active');
  welcome.querySelector('span').textContent = localStorage.getItem('user_id');
}

document.forms.signin__form.addEventListener('submit', (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

  xhr.onload = function() {
    const data = JSON.parse(xhr.response);
    const welcome = document.getElementById('welcome');

    if(data.success) {
      localStorage.setItem('user_id', data.user_id);
      
      welcome.classList.add('welcome_active');
      welcome.querySelector('span').textContent = data.user_id;
    } else alert('Неверный логин/пароль');
  }

  const formData = new FormData(document.forms.signin__form);
  xhr.send(formData);
})