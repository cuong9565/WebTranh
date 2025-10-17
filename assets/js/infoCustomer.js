document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const btnOrders = document.getElementById("btn-orders");
    const btnChangePassword = document.getElementById("btn-change-password");

    // === Khi bấm “Quản lý đơn hàng” ===
    btnOrders.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelectorAll(".container-left .item").forEach(item => item.classList.remove("active"));
        btnOrders.classList.add("active");

        // Render bảng + modal
        content.innerHTML = `
  `;

        // === Gắn sự kiện Xem chi tiết ===
        document.querySelectorAll(".view-detail").forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                const row = this.closest("tr");

                const id = row.children[0].innerText;
                const date = row.children[1].innerText;
                const status = row.children[2].innerText;
                const total = row.children[3].innerText;

                document.getElementById("detail-id").innerText = id;
                document.getElementById("detail-date").innerText = date;
                document.getElementById("detail-status").innerText = status;
                document.getElementById("detail-address").innerText = "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh";
                document.getElementById("detail-total").innerText = total;
                document.getElementById("detail-products").innerHTML = `
        <li>Sản phẩm 1 - 1 x 150.000₫</li>
        <li>Sản phẩm 2 - 1 x 250.000₫</li>
        <li>Sản phẩm 3 - 1 x 900.000₫</li>
      `;

                // === Danh sách nhiều ảnh ===
                const imageList = [
                    "./assets/img/picture3.jpg",
                    "./assets/img/picture4.jpg",
                    "./assets/img/picture5.jpg"
                ];

                const detailImg = document.getElementById("detail-img");
                const toggleBtn = document.getElementById("btn-toggle-img");
                let currentIndex = 0;

                detailImg.src = imageList[currentIndex];

                toggleBtn.onclick = () => {
                    currentIndex = (currentIndex + 1) % imageList.length;
                    detailImg.style.opacity = 0;
                    setTimeout(() => {
                        detailImg.src = imageList[currentIndex];
                        detailImg.style.opacity = 1;
                    }, 200);
                };

                document.getElementById("orderDetailModal").style.display = "flex";
            });
        });

        // === Đóng modal ===
        document.addEventListener("click", function (e) {
            const modal = document.getElementById("orderDetailModal");
            if (modal && (e.target.classList.contains("close-btn") || e.target === modal)) {
                modal.style.display = "none";
            }
        });
    });

    // Xử lý khi bấm "Xem"
    document.querySelectorAll(".view-detail").forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const row = this.closest("tr");

            // Lấy thông tin đơn hàng từ bảng
            const id = row.children[0].innerText;
            const date = row.children[1].innerText;
            const status = row.children[2].innerText;
            const total = row.children[3].innerText;

                document.getElementById("detail-id").innerText = id;
                document.getElementById("detail-date").innerText = date;
                document.getElementById("detail-status").innerText = status;
                document.getElementById("detail-address").innerText = "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh";
                document.getElementById("detail-total").innerText = total;
                document.getElementById("detail-type").innerText = "Tranh Sơn Dầu";
                document.getElementById("detail-quantity").innerText = "3 sản phẩm";


                const products = [
                    { name: "Đêm Pari", qty: 1, price: "10.000.000₫", img: "./assets/img/picture3.jpg" },
                    { name: "Thu Vàng", qty: 1, price: "8.000.000₫", img: "./assets/img/picture4.jpg" },
                    { name: "Phố Lồng Đèn", qty: 1, price: "9.000.000₫", img: "./assets/img/picture5.jpg" }
                ];

                const productList = document.getElementById("detail-products");
                productList.innerHTML = products.map(p => `
          <div class="product-item">
            <img src="${p.img}" alt="${p.name}">
            <div class="product-info">
              <span><strong>${p.name}</strong></span>
              <span>${p.qty} x ${p.price}</span>
            </div>
          </div>
        `).join("");

                const modal = document.getElementById("orderDetailModal");
                modal.classList.remove("hidden");
                modal.style.display = "flex";
            });
        });

        // Đóng modal
        document.addEventListener("click", function (e) {
            const modal = document.getElementById("orderDetailModal");
            if (modal && (e.target.classList.contains("close-btn") || e.target === modal)) {
                modal.classList.add("hidden");
                modal.style.display = "none";
            }
        });
    }
});
