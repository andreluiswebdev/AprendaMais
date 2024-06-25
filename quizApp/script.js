const botoesAssundo = document.querySelectorAll(".assuntos button");
botoesAssundo.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto(evento) {
    const assunto = evento.target.innerText
    localStorage.setItem("assunto", assunto)
    console.log(evento);
    window.location.href = "./quizz/exercicio.html"
}

// INICIO SIDEBAR
document.getElementById('open_btn').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const icon = document.getElementById('open_btn_icon');

    sidebar.classList.toggle('open-sidebar');

    // Alterna apenas entre bi-chevron-right e bi-chevron-left
    icon.classList.toggle('bi-chevron-right');
    icon.classList.toggle('bi-chevron-left'); 
});
// FIM SIDEBAR