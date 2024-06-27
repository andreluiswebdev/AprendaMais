
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


document.querySelector('.formulario').addEventListener('submit', function(e) {
  e.preventDefault(); // Para prevenir o envio do formulário

  // Verifica se todos os campos foram preenchidos
  var todosPreenchidos = true;
  document.querySelectorAll('.formulario input, .formulario select, .formulario textarea').forEach(function(campo) {
      if (campo.value === '') {
          todosPreenchidos = false;
      }
  });

  if (todosPreenchidos) {
      // Exibe a mensagem de agradecimento em um popup
      alert('Obrigada pelo contato! Recebemos sua mensagem e logo entraremos em contato.');

      // Limpa o formulário
      e.target.reset();
  } else {
      alert('Por favor, preencha todos os campos.');
  }
});
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

// inicio footer

document.querySelector('#submitSuggestion').addEventListener('click', function() {
  var email = document.querySelector('.emailSuggestion').value;
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Regex para validar o e-mail

  if (email !== '' && emailRegex.test(email)) {
      alert('Obrigada pela sua sugestão! Entraremos em contato pelo e-mail ' + email + '.');
      document.querySelector('.emailSuggestion').value = ''; // Limpa o campo de e-mail
  } else {
      alert('Por favor, digite um e-mail válido.');
  }
});

// fim footer





