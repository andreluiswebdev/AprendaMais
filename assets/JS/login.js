const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const password = document.getElementsByClassName('password');
const icon1 = document.getElementsById('icon1');
const icon2 = document.getElementsById('icon2');

function showHide(){
    if(password.type === "password"){
        password.setAttribute('type' , 'text');
        icon1.classList.add('hide');
    }
    else{
        password.setAttribute('type' , 'password');
        icon1.classList.remove('hide')
    }
}
function showHide2(){
    if(password.type === "password"){
        password.setAttribute('type' , 'text');
        icon2.classList.add('hide');
    }
    else{
        password.setAttribute('type' , 'password');
        icon2.classList.remove('hide')
    }
}

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


