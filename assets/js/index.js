var popUp = document.getElementsByClassName('pop-up')[0]
var loginForm = document.getElementsByClassName('login-form-container')[0]
var signUpForm = document.getElementsByClassName('signup-form-container')[0]


function ShowLoginForm(){
    popUp.style.display = 'flex';
    loginForm.style.display = 'block';
    signUpForm.style.display = 'none';
}

function ShowSignUpForm(){    
    popUp.style.display = 'flex';
    loginForm.style.display = 'none';
    signUpForm.style.display = 'block';
}


popUp.addEventListener("click", (event)=>{
    if(!loginForm.contains(event.target) && !signUpForm.contains(event.target)){
        popUp.style.display = 'none'
    }
})