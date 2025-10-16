var loginForm = document.getElementsByClassName('login-form-container')[0]
var signUpForm = document.getElementsByClassName('signup-form-container')[0]
var imgSlide = document.getElementById('slide-img')

var idAlert = 0
var indexSlide = 0
var numSlide = 4

// Function mở đăng nhập
function ShowLoginForm() {
    document.getElementById('ckb-popup').checked = true;
    loginForm.style.display = 'block';
    signUpForm.style.display = 'none';
    document.getElementById('email-login').focus()
}

// Function mở đăng ký
function ShowSignUpForm() {
    document.getElementById('ckb-popup').checked = true;
    loginForm.style.display = 'none';
    signUpForm.style.display = 'block';
    document.getElementById('user-signup').focus()
}

// Function hiện mật khẩu
function ShowPass(id) {
    document.getElementById(id).type = 'text';
    document.getElementsByClassName('closed-' + id)[0].classList.add('hidden')
    document.getElementsByClassName('opened-' + id)[0].classList.remove('hidden')
}

// Function ẩn mật khẩu
function HiddePass(id) {
    document.getElementById(id).type = 'password';
    document.getElementsByClassName('closed-' + id)[0].classList.remove('hidden')
    document.getElementsByClassName('opened-' + id)[0].classList.add('hidden')
}

// Function chuyển trang
function GoToSlide(index) {
    var oldIndex = indexSlide
    indexSlide = index
    imgSlide.src = `./assets/img/slide/${indexSlide}.jpg`
    document.getElementsByClassName('icon-dot')[oldIndex].src = './assets/img/dot.svg';
    document.getElementsByClassName('icon-dot')[indexSlide].src = './assets/img/dot1.svg';
}

function SwitchSlide(cnt) {
    var numSlide = 4
    GoToSlide((indexSlide + cnt + numSlide) % numSlide)
    clearInterval(inTerValSlide)

    inTerValSlide = setInterval(() => {
        GoToSlide((indexSlide + 1 + numSlide) % numSlide)
    }, 3000)
}

function SwitchIndexSlide(index) {
    GoToSlide(index)
    clearInterval(inTerValSlide)

    inTerValSlide = setInterval(() => {
        GoToSlide((indexSlide + 1 + numSlide) % numSlide)
    }, 3000)
}

// function tắt thông báo
function CloseAlert(indexAlert) {
    if (document.getElementById(`${indexAlert}`))
        document.getElementById(`${indexAlert}`).remove()
}

// function thêm thông báo
function AddAlert(text, type) {
    idAlert = idAlert + 1

    const newId = idAlert
    setTimeout(() => {
        CloseAlert(`alert-${newId}`)
    }, 3000)

    var newDiv = document.createElement('div')
    newDiv.className = `alert ${type}`
    newDiv.id = `alert-${newId}`

    if (type == 'success') {
        newDiv.innerHTML = `
            <div class="item">
                <img src="./assets/img/success.svg" alt="success" />
                <p>${text}</p>
            </div>
                <span onclick="CloseAlert('alert-${newId}')">&times;</span>
        `
    }
    else if (type == 'fail') {
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

// Yêu cầu đăng nhập trước khi mua hàng
function CartRequireLogin(event) {
    event.stopPropagation()
    AddAlert('Vui lòng đăng nhập tài khoản', 'fail')
    ShowLoginForm()
}

// Hàm chuyển trang
function MoveDetail(url) {
    window.location.href = url;
}