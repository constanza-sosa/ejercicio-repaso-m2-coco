const button = document.querySelector(".btn");
const title = document.querySelector(".title");
const selection = document.querySelector(".select1");

const comoEstoy = function() {
  const mood = selection.value;
  return mood;
};

function yourMood() {
  // me gustaría utilizar la constante anterior comoEstoy aquí en vez de selection.value
  if (comoEstoy() === "happy") {
    title.innerHTML = ":)";
  } else {
    title.innerHTML = ":(";
  }
}

button.addEventListener("click", yourMood);
