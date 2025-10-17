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
    <div class="my-center">
      <div class="header">Danh sách đơn hàng</div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Mã đơn hàng</th>
          <th>Ngày đặt</th>
          <th>Trạng thái</th>
          <th>Tổng tiền</th>
          <th>Chi tiết</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>DH001</td>
          <td>07/10/2025</td>
          <td><span class="status delivering">Đang giao</span></td>
          <td>1.200.000₫</td>
          <td><a href="#" class="view-detail">Xem</a></td>
        </tr>
        <tr>
          <td>DH002</td>
          <td>05/10/2025</td>
          <td><span class="status completed">Hoàn tất</span></td>
          <td>950.000₫</td>
          <td><a href="#" class="view-detail">Xem</a></td>
        </tr>
        <tr>
          <td>DH003</td>
          <td>02/10/2025</td>
          <td><span class="status cancelled">Đã hủy</span></td>
          <td>650.000₫</td>
          <td><a href="#" class="view-detail">Xem</a></td>
        </tr>
      </tbody>
    </table>

    <!-- Modal chi tiết đơn hàng -->
    <div id="orderDetailModal" class="modal hidden">
      <div class="modal-content large">
        <span class="close-btn">&times;</span>
        <div class="modal-body">
          <div class="modal-left">
            <img id="detail-img" src="./assets/img/product1.jpg" alt="Ảnh sản phẩm">
            <button id="btn-toggle-img" class="btn-toggle-img">Xem ảnh khác</button>
          </div>
          <div class="modal-right">
            <h2>Chi tiết đơn hàng</h2>
            <p><strong>Mã đơn hàng:</strong> <span id="detail-id"></span></p>
            <p><strong>Ngày đặt:</strong> <span id="detail-date"></span></p>
            <p><strong>Trạng thái:</strong> <span id="detail-status"></span></p>
            <p><strong>Địa chỉ giao hàng:</strong> <span id="detail-address"></span></p>
            <p><strong>Tổng tiền:</strong> <span id="detail-total"></span></p>
            <h3>Danh sách sản phẩm</h3>
            <ul id="detail-products"></ul>
          </div>
        </div>
      </div>
    </div>
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



    // Khi bấm lại “Thông tin tài khoản”
    const infoItem = document.querySelector('.container-left .item.active');
    infoItem.addEventListener("click", function () {
        document.querySelectorAll('.container-left .item').forEach(item => item.classList.remove('active'));
        infoItem.classList.add('active');

        content.innerHTML = `
            <div class="my-center">
                <div class="header">Thông tin tài khoản</div>
            </div>
            <div class="my-left mt-17">
                <label class="item-text" for="inp-name">Họ tên</label>
                <input type="text" placeholder="Nhập tên của bạn" id="inp-name" class="text-box">
            </div>
            <div class="my-left mt-17">
                <label class="item-text">Giới tính</label>
                <div class="my-left">
                    <label for="inp-nam" class="mr-5">Nam</label>
                    <input type="radio" id="inp-nam" name="gender-ifo" checked class="mr-20 rd">
                    <label for="inp-nu" class="mr-5">Nữ</label>
                    <input type="radio" id="inp-nu" name="gender-ifo" class="rd">
                </div>
            </div>
            <div class="my-left mt-17">
                <label class="item-text" for="inp-phone">Số điện thoại</label>
                <input type="text" placeholder="Nhập số điện thoại của bạn" id="inp-phone" class="text-box">
            </div>
            <div class="my-left mt-17">
                <label class="item-text" for="inp-email">Email</label>
                <input type="text" id="inp-email" readonly class="text-box" value="cuongmanhle29092005@gmail.com">
            </div>
            <div class="my-left mt-17">
                <label class="item-text" for="inp-birth">Ngày sinh</label>
                <input type="date" id="inp-birth" class="text-box">
            </div>
            <div class="my-center mt-20">
                <button class="btn btn-blue" onclick="AddAlert('Lưu thông tin thành công', 'success')">
                    Lưu thông tin
                </button>
            </div>
        `;
    });

    // ==== Khi nhấn “Đổi mật khẩu” ====
    btnChangePassword.addEventListener("click", function () {
        document.querySelectorAll('.container-left .item').forEach(item => item.classList.remove('active'));
        btnChangePassword.classList.add('active');

        content.innerHTML = `
            <div class="my-center">
                <div class="header">Đổi mật khẩu</div>
            </div>
            <div class="my-form mt-17">
                <label class="label-Pass" for="old-pass">Mật khẩu hiện tại</label>
                <input type="password" id="old-pass" class="text-box" placeholder="Nhập mật khẩu cũ">
            </div>
            <div class="my-form mt-17">
                <label class="label-Pass" for="new-pass">Mật khẩu mới</label>
                <input type="password" id="new-pass" class="text-box" placeholder="Nhập mật khẩu mới">
            </div>
            <div class="my-form mt-17">
                <label class="label-Pass" for="confirm-pass">Xác nhận mật khẩu</label>
                <input type="password" id="confirm-pass" class="text-box" placeholder="Nhập lại mật khẩu mới">
            </div>
            <div class="my-center mt-20">
                <button class="btn btn-blue" onclick="AddAlert('Đổi mật khẩu thành công', 'success')">
                    Đổi mật khẩu
                </button>
            </div>
        `;
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
