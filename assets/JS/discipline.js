const botoesAssundo = document.querySelectorAll(".card-materia button");
botoesAssundo.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto(evento) {
    const assunto = evento.target.innerText
    localStorage.setItem("assunto", assunto)
    window.location.href = "../quizApp/pages/quizz/exercicio.html"
}