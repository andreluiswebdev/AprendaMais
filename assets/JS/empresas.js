
// INICIO TABELAS
var tabs = document.getElementsByClassName('tab-item');
var contents = document.getElementsByClassName('tab-pane');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function() {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove('active');
      contents[j].classList.remove('active');
    }
    tabs[i].classList.add('active');
    contents[i].classList.add('active');
  });
}
// FIM TABELAS


// INICIO FORM
function validatePhone(input) {
  var regex = /^[+()-.x0-9]*$/;
  var errorMsg = document.getElementById('phoneError');
  if (!regex.test(input.value)) {
    errorMsg.textContent = "Um número de telefone válido pode conter apenas números, +()-. ou x";
    setTimeout(function() {
      errorMsg.textContent = "";
    }, 3000); // Faz a mensagem desaparecer após 3 segundos
  } else {
    errorMsg.textContent = "";
  }
}
// FIM FORM


// revelar página com o scroll
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.hidden');

  for(var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 200;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('reveal');
    }
  }
}
