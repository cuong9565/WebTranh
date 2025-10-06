const url = window.location.href.split('?')
ShowProductDetail(url[1].split('=')[1], url[2].split('=')[1])

// Hiển thị thông tin chi tiết sản phẩm
function ShowProductDetail(category, id){
    const p = productTypes[category].products[id]
    if(p){
        document.getElementById("mainImage").src = p.mainImage;
        document.getElementById("productTitle").textContent = p.title;
        document.getElementById("productPrice").textContent = p.price;
        document.getElementById("productMaterial").textContent = 'Chất liệu: ' + p.material;
        document.getElementById("productSize").textContent = 'Kích thước: ' + p.size;
        document.getElementById("productDesc").innerHTML = 'Mô tả</br>' + p.desc;
    }else{
        document.querySelector(".product-detail-container").innerHTML = "<p>Sản phẩm không tồn tại!</p>";
    }
}

// Phóng to ảnh
function openZoom(){

}