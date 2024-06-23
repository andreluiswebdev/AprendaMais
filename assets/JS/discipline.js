const botoesAssunto = document.querySelectorAll(".grid-container button")
botoesAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto(evento) {
    const assunto = evento.target.innerText
    localStorage.setItem("grid-container", assunto)
    window.location.href = "../../quiz_app/quizz/exercicio.html"
}