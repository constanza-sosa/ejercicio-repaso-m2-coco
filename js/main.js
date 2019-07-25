const button = document.querySelector('.btn');
const title = document.querySelector('.title');
const selection = document.querySelector('.select1');

const comoEstoy = function (){
  const mood = selection.value;
  console.log(`Estoy ${mood}`);
}

function yourMood(){
  // me gustaría utilizar la constante anterior comoEstoy aquí en vez de selection.value
  if(selection.value === 'happy'){
    title.innerHTML = ':)';
  }
  else{
    title.innerHTML = ':('
  }
}

selection.addEventListener('change', comoEstoy);
button.addEventListener('click', yourMood);
