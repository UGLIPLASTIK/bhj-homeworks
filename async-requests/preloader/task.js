function getRates(){ 
  const xhr = new XMLHttpRequest();
  const loadAni = document.getElementById('loader');
  const items = document.getElementById('items');

  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

  xhr.onloadstart = function(){
    loadAni.classList.add('loader_active');
  }

  xhr.onload = function() {
    loadAni.classList.remove('loader_active');
    console.log(xhr.status);
    const data = JSON.parse(xhr.response);
    const valutes = data.response.Valute;
    for(valute in valutes){
      let block = `
        <div class="item">
          <div class="item__code">   
              </div>
              <div class="item__value">
                  00
              </div>
              <div class="item__currency">
                  руб.
              </div>
        </div>`;
      items.insertAdjacentHTML('beforeEnd', block);
      items.lastElementChild.querySelector('.item__code').textContent = valutes[valute].CharCode;
      items.lastElementChild.querySelector('.item__value').textContent = valutes[valute].Value;
    }
  }

  xhr.send();
}

getRates();
