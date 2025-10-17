var loginForm = document.getElementsByClassName('login-form-container')[0]
var signUpForm = document.getElementsByClassName('signup-form-container')[0]
var infoProduct = document.getElementsByClassName('info-product-container')[0]

var idAlert = 0

// Function mở đăng nhập
function ShowLoginForm() {
    document.getElementById('ckb-popup').checked = true;
    loginForm.style.display = 'block';
    signUpForm.style.display = 'none';
    infoProduct.style.display = 'none';
    document.getElementById('email-login').focus()
}

// Function mở đăng ký
function ShowSignUpForm() {
    document.getElementById('ckb-popup').checked = true;
    loginForm.style.display = 'none';
    signUpForm.style.display = 'block';
    infoProduct.style.display = 'none';
    document.getElementById('user-signup').focus()
}

// Hàm zoom ảnh
function openZoom(){
    document.getElementById('ckb-popup').checked = true;
    loginForm.style.display = 'none';
    signUpForm.style.display = 'none';
    infoProduct.style.display = 'block';
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

// Đã đăng nhập -------------------------------------------
// Hàm thêm vào giỏ hàng
function addToCart(event){
    event.stopPropagation()
    AddAlert('Thêm sản phẩm thành công', 'success')
}

// Hàm mua ngay sản phẩm
function muaNgay(event){
    event.stopPropagation()
    window.location.href = 'cart.html'
}