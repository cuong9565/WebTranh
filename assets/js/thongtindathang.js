var popUp = document.getElementsByClassName('pop-up')[0]
var loginForm = document.getElementsByClassName('login-form-container')[0]

function minus(id){
    element = document.getElementById(`${id}`)
    var x = max(1, parseInt(element.value) - 1)
    element.value = x
}

function plus(id){
    element = document.getElementById(`${id}`)
    var x = parseInt(element.value) + 1
    element.value = x
}

function max(x, y){
    if(x >= y) return x
    return y
}

// Function mở đăng nhập
function AddAddress(){
    popUp.style.display = 'flex';
    loginForm.style.display = 'block';
}


function ClosePopUp(){
    popUp.style.display = 'none';
}


// Function đóng popup
popUp.addEventListener('click', (event)=>{
    if(!loginForm.contains(event.target)){
        ClosePopUp()
    }
})

// ## Event hover close img
document.getElementById('close-black-login').addEventListener('mouseover', (_)=>{
    document.getElementById('close-black-login').classList.add('hidden');
    document.getElementById('close-white-login').classList.remove('hidden');
})

document.getElementById('close-white-login').addEventListener('mouseover', (_)=>{
    document.getElementById('close-black-login').classList.add('hidden');
    document.getElementById('close-white-login').classList.remove('hidden');
})

document.getElementById('close-white-login').addEventListener('mouseout', (_)=>{
    document.getElementById('close-black-login').classList.remove('hidden');
    document.getElementById('close-white-login').classList.add('hidden');
})

document.getElementById('close-black-login').addEventListener('mouseout', (_)=>{
    document.getElementById('close-black-login').classList.remove('hidden');
    document.getElementById('close-white-login').classList.add('hidden');
})

