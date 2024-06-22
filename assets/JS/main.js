const d20 = document.getElementById("d20");

d20.addEventListener("click", () => {
  if (d20.style.animationPlayState === "paused") {
    d20.style.animationPlayState = "running";
  } else {
    d20.style.animationPlayState = "paused";
  }
});


const trofeuImg = document.getElementById("trofeuimg");

// Iniciar a animação (por exemplo, quando a página carrega)
window.addEventListener("load", () => {
  trofeuImg.style.animationPlayState = "running";
});

// Parar a animação (por exemplo, ao clicar no troféu)
trofeuImg.addEventListener("click", () => {
  trofeuImg.style.animationPlayState = "paused";
});
