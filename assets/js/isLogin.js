var imgSlide = document.getElementById('slide-img')

var idAlert = 0
var indexSlide = 0
var numSlide = 4


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
                    <div class="picture-link">
                        <div class="picture-wrapper" onclick="MoveDetail('productDetails.html?category=phongcanh?id=5')">
                            <img src="${productlist[i].mainImage}" class="picture">
                            <div class="content-wrapper">
                                <h1>${nameCategory}</h1>
                                <h2>${productlist[i].title}</h2>
                                <h3>${productlist[i].price}</h3>
                                <div class="item">
                                    <button onclick="addToCart(event)">Thêm vào giỏ</button>
                                    <button onclick="muaNgay(event)">Mua ngay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            });
        }
    }
    else{
        let productlist = productTypes[category].products
        for(let i=0; i<8; i++){
            html +=
            `
                <div class="picture-link">
                    <div class="picture-wrapper" onclick="MoveDetail('productDetails.html?category=phongcanh?id=5')">
                        <img src="${productlist[i].mainImage}" class="picture">
                        <div class="content-wrapper">
                            <h1>${nameCategory}</h1>
                            <h2>${productlist[i].title}</h2>
                            <h3>${productlist[i].price}</h3>
                            <div class="item">
                                <button onclick="addToCart(event)">Thêm vào giỏ</button>
                                <button onclick="muaNgay(event)">Mua ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
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
function CartRequireLogin(event){
}

// Hàm chuyển trang
function MoveDetail(url){
    window.location.href = url;
}

function addToCart(event){
    event.stopPropagation()
    AddAlert('Thêm sản phẩm thành công', 'success')
}

function muaNgay(event){
    event.stopPropagation()
    window.location.href = 'cart.html'
}