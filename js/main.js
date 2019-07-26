const button = document.querySelector(".js__btn");
const title = document.querySelector(".js__face");
const select = document.querySelector(".js__select");


function getRandomInt(max){
  return Math.floor(Math.random()* max);
}
//Math.random() genera un numero random hasta el numero maximo que le especifiquemos en max. 
//Math.floor() redondea hacia abajo

function yourMood() {
  //recogera el valor del select
  title.innerHTML = select.value;

  //Generará un numero máximo de 100 como máximo
  const randomNum = getRandomInt(100);
  console.log(randomNum);
  //lo ponemos aqui para que cada vez que pulse el boton, genere el numero. 

  

}

button.addEventListener("click", yourMood);


//mi version anterior
// const comoEstoy = function() {
//   const mood = selection.value;
//   return mood;
// };

// function yourMood() {
//   if (comoEstoy() === "happy") {
//     title.innerHTML = ":)";
//   } else {
//     title.innerHTML = ":(";
//   }
// }