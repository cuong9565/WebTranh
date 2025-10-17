// Dữ liệu mẫu cho sản phẩm (option tĩnh)
const sampleProducts = [
    { id: 1, name: "Sơn dầu cao cấp" },
    { id: 2, name: "Cọ vẽ tổng hợp" },
    { id: 3, name: "Bảng màu nước" },
    { id: 4, name: "Giấy vẽ chuyên dụng" },
    { id: 5, name: "Màu acrylic" }
];

// Dữ liệu mẫu cho phiếu nhập
const importData = {
    'PN001': {
        supplier: 'Công ty TNHH Nguyên liệu thiên nhiên',
        date: '2024-01-15',
        products: [
            { productId: 1, name: "Sơn dầu cao cấp", quantity: 5, price: 250000 },
            { productId: 2, name: "Cọ vẽ tổng hợp", quantity: 10, price: 150000 },
            { productId: 4, name: "Giấy vẽ chuyên dụng", quantity: 20, price: 120000 }
        ],
        total: 15750000
    },
    'PN002': {
        supplier: 'Công ty TNHH Sài Gòn',
        date: '2024-01-18',
        products: [
            { productId: 3, name: "Bảng màu nước", quantity: 8, price: 180000 },
            { productId: 5, name: "Màu acrylic", quantity: 12, price: 200000 }, 
            { productId: 4, name: "Giấy vẽ chuyên dụng", quantity: 20, price: 120000 }
        ],
        total: 8900000
    },
    'PN003': {
        supplier: 'Công ty CP Dược phẩm tự nhiên',
        date: '2024-01-20',
        products: [
            { productId: 1, name: "Sơn dầu cao cấp", quantity: 10, price: 250000 },
            { productId: 2, name: "Cọ vẽ tổng hợp", quantity: 15, price: 150000 },
            { productId: 3, name: "Bảng màu nước", quantity: 8, price: 180000 },
            { productId: 4, name: "Giấy vẽ chuyên dụng", quantity: 25, price: 120000 }
        ],
        total: 12400000
    }
};

// Biến đếm số dòng sản phẩm
let productRowCount = 0;
let editProductRowCount = 0;

// Hiển thị modal khi bấm nút Thêm phiếu nhập
document.addEventListener('DOMContentLoaded', function () {
    var openBtn = document.getElementById('openModalAddProduct');
    var modal = document.getElementById('modalAddImport');

    if (openBtn && modal) {
        openBtn.addEventListener('click', function () {
            modal.style.display = 'flex';
            // Thêm dòng sản phẩm đầu tiên khi mở modal
            addProductRow();
        });
    }

    // Đóng modal khi bấm nút đóng hoặc overlay
    var closeBtn = document.getElementById('closeModalAddImport');
    var cancelBtn = document.getElementById('cancelAddImport');
    [closeBtn, cancelBtn].forEach(function (btn) {
        if (btn) btn.onclick = function () {
            modal.style.display = 'none';
            resetForm();
        };
    });

    // Đóng modal sửa
    var closeEditBtn = document.getElementById('closeModalEditImport');
    var cancelEditBtn = document.getElementById('cancelEditImport');
    [closeEditBtn, cancelEditBtn].forEach(function (btn) {
        if (btn) btn.onclick = function () {
            document.getElementById('modalEditImport').style.display = 'none';
            resetEditForm();
        };
    });

    // Đóng modal xem
    var closeViewBtn = document.getElementById('closeModalViewImport');
    var closeViewBtn2 = document.getElementById('closeViewImport');
    [closeViewBtn, closeViewBtn2].forEach(function (btn) {
        if (btn) btn.onclick = function () {
            document.getElementById('modalViewImport').style.display = 'none';
        };
    });

    window.onclick = function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            resetForm();
        }
        var editModal = document.getElementById('modalEditImport');
        if (e.target === editModal) {
            editModal.style.display = 'none';
            resetEditForm();
        }
        var viewModal = document.getElementById('modalViewImport');
        if (e.target === viewModal) {
            viewModal.style.display = 'none';
        }
    };

    // Thêm dòng sản phẩm
    var addRowBtn = document.getElementById('btnAddProductRow');
    if (addRowBtn) {
        addRowBtn.addEventListener('click', addProductRow);
    }

    // Thêm dòng sản phẩm trong modal sửa
    var addEditRowBtn = document.getElementById('btnAddEditProductRow');
    if (addEditRowBtn) {
        addEditRowBtn.addEventListener('click', addEditProductRow);
    }

    // Xử lý submit form thêm
    var formAdd = document.getElementById('formAddImport');
    if (formAdd) {
        formAdd.addEventListener('submit', function (e) {
            e.preventDefault();
           notification.success("Thêm phiếu nhập thành công !")
            modal.style.display = 'none';
            resetForm();
        });
    }

    // Xử lý submit form sửa
    var formEdit = document.getElementById('formEditImport');
    if (formEdit) {
        formEdit.addEventListener('submit', function (e) {
            e.preventDefault();
           notification.success("Cập nhật phiếu thành công !")
            document.getElementById('modalEditImport').style.display = 'none';
            resetEditForm();
        });
    }

    // Xử lý nhập file excel
    var excelBtn = document.querySelector('.btn-excel-import');
    var fileInput = document.getElementById('excelFileInput');
    if (excelBtn && fileInput) {
        excelBtn.addEventListener('click', function () {
            fileInput.click();
        });
        fileInput.addEventListener('change', function (e) {
            if (e.target.files.length > 0) {
          notification.success("Nhập file Excel thành công !")
            }
        });
    }
});

// Hàm thêm dòng sản phẩm trong modal thêm
function addProductRow() {
    const tbody = document.getElementById('importProductRows');
    const rowIndex = productRowCount++;

    const row = document.createElement('tr');
    row.innerHTML = `
            <td>
                <select class="product-select" name="products[${rowIndex}][product]" required>
                    <option value="">Chọn sản phẩm</option>
                    ${sampleProducts.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
                </select>
            </td>
            <td>
                <input type="number" class="quantity-input" name="products[${rowIndex}][quantity]" min="1" value="1" required>
            </td>
            <td>
                <input type="number" class="price-input" name="products[${rowIndex}][price]" min="0" value="0" required>
            </td>
            <td class="row-total">₫0</td>
            <td>
                <button type="button" class="delete-btn" >
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `;

    tbody.appendChild(row);

    // Thêm sự kiện tính toán cho các input
    const quantityInput = row.querySelector('.quantity-input');
    const priceInput = row.querySelector('.price-input');

    [quantityInput, priceInput].forEach(input => {
        input.addEventListener('input', calculateRowTotal);
    });

    // Tính toán tổng tiền
    calculateTotal();
}

// Hàm thêm dòng sản phẩm trong modal sửa
function addEditProductRow() {
    const tbody = document.getElementById('editProductRows');
    const rowIndex = editProductRowCount++;

    const row = document.createElement('tr');
    row.innerHTML = `
            <td>
                <select class="product-select" name="products[${rowIndex}][product]" required>
                    <option value="">Chọn sản phẩm</option>
                    ${sampleProducts.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
                </select>
            </td>
            <td>
                <input type="number" class="quantity-input" name="products[${rowIndex}][quantity]" min="1" value="1" required>
            </td>
            <td>
                <input type="number" class="price-input" name="products[${rowIndex}][price]" min="0" value="0" required>
            </td>
            <td class="row-total">₫0</td>
            <td>
                <button type="button" class="delete-btn" onclick="deleteEditProductRow(this)">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `;

    tbody.appendChild(row);

    // Thêm sự kiện tính toán cho các input
    const quantityInput = row.querySelector('.quantity-input');
    const priceInput = row.querySelector('.price-input');

    [quantityInput, priceInput].forEach(input => {
        input.addEventListener('input', calculateEditRowTotal);
    });

    // Tính toán tổng tiền
    calculateEditTotal();
}

// Hàm xóa dòng sản phẩm trong modal thêm
function deleteProductRow(button) {
    const row = button.closest('tr');
    row.remove();
    calculateTotal();
}

// Hàm xóa dòng sản phẩm trong modal sửa
function deleteEditProductRow(button) {
    const row = button.closest('tr');
    row.remove();
    calculateEditTotal();
}

// Hàm tính tổng tiền cho một dòng trong modal thêm
function calculateRowTotal() {
    const row = this.closest('tr');
    const quantity = parseInt(row.querySelector('.quantity-input').value) || 0;
    const price = parseInt(row.querySelector('.price-input').value) || 0;
    const total = quantity * price;

    row.querySelector('.row-total').textContent = `₫${total.toLocaleString('vi-VN')}`;
    calculateTotal();
}

// Hàm tính tổng tiền cho một dòng trong modal sửa
function calculateEditRowTotal() {
    const row = this.closest('tr');
    const quantity = parseInt(row.querySelector('.quantity-input').value) || 0;
    const price = parseInt(row.querySelector('.price-input').value) || 0;
    const total = quantity * price;

    row.querySelector('.row-total').textContent = `₫${total.toLocaleString('vi-VN')}`;
    calculateEditTotal();
}

// Hàm tính tổng tiền cho modal thêm
function calculateTotal() {
    const rows = document.querySelectorAll('#importProductRows tr');
    let total = 0;

    rows.forEach(row => {
        const quantity = parseInt(row.querySelector('.quantity-input').value) || 0;
        const price = parseInt(row.querySelector('.price-input').value) || 0;
        total += quantity * price;
    });

    document.getElementById('importTotal').textContent = `₫${total.toLocaleString('vi-VN')}`;
}

// Hàm tính tổng tiền cho modal sửa
function calculateEditTotal() {
    const rows = document.querySelectorAll('#editProductRows tr');
    let total = 0;

    rows.forEach(row => {
        const quantity = parseInt(row.querySelector('.quantity-input').value) || 0;
        const price = parseInt(row.querySelector('.price-input').value) || 0;
        total += quantity * price;
    });

    document.getElementById('editImportTotal').textContent = `₫${total.toLocaleString('vi-VN')}`;
}

// Hàm reset form thêm
function resetForm() {
    document.getElementById('formAddImport').reset();
    document.getElementById('importProductRows').innerHTML = '';
    document.getElementById('importTotal').textContent = '₫0';
    productRowCount = 0;
}

// Hàm reset form sửa
function resetEditForm() {
    document.getElementById('formEditImport').reset();
    document.getElementById('editProductRows').innerHTML = '';
    document.getElementById('editImportTotal').textContent = '₫0';
    editProductRowCount = 0;
}

// Hàm mở modal xem chi tiết
function openViewModal(importCode) {
    const modal = document.getElementById('modalViewImport');
    const data = importData[importCode];

    if (data) {
        document.getElementById('viewImportCode').value = importCode;
        document.getElementById('viewImportSupplier').value = data.supplier;
        document.getElementById('viewImportDate').value = data.date;

        const tbody = document.getElementById('viewProductRows');
        tbody.innerHTML = '';

        data.products.forEach(product => {
            const row = document.createElement('tr');
            const productTotal = product.quantity * product.price;
            row.innerHTML = `
                    <td>${product.name}</td>
                    <td class="center-align">${product.quantity}</td>
                    <td class="center-align">${product.price.toLocaleString('vi-VN')}₫</td>
                    <td class="center-align">${productTotal.toLocaleString('vi-VN')}₫</td>
                `;
            tbody.appendChild(row);
        });

        document.getElementById('viewImportTotal').textContent = `${data.total.toLocaleString('vi-VN')}₫`;
        modal.style.display = 'flex';
    }
}

// Hàm mở modal sửa
function openEditModal(importCode) {
    const modal = document.getElementById('modalEditImport');
    const data = importData[importCode];

    if (data) {
        document.getElementById('editImportCode').value = importCode;
        document.getElementById('editImportSupplier').value = data.supplier;
        document.getElementById('editImportDate').value = data.date;

        const tbody = document.getElementById('editProductRows');
        tbody.innerHTML = '';
        editProductRowCount = 0;

        data.products.forEach(product => {
            const rowIndex = editProductRowCount++;
            const row = document.createElement('tr');
            const productTotal = product.quantity * product.price;
            row.innerHTML = `
                    <td>
                        <select class="product-select" name="products[${rowIndex}][product]" required>
                            <option value="">Chọn sản phẩm</option>
                            ${sampleProducts.map(p => `<option value="${p.id}" ${p.id === product.productId ? 'selected' : ''}>${p.name}</option>`).join('')}
                        </select>
                    </td>
                    <td>
                        <input type="number" class="quantity-input" name="products[${rowIndex}][quantity]" min="1" value="${product.quantity}" required>
                    </td>
                    <td>
                        <input type="number" class="price-input" name="products[${rowIndex}][price]" min="0" value="${product.price}" required>
                    </td>
                    <td class="row-total">${productTotal.toLocaleString('vi-VN')}₫</td>
                    <td>
                        <button type="button" class="delete-btn">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                `;
            tbody.appendChild(row);

            // Thêm sự kiện tính toán cho các input
            // const quantityInput = row.querySelector('.quantity-input');
            // const priceInput = row.querySelector('.price-input');

            // [quantityInput, priceInput].forEach(input => {
            //     input.addEventListener('input', calculateEditRowTotal);
            // });
        });

        document.getElementById('editImportTotal').textContent = `${data.total.toLocaleString('vi-VN')}₫`;
        modal.style.display = 'flex';
    }
}