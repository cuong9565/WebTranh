function ShowLoginForm(){
    let popUp = document.getElementsByClassName('pop-up')[0].style.display = 'flex';
    let loginForm = document.getElementsByClassName('login-form-container')[0].style.display = 'block';
    let signUpForm = document.getElementsByClassName('signup-form-container')[0].style.display = 'none';

    console.log('Login')
}

function ShowSignUpForm(){    
    let popUp = document.getElementsByClassName('pop-up')[0].style.display = 'flex';
    let loginForm = document.getElementsByClassName('login-form-container')[0].style.display = 'none';
    let signUpForm = document.getElementsByClassName('signup-form-container')[0].style.display = 'block';

    console.log('Sign Up')
}