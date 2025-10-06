var popUp = document.getElementsByClassName('pop-up')[0]
var loginForm = document.getElementsByClassName('login-form-container')[0]
var signUpForm = document.getElementsByClassName('signup-form-container')[0]
var imgSlide = document.getElementById('slide-img')

var idAlert = 0
var indexSlide = 0
var numSlide = 4

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

// Function chuyển trang
function GoToSlide(index){
    var oldIndex = indexSlide
    indexSlide = index
    imgSlide.src = `./assets/img/slide/${indexSlide}.jpg`
    document.getElementsByClassName('icon-dot')[oldIndex].src = './assets/img/dot.svg';
    document.getElementsByClassName('icon-dot')[indexSlide].src = './assets/img/dot1.svg';
}

function SwitchSlide(cnt){
    var numSlide = 4
    GoToSlide((indexSlide + cnt + numSlide) % numSlide)
    clearInterval(inTerValSlide)

    inTerValSlide = setInterval(()=>{
        GoToSlide((indexSlide + 1 + numSlide) % numSlide)
    }, 3000)
}

function SwitchIndexSlide(index){
    GoToSlide(index)
    clearInterval(inTerValSlide)
    
    inTerValSlide = setInterval(()=>{
        GoToSlide((indexSlide + 1 + numSlide) % numSlide)
    }, 3000)
}

function CloseAlert(indexAlert){
    if(document.getElementById(`${indexAlert}`))
        document.getElementById(`${indexAlert}`).remove()
}

function AddAlert(text, type){
    idAlert = idAlert + 1

    const newId = idAlert
    setTimeout(()=>{
        CloseAlert(`alert-${newId}`)
    },3000)

    var newDiv = document.createElement('div')
    newDiv.className = `alert ${type}`
    newDiv.id = `alert-${newId}`
    
    if(type == 'success'){
        newDiv.innerHTML = `
            <div class="item">
                <img src="./assets/img/success.svg" alt="success" />
                <p>${text}</p>
            </div>
                <span onclick="CloseAlert('alert-${newId}')">&times;</span>
        `
    }
    else if(type == 'fail'){
        newDiv.innerHTML = `
            <div class="item">
                <img src="./assets/img/fail.svg" alt="fail" />
                <p>${text}</p>
            </div>
            <span onclick="CloseAlert('alert-${newId}')">&times;</span>
        `
    }

    document.getElementsByClassName('container-alert')[0].append(newDiv)
}

function ShowCategory(category){
    var items = document.getElementsByClassName('item-a')
    for(let i=0; i<items.length; i++) items[0].classList.remove('isactive')
    if(category != 'new') items[productTypes[category].id].classList.add('isactive')

    const nameCategory = productTypes[category].name
    let html = 
    `
        <p class="test-bottom" id="test-bottom">${nameCategory}</p>
        <div class="gallery">
    `

    if(category=='new' || category=='all'){
        let pds = productTypes[category].products
        for(let j=0; j<pds.length; j++){
            let nameCategory = productTypes[pds[j][0]].name
            let productlist = productTypes[pds[j][0]].products
            pds[j][1].forEach(i => {
                html +=
                `
                    <a href="productDetails.html?category=${pds[j][0]}?id=${i}" class="picture-link">
                        <div class="picture-wrapper">
                            <img src="${productlist[i].mainImage}" class="picture">
                            <h1>${nameCategory}</h1>
                            <h2>${productlist[i].title}</h2>
                            <h3>${productlist[i].price}</h3>
                        </div>
                    </a>
                `
            });
        }
    }
    else{
        let productlist = productTypes[category].products
        for(let i=1; i<=8; i++){
            html +=
            `
                <a href="productDetails.html?category=${category}?id=${i}" class="picture-link">
                    <div class="picture-wrapper">
                        <img src="${productlist[i].mainImage}" class="picture">
                        <h1>${nameCategory}</h1>
                        <h2>${productlist[i].title}</h2>
                        <h3>${productlist[i].price}</h3>
                    </div>
                </a>
            `
        }
    }
    html +=
    `
        </div>
    `
    document.getElementById('card-list').innerHTML = html
    document.getElementById('card-list').scrollIntoView(true);
}

// Yêu cầu đăng nhập trước khi mua hàng
function CartRequireLogin(){
    AddAlert('Vui lòng đăng nhập tài khoản', 'fail')
    ShowLoginForm()
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

document.getElementById('btn-signup').addEventListener('click', (e) => {
    e.preventDefault()
    AddAlert('Đăng ký tài khoản thành công', 'success')
    ShowLoginForm()
})

document.getElementById('btn-login').addEventListener('click', (e)=>{
    e.preventDefault()
    window.location.href = 'isLogin.html'
})