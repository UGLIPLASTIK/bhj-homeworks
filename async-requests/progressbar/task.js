const progress = document.getElementById('progress');

document.forms.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function(event) {
    // console.log(`Отправлено ${event.loaded} из ${event.total}`);
    // console.log(event.loaded)

  };

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  const formData = new FormData(document.forms.form);
  xhr.send(formData);
})