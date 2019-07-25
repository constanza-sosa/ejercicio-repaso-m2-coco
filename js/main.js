const button = document.querySelector(".btn");
const title = document.querySelector(".title");
const selection = document.querySelector(".select1");
let globalMood = ':)'; // Lo inicializo a una opción por si se pulsa el botón de "update" sin cambiar el select

const comoEstoy = function() {
  const mood = selection.value;
  console.log(`Estoy ${mood}`);
  globalMood = mood; // Saco el value a global para poder acceder desde cualquier sitio
};

function yourMood() {
  // me gustaría utilizar la constante anterior comoEstoy aquí en vez de selection.value
  if (globalMood === "happy") { // esto es solo para verlo, no es ni medio buena idea
    title.innerHTML = ":)";
  } else {
    title.innerHTML = ":(";
  }
}

selection.addEventListener("change", comoEstoy);
button.addEventListener("click", yourMood);
