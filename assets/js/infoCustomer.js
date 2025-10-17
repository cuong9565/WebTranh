document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const btnOrders = document.getElementById("btn-orders");
    const btnChangePassword = document.getElementById("btn-change-password");
    const infoMenu = document.querySelector('.item.active');

    // Khi bấm “Quản lý đơn hàng”
    btnOrders.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelectorAll(".container-left .item").forEach(item => item.classList.remove("active"));
        btnOrders.classList.add("active");

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

            // Gán dữ liệu vào modal
            document.getElementById("detail-id").innerText = id;
            document.getElementById("detail-date").innerText = date;
            document.getElementById("detail-status").innerText = status;
            document.getElementById("detail-address").innerText = "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh";
            document.getElementById("detail-total").innerText = total;
            document.getElementById("detail-products").innerHTML = `
            <li>Sản phẩm 1 - 2 x 150.000₫</li>
            <li>Sản phẩm 2 - 1 x 250.000₫</li>
        `;

            // Hiển thị modal
            const modal = document.getElementById("orderDetailModal");
            modal.style.display = "flex";
        });
    });

    // Đóng modal khi nhấn nút X hoặc click ra ngoài
    document.addEventListener("click", function (e) {
        const modal = document.getElementById("orderDetailModal");
        if (e.target.classList.contains("close-btn") || e.target === modal) {
            modal.style.display = "none";
        }
    });

});
