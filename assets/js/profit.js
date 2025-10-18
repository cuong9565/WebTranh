// Dữ liệu mẫu cho tỷ lệ lợi nhuận
const categories = [
    { id: 1, name: "Tranh sơn dầu", profitPercent: 35, productCount: 12 },
    { id: 2, name: "Tranh phong cảnh", profitPercent: 30, productCount: 8 },
    { id: 3, name: "Tranh chân dung", profitPercent: 40, productCount: 6 },
    { id: 4, name: "Tranh trừu tượng", profitPercent: 45, productCount: 10 },
    { id: 5, name: "Tranh sơn mài", profitPercent: 25, productCount: 4 },
    { id: 6, name: "Tranh thủy mặc ", profitPercent: 20, productCount: 2 }
];

const products = [
    { id: 1, code: "SP001", name: "Tranh phong cảnh mùa thu", category: "Tranh phong cảnh", cost: 850000, profitPercent: 30, price: 1105000 },
    { id: 2, code: "SP002", name: "Tranh sơn dầu chân dung", category: "Tranh chân dung", cost: 1200000, profitPercent: 40, price: 1680000 },
    { id: 3, code: "SP003", name: "Tranh trừu tượng đa sắc", category: "Tranh trừu tượng", cost: 950000, profitPercent: 45, price: 1377500 },
    { id: 4, code: "SP004", name: "Tranh sơn mài cổ điển", category: "Tranh sơn mài", cost: 1500000, profitPercent: 25, price: 1875000 },
    { id: 5, code: "SP005", name: "Tranh thủy mặc non nước", category: "Tranh thủy mặc", cost: 800000, profitPercent: 20, price: 960000 },
    { id: 6, code: "SP006", name: "Tranh sơn dầu hoàng hôn", category: "Tranh sơn dầu", cost: 1100000, profitPercent: 35, price: 1485000 },
    { id: 7, code: "SP007", name: "Tranh chân dung gia đình", category: "Tranh chân dung", cost: 1350000, profitPercent: 40, price: 1890000 },
    { id: 8, code: "SP008", name: "Tranh phong cảnh biển", category: "Tranh phong cảnh", cost: 900000, profitPercent: 30, price: 1170000 }
];

// Dữ liệu mẫu cho tồn kho
const inventoryData = [
    { id: 1, code: "SP001", name: "Tranh phong cảnh mùa thu", category: "Tranh phong cảnh", currentStock: 15, minStock: 5, status: "good" },
    { id: 2, code: "SP002", name: "Tranh sơn dầu chân dung", category: "Tranh chân dung", currentStock: 3, minStock: 5, status: "low" },
    { id: 3, code: "SP003", name: "Tranh trừu tượng đa sắc", category: "Tranh trừu tượng", currentStock: 22, minStock: 5, status: "good" },
    { id: 4, code: "SP004", name: "Tranh sơn mài cổ điển", category: "Tranh sơn mài", currentStock: 8, minStock: 3, status: "medium" },
    { id: 5, code: "SP005", name: "Tranh thủy mặc non nước", category: "Tranh thủy mặc", currentStock: 2, minStock: 3, status: "low" },
    { id: 6, code: "SP006", name: "Tranh sơn dầu hoàng hôn", category: "Tranh sơn dầu", currentStock: 12, minStock: 5, status: "good" },
    { id: 7, code: "SP007", name: "Tranh chân dung gia đình", category: "Tranh chân dung", currentStock: 6, minStock: 5, status: "medium" },
    { id: 8, code: "SP008", name: "Tranh phong cảnh biển", category: "Tranh phong cảnh", currentStock: 18, minStock: 5, status: "good" }
];

const inventoryHistory = [
    { id: 1, code: "SP001", name: "Tranh phong cảnh mùa thu", date: "2024-01-15", import: 10, export: 2, stock: 15, type: "Nhập hàng" },
    { id: 2, code: "SP001", name: "Tranh phong cảnh mùa thu", date: "2024-01-18", import: 0, export: 3, stock: 12, type: "Xuất bán" },
    { id: 3, code: "SP002", name: "Tranh sơn dầu chân dung", date: "2024-01-20", import: 5, export: 0, stock: 8, type: "Nhập hàng" },
    { id: 4, code: "SP002", name: "Tranh sơn dầu chân dung", date: "2024-01-22", import: 0, export: 5, stock: 3, type: "Xuất bán" },
    { id: 5, code: "SP003", name: "Tranh trừu tượng đa sắc", date: "2024-01-25", import: 15, export: 0, stock: 22, type: "Nhập hàng" }
];

// Định dạng tiền Việt Nam
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// Phân loại tỷ lệ lợi nhuận
function getProfitClass(percent) {
    if (percent >= 40) return "profit-good";
    if (percent >= 25) return "profit-medium";
    return "profit-low";
}

// Phân loại trạng thái tồn kho
function getStockClass(stock, minStock) {
    if (stock <= minStock) return "stock-low";
    if (stock <= minStock * 2) return "stock-medium";
    return "stock-good";
}

function getStockStatus(stock, minStock) {
    if (stock <= minStock) return "Sắp hết";
    if (stock <= minStock * 2) return "Cần theo dõi";
    return "Đủ hàng";
}

function getStockAlert(stock, minStock) {
    if (stock <= minStock) return "Cần nhập hàng gấp";
    if (stock <= minStock * 2) return "Cần bổ sung";
    return "Bình thường";
}

// Hiển thị danh sách danh mục
function renderCategories() {
    const tbody = document.querySelector("#categoryTable tbody");
    tbody.innerHTML = "";

    categories.forEach(category => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${category.name}</td>
            <td>${category.productCount}</td>
            <td>
                <div class="profit-display">
                    <span class="profit-percent ${getProfitClass(category.profitPercent)}">${category.profitPercent}%</span>
                </div>
            </td>
            <td>
                <button class="btn btn-edit" data-id="${category.id}" data-type="category">
                    <i class="fas fa-edit"></i> Thay đổi
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Hiển thị danh sách sản phẩm
function renderProducts() {
    const tbody = document.querySelector("#productTable tbody");
    tbody.innerHTML = "";

    products.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.code}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${formatCurrency(product.cost)}</td>
            <td>
                <div class="profit-display">
                    <span class="profit-percent ${getProfitClass(product.profitPercent)}">${product.profitPercent}%</span>
                </div>
            </td>
            <td>${formatCurrency(product.price)}</td>
            <td>
                <button class="btn btn-edit" data-id="${product.id}" data-type="product">
                    <i class="fas fa-edit"></i> Thay đổi
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Hiển thị tồn kho hiện tại
function renderCurrentInventory() {
    const tbody = document.querySelector("#currentInventoryTable tbody");
    tbody.innerHTML = "";

    inventoryData.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td class="${getStockClass(item.currentStock, item.minStock)}">${item.currentStock}</td>
            <td>${getStockStatus(item.currentStock, item.minStock)}</td>
            <td>${getStockAlert(item.currentStock, item.minStock)}</td>
        `;
        tbody.appendChild(row);
    });
}

// Hiển thị lịch sử nhập xuất
function renderInventoryHistory() {
    const tbody = document.querySelector("#inventoryHistoryTable tbody");
    tbody.innerHTML = "";

    inventoryHistory.forEach(record => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${record.code}</td>
            <td>${record.name}</td>
            <td>${record.date}</td>
            <td>${record.import}</td>
            <td>${record.export}</td>
            <td>${record.stock}</td>
            <td>${record.type}</td>
        `;
        tbody.appendChild(row);
    });
}

// Mở modal chỉnh sửa
function openEditModal(id, type) {
    const modal = document.getElementById("editProfitModal");
    const modalTitle = document.getElementById("modalTitle");
    const itemLabel = document.getElementById("itemLabel");
    const itemName = document.getElementById("itemName");
    const profitPercent = document.getElementById("profitPercent");
    const newPrice = document.getElementById("newPrice");

    let item, cost;

    if (type === "category") {
        item = categories.find(c => c.id === id);
        modalTitle.textContent = "Chỉnh sửa tỷ lệ lợi nhuận danh mục";
        itemLabel.textContent = "Tên danh mục";
        itemName.value = item.name;
        profitPercent.value = item.profitPercent;
        newPrice.value = "Áp dụng cho tất cả sản phẩm trong danh mục";
    } else {
        item = products.find(p => p.id === id);
        modalTitle.textContent = "Chỉnh sửa tỷ lệ lợi nhuận sản phẩm";
        itemLabel.textContent = "Tên sản phẩm";
        itemName.value = item.name;
        profitPercent.value = item.profitPercent;
        cost = item.cost;
        newPrice.value = formatCurrency(calculatePrice(cost, profitPercent.value));
    }

    // Cập nhật giá bán mới khi thay đổi tỷ lệ lợi nhuận
    profitPercent.addEventListener("input", function () {
        if (type === "product") {
            newPrice.value = formatCurrency(calculatePrice(cost, this.value));
        }
    });

    // Lưu thông tin item đang chỉnh sửa
    modal.dataset.editId = id;
    modal.dataset.editType = type;

    modal.style.display = "flex";
}

// Tính giá bán từ giá vốn và tỷ lệ lợi nhuận
function calculatePrice(cost, profitPercent) {
    return cost * (1 + profitPercent / 100);
}

// Lưu thay đổi tỷ lệ lợi nhuận
function saveProfitChange() {
     const modal = document.getElementById("editProfitModal");
    // const id = parseInt(modal.dataset.editId);
    // const type = modal.dataset.editType;
    // const profitPercent = parseFloat(document.getElementById("profitPercent").value);

    // if (type === "category") {
    //     // Cập nhật danh mục
    //     const category = categories.find(c => c.id === id);
    //     category.profitPercent = profitPercent;

    //     // Cập nhật tất cả sản phẩm trong danh mục
    //     products.forEach(product => {
    //         if (product.category === category.name) {
    //             product.profitPercent = profitPercent;
    //             product.price = calculatePrice(product.cost, profitPercent);
    //         }
    //     });
    // } else {
    //     // Cập nhật sản phẩm
    //     const product = products.find(p => p.id === id);
    //     product.profitPercent = profitPercent;
    //     product.price = calculatePrice(product.cost, profitPercent);
    // }

    // // Cập nhật giao diện
    // renderCategories();
    // renderProducts();

    // Đóng modal
    modal.style.display = "none";
    notification.success('Lưu thành công !');
}

// Khởi tạo sự kiện
document.addEventListener("DOMContentLoaded", function () {
    renderCategories();
    renderProducts();
    renderCurrentInventory();
    renderInventoryHistory();

    // Sự kiện chuyển đổi tab
    document.querySelectorAll('.tab-item').forEach(item => {
        item.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Sự kiện mở modal chỉnh sửa
    document.addEventListener("click", function (e) {
        if (e.target.closest(".btn-edit")) {
            const button = e.target.closest(".btn-edit");
            const id = parseInt(button.dataset.id);
            const type = button.dataset.type;
            openEditModal(id, type);
        }
    });

    // Sự kiện đóng modal
    document.getElementById("closeModal").addEventListener("click", function () {
        document.getElementById("editProfitModal").style.display = "none";
    });

    document.getElementById("cancelEdit").addEventListener("click", function () {
        document.getElementById("editProfitModal").style.display = "none";
    });

    // Sự kiện lưu thay đổi
    document.getElementById("saveProfit").addEventListener("click", saveProfitChange);

    // Đóng modal khi click bên ngoài
    window.addEventListener("click", function (e) {
        const modal = document.getElementById("editProfitModal");
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Đặt ngày mặc định
    const today = new Date().toISOString().split('T')[0];
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const oneWeekAgoStr = oneWeekAgo.toISOString().split('T')[0];

    document.getElementById("startDate").value = oneWeekAgoStr;
    document.getElementById("endDate").value = today;
});