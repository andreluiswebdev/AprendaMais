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