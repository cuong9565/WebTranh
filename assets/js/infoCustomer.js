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
            <td>27.000.000₫</td>
            <td><a href="#" class="view-detail">Xem</a></td>
          </tr>
          <tr>
            <td>DH002</td>
            <td>05/10/2025</td>
            <td><span class="status completed">Hoàn tất</span></td>
            <td>27.000.000₫</td>
            <td><a href="#" class="view-detail">Xem</a></td>
          </tr>
          <tr>
            <td>DH003</td>
            <td>02/10/2025</td>
            <td><span class="status cancelled">Đã hủy</span></td>
            <td>27.000.000₫</td>
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
              
            </div>
            <div class="modal-right">
              <h2>Chi tiết đơn hàng</h2>
              <p><strong>Mã đơn hàng:</strong> <span id="detail-id"></span></p>
              <p><strong>Ngày đặt:</strong> <span id="detail-date"></span></p>
              <p><strong>Trạng thái:</strong> <span id="detail-status"></span></p>
              <p><strong>Địa chỉ giao hàng:</strong> <span id="detail-address"></span></p>
              <p><strong>Loại sản phẩm:</strong> <span id="detail-type"></span></p>
              <p><strong>Tổng số lượng mua:</strong> <span id="detail-quantity"></span></p>
              <p><strong>Tổng tiền:</strong> <span id="detail-total"></span></p>
              <h3>Danh sách sản phẩm</h3>
              <div id="detail-products" class="product-list"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Modal zoom ảnh -->
     <div id="imgZoomModal" class="modal hidden">
        <span class="close-zoom">&times;</span>
        <img id="zoomedImg" class="zoomed-img" src="" alt="Ảnh phóng to">
     </div>


    `;

        // Gắn sự kiện sau khi render bảng
        attachOrderDetailEvents();
    });

    // === Khi bấm “Thông tin tài khoản” ===
    const infoItem = document.querySelector(".container-left .item.active");
    infoItem.addEventListener("click", function () {
        document.querySelectorAll(".container-left .item").forEach(item => item.classList.remove("active"));
        infoItem.classList.add("active");

        content.innerHTML = `
      <div class="my-center">
        <div class="header">Thông tin tài khoản</div>
      </div>
      <div class="my-left mt-17">
        <label class="item-text" for="inp-name">Họ tên</label>
        <input type="text" placeholder="Nhập tên của bạn" id="inp-name" class="text-box" value="Le Manh Cuong">
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
        <input type="text" placeholder="Nhập số điện thoại của bạn" id="inp-phone" class="text-box" value="0123456789">
      </div>
      <div class="my-left mt-17">
        <label class="item-text" for="inp-email">Email</label>
        <input type="text" id="inp-email" readonly class="text-box" value="dangphuc2005@gmail.com">
      </div>
       <div class="my-left mt-17">
            <label class="item-text" for="inp-birth">Ngày sinh</label>
            <input type="date" id="inp-birth" class="text-box" value="2005-09-21">
        </div>
      <div class="my-center mt-20">
        <button class="btn btn-blue" onclick="AddAlert('Lưu thông tin thành công', 'success')">
          Lưu thông tin
        </button>
      </div>
    `;
    });


    // === Zoom ảnh sản phẩm ===
    document.addEventListener("click", function (e) {
        // Khi click vào ảnh sản phẩm
        if (e.target.closest(".product-item img")) {
            const imgSrc = e.target.src;
            const zoomModal = document.getElementById("imgZoomModal");
            const zoomedImg = document.getElementById("zoomedImg");
            zoomedImg.src = imgSrc;
            zoomModal.classList.remove("hidden");
            zoomModal.style.display = "flex";
        }

        // Khi click vào nút X hoặc vùng tối bên ngoài
        const zoomModal = document.getElementById("imgZoomModal");
        if (
            zoomModal &&
            (e.target.classList.contains("close-zoom") || e.target === zoomModal)
        ) {
            zoomModal.classList.add("hidden");
            zoomModal.style.display = "none";
        }
    });



    // === Khi bấm “Đổi mật khẩu” ===
    btnChangePassword.addEventListener("click", function () {
        document.querySelectorAll(".container-left .item").forEach(item => item.classList.remove("active"));
        btnChangePassword.classList.add("active");

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

    // === Hàm gắn sự kiện modal chi tiết ===
    function attachOrderDetailEvents() {
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
