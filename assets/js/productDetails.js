// Lấy id từ URL và hiển thị chi tiết sản phẩm
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (products[id]) {
    const p = products[id];
    document.getElementById("mainImage").src = p.mainImage;
    document.getElementById("productTitle").textContent = p.title;
    document.getElementById("productPrice").textContent = p.price;
    document.getElementById("productMaterial").textContent = p.material;
    document.getElementById("productSize").textContent = p.size;
    document.getElementById("productDesc").innerHTML = p.desc;
} else {
    document.querySelector(".product-detail-container").innerHTML = "<p>Sản phẩm không tồn tại!</p>";
}


/*  // ========================================Chức năng phóng to ảnh==================================

function openZoom() {
    const modal = document.getElementById("zoomModal");
    const zoomedImage = document.getElementById("zoomedImage");
    const mainImage = document.getElementById("mainImage");

    zoomedImage.src = mainImage.src; // lấy ảnh chính
    modal.style.display = "flex"; // hiện modal
}

function closeZoom() {
    document.getElementById("zoomModal").style.display = "none";
}

let zoomLevel = 1;

function openZoom() {
    const modal = document.getElementById("zoomModal");
    const zoomedImage = document.getElementById("zoomedImage");
    const mainImage = document.getElementById("mainImage");

    zoomedImage.src = mainImage.src;
    zoomLevel = 1; // reset khi mở
    zoomedImage.style.transform = "scale(1)";
    modal.style.display = "flex";
}

function closeZoom() {
    document.getElementById("zoomModal").style.display = "none";
}

function zoomIn() {
    zoomLevel += 0.2;
    document.getElementById("zoomedImage").style.transform = `scale(${zoomLevel})`;
}

function zoomOut() {
    if (zoomLevel > 0.4) { // giới hạn nhỏ nhất
        zoomLevel -= 0.2;
        document.getElementById("zoomedImage").style.transform = `scale(${zoomLevel})`;
    }
}

function resetZoom() {
    zoomLevel = 1;
    document.getElementById("zoomedImage").style.transform = "scale(1)";
}


// Đóng modal khi click ra ngoài ảnh
window.onclick = function(event) {
    const modal = document.getElementById("zoomModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
    */


