const ModalAdd = document.getElementById('modalAddCategory');
const ModalEdit = document.getElementById('modalEditCategory');

// Button events
const openModalAdd = document.getElementById('openModalAdd');
const openModalEdit = document.querySelector('.btn-edit'); 
const btnConfirm = document.querySelectorAll(".btn-confirm"); // trả về list 
const closeModalAdd = document.getElementById('closeModalAddCategory');
const closeModalEdit = document.getElementById('closeModalEditCategory');
const cancelAddCategory = document.getElementById('cancelAddCategory');
const cancelEditCategory = document.getElementById('cancelEditCategory');
const formAddCategory = document.getElementById('formAddCategory');
const formEditCategory = document.getElementById('formEditCategory');

// Mở modal thêm danh mục
openModalAdd.addEventListener('click', (e) => {
    e.preventDefault();
    ModalAdd.classList.add('active');
    resetAddForm();
});

// Mở modal sửa danh mục
document.addEventListener('DOMContentLoaded', function() {
     const tbody = document.querySelector('.art-table tbody');
     tbody.addEventListener('click', function(e) {
          const editBtn = e.target.closest('.btn-edit');
          if (editBtn) {
                e.preventDefault();
                const row = editBtn.closest('tr');
                const categoryId = row.cells[0].textContent;
                const categoryName = row.cells[1].textContent;
                const categoryStatus = row.cells[2].querySelector('span').textContent;
                fillEditForm(categoryId, categoryName, categoryStatus);
                ModalEdit.classList.add('active');
          }
     });
});

// Đóng modal thêm 
closeModalAdd.addEventListener('click', function() {
    ModalAdd.classList.remove('active');
});

cancelAddCategory.addEventListener('click', function() {
    ModalAdd.classList.remove('active');
});

btnConfirm.forEach(btn => {
    btn.addEventListener('click', function(e) {
     ModalAdd.classList.remove('active');
       notification.success("Lưu danh mục thành công !")
    });
});

// Đóng modal sửa 
closeModalEdit.addEventListener('click', function() {
    ModalEdit.classList.remove('active');
});

cancelEditCategory.addEventListener('click', function() {
    ModalEdit.classList.remove('active');
});

// Đóng modal khi click bên ngoài
window.addEventListener('click', (e) => {
    if (e.target === ModalAdd) {
        ModalAdd.classList.remove('active');
    }
    if (e.target === ModalEdit) {
        ModalEdit.classList.remove('active');
    }
});

// Xử lý form thêm danh mục 
formAddCategory.addEventListener('submit', (e) => {
    e.preventDefault();
    const categoryId = document.getElementById('addCategoryId').value;
    const categoryName = document.getElementById('addCategoryName').value;
    const categoryStatus = document.getElementById('addCategoryStatus').value;
    
    // Thêm danh mục mới vào bảng
    addCategoryToTable(categoryId, categoryName, categoryStatus);
    
    // Đóng modal và reset form
    ModalAdd.classList.remove('active');
    resetAddForm();
});

// Xử lý form sửa danh mục - SỬA: đổi từ 'click' thành 'submit'
formEditCategory.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const categoryId = document.getElementById('editCategoryId').value;
    const categoryName = document.getElementById('editCategoryName').value;
    const categoryStatus = document.getElementById('editCategoryStatus').value;
    
    // Cập nhật thông tin trong bảng
    updateCategoryInTable(categoryId, categoryName, categoryStatus);
    ModalEdit.classList.remove('active');
});

// Hàm điền thông tin vào form sửa
function fillEditForm(id, name, status) {
    document.getElementById('editCategoryId').value = id;
    document.getElementById('editCategoryName').value = name;
    document.getElementById('editCategoryStatus').value = status;
}

// Hàm reset form thêm
function resetAddForm() {
    document.getElementById('addCategoryId').value = '';
    document.getElementById('addCategoryName').value = '';
    document.getElementById('addCategoryStatus').value = 'Hoạt động';
}

function addCategoryToTable(categoryId, categoryName, categoryStatus) {
    const tbody = document.querySelector('.art-table tbody');
    const newRow = document.createElement('tr');
    
    const statusClass = categoryStatus === 'Hoạt động' ? 'status-selling' : 'status-selling block';
    
    newRow.innerHTML = `
        <td>${categoryId}</td>
        <td>${categoryName}</td>
        <td><span class="${statusClass}">${categoryStatus}</span></td>
        <td>
            <button class="btn-edit"><i class="fa-solid fa-pen"></i></button>
            <div class="btn-view-wrap" style="display:inline-block;position:relative;">
                <button class="btn-view"><i class="fa-solid fa-eye"></i> Xem sản phẩm</button>
                <div class="mini-product-list"></div>
            </div>
        </td>
    `;
    
    tbody.appendChild(newRow);
}

function updateCategoryInTable(categoryId, categoryName, categoryStatus) {
    const rows = document.querySelectorAll('.art-table tbody tr');
    for (let row of rows) {
        if (row.cells[0].textContent.trim() === categoryId) {
            row.cells[1].textContent = categoryName;
            
            const statusSpan = row.cells[2].querySelector('span');
            statusSpan.textContent = categoryStatus;
            statusSpan.className = categoryStatus === 'Hoạt động' ? 'status-selling' : 'status-selling block';
            break;
        }
    }
}