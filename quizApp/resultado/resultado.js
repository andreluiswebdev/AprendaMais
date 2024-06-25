const assunto = localStorage.getItem("assunto")
const botaoJogarNovamente = document.querySelector("main button")

botaoJogarNovamente.addEventListener("click", jogarNovamente)

function alterarAssunto(){
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    iconeImg.setAttribute("src", `../img/icon-${assunto}.png`)
    assuntoTitulo.innerText = assunto
}

alterarAssunto()

function inserirResultado(){
    const sectionPontuacao = document.querySelector(".pontuacao")
    const divAssunto = document.querySelector(".assunto")
    const pontos = localStorage.getItem("pontos")
    
    sectionPontuacao.innerHTML = `
    ${divAssunto.outerHTML}
    
    <strong>${pontos}</strong>

                <p>de 5</p>
                `
}

function jogarNovamente() {
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")

    window.location.href = "../index.html"
}

inserirResultado()