const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


let formRegister = document.querySelector("#formRegister")
let emailRegister = document.querySelector(".emailRegister")
let passwordRegister = document.querySelector(".passwordRegister")
let buttonRegister = document.querySelector(".botaoCriar")
let msgCriado = document.querySelector("#mensagem")

formRegister.addEventListener('submit', function(event){
    event.preventDefault()
    const inputEmail = emailRegister.value
    const inputPassword = passwordRegister.value
    localStorage.setItem("email", inputEmail)
    localStorage.setItem("password", inputPassword)
    msgCriado.innerHTML = 'Perfil criado com sucesso!!.';
})

let formLogin = document.querySelector("#formLogin")
let emailLogin = document.querySelector(".emailLogin")
let passwordLogin = document.querySelector(".passwordLogin")
let buttonEntry = document.querySelector(".botaoEntrar")
let msgErro = document.querySelector("#mensagemErro")

formLogin.addEventListener('submit', function(event2){
    event2.preventDefault()
    const inputEmailLogin = emailLogin.value
    const inputPasswordLogin = passwordLogin.value
    console.log(inputEmailLogin);
    console.log(inputPasswordLogin);

    if(inputEmailLogin === localStorage.getItem("email") && inputPasswordLogin === localStorage.getItem("password")){
        window.location.href = "https://aprendamais.netlify.app/quizapp/"
    }else{
        msgErro.innerHTML = 'O email ou a senha estão incorretas'
    }
})