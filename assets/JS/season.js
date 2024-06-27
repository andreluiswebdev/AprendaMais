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
  