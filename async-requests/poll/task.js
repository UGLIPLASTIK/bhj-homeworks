const title = document.getElementById('poll__title');
const pullAnswers = document.getElementById('poll__answers');

function getQestion(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

  xhr.onload = function(){
    const qestion = JSON.parse(xhr.response);
    const answers = qestion.data.answers;
    title.textContent = qestion.data.title;
    
    for(answer in answers){
      let button = document.createElement('button');
      button.className = 'poll__answer';
      button.textContent = answers[answer];
      pullAnswers.append(button);
    }

    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
    });
  }

  xhr.send();
}

getQestion()