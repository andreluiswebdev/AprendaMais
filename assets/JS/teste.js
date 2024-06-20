const d20 = document.getElementById("d20");

d20.addEventListener("click", () => {
  if (d20.style.animationPlayState === "paused") {
    d20.style.animationPlayState = "running";
  } else {
    d20.style.animationPlayState = "paused";
  }
});
