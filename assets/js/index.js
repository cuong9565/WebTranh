var popUp = document.getElementsByClassName('pop-up')[0]
var loginForm = document.getElementsByClassName('login-form-container')[0]
var signUpForm = document.getElementsByClassName('signup-form-container')[0]


// Function mở đăng nhập
function ShowLoginForm(){
    popUp.style.display = 'flex';
    loginForm.style.display = 'block';
    signUpForm.style.display = 'none';
    document.getElementById('email-login').focus()
}

// Function mở đăng ký
function ShowSignUpForm(){    
    popUp.style.display = 'flex';
    loginForm.style.display = 'none';
    signUpForm.style.display = 'block';
    document.getElementById('user-signup').focus()
}

// Function đóng popup
function ClosePopUp(){
    popUp.style.display = 'none';
}

// Function hiện mật khẩu
function ShowPass(id){
    document.getElementById(id).type = 'text';
    document.getElementsByClassName('closed-' + id)[0].classList.add('hidden')
    document.getElementsByClassName('opened-' + id)[0].classList.remove('hidden')
}

// Function ẩn mật khẩu
function HiddePass(id){
    document.getElementById(id).type = 'password';
    document.getElementsByClassName('closed-' + id)[0].classList.remove('hidden')
    document.getElementsByClassName('opened-' + id)[0].classList.add('hidden')
}


// # Thêm event cho các component # ----------------------------
// ## Event click ngoài form
popUp.addEventListener('click', (event)=>{
    if(!loginForm.contains(event.target) && !signUpForm.contains(event.target)){
        ClosePopUp()
    }
})

// ## Event hover close img
document.getElementById('close-black-signup').addEventListener('mouseover', (_)=>{
    document.getElementById('close-black-signup').classList.add('hidden');
    document.getElementById('close-white-signup').classList.remove('hidden');
})

document.getElementById('close-white-signup').addEventListener('mouseover', (_)=>{
    document.getElementById('close-black-signup').classList.add('hidden');
    document.getElementById('close-white-signup').classList.remove('hidden');
})

document.getElementById('close-black-login').addEventListener('mouseover', (_)=>{
    document.getElementById('close-black-login').classList.add('hidden');
    document.getElementById('close-white-login').classList.remove('hidden');
})

document.getElementById('close-white-login').addEventListener('mouseover', (_)=>{
    document.getElementById('close-black-login').classList.add('hidden');
    document.getElementById('close-white-login').classList.remove('hidden');
})

document.getElementById('close-white-signup').addEventListener('mouseout', (_)=>{
    document.getElementById('close-black-signup').classList.remove('hidden');
    document.getElementById('close-white-signup').classList.add('hidden');
})

document.getElementById('close-black-signup').addEventListener('mouseout', (_)=>{
    document.getElementById('close-black-signup').classList.remove('hidden');
    document.getElementById('close-white-signup').classList.add('hidden');
})

document.getElementById('close-white-login').addEventListener('mouseout', (_)=>{
    document.getElementById('close-black-login').classList.remove('hidden');
    document.getElementById('close-white-login').classList.add('hidden');
})

document.getElementById('close-black-login').addEventListener('mouseout', (_)=>{
    document.getElementById('close-black-login').classList.remove('hidden');
    document.getElementById('close-white-login').classList.add('hidden');
})