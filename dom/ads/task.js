const arrRotator = Array.from(document.querySelectorAll('.rotator__case'));

function switchRotator(){
  let timer = setInterval(() => {
    let activeIndex = arrRotator.findIndex(i => i.classList.contains('rotator__case_active'));
    arrRotator.forEach((item) => {
      if(item.classList.contains('rotator__case_active')){
        item.classList.toggle('rotator__case_active');
      }
    })  
    if(activeIndex === 5){
      arrRotator.forEach((item) => {
        item.classList.remove('rotator__case_active');
      }) 
      arrRotator[0].classList.toggle('rotator__case_active');
      clearInterval(timer);
      switchRotator();
    };
    arrRotator[activeIndex + 1].classList.toggle('rotator__case_active');
  }, 1000)
}

switchRotator()
