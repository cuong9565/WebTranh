
document.querySelector('.btn-excel-import').addEventListener('click', function (e) {
    var fileInput = document.getElementById('excelFileInput');
    if (fileInput) fileInput.click();
});
// Modal Add
const openModalAddBtn = document.getElementById('openModalAddProduct');
const modalAdd = document.getElementById('modalAddProduct');
const closeModalAddBtn = document.getElementById('closeModalAddProduct');
const cancelModalAddBtn = document.getElementById('cancelModalAddProduct');
const closeConfirm = document.getElementById('closeModalDeleteProduct');
const productImageInput = document.getElementById('productImage');
const imagePreview = document.getElementById('imagePreview');
const addProductForm = document.getElementById('addProductForm');
const confirmModalAdd = document.getElementById('confirmModalAddProduct');
const confirmModalEdit = document.getElementById('confirmModalEditProduct');

openModalAddBtn.addEventListener('click', () => {
    modalAdd.classList.add('active');
});
confirmModalAdd.addEventListener('click', () => {
    notification.success("Thêm sản phẩm thành công !");
    modalAdd.classList.toggle('active');
});

confirmModalEdit.addEventListener('click', () => {
     notification.success("Sửa sản phẩm thành công !");
    modalEdit.classList.toggle('active');
});

closeModalAddBtn.addEventListener('click', () => {
    modalAdd.classList.remove('active');
    addProductForm.reset();
    imagePreview.innerHTML = 'Chưa tải ảnh lên';
    imagePreview.style.backgroundImage = 'none';
});
cancelModalAddBtn.addEventListener('click', () => {
    modalAdd.classList.remove('active');
    addProductForm.reset();
    imagePreview.innerHTML = 'Chưa tải ảnh lên';
    imagePreview.style.backgroundImage = 'none';
});
modalAdd.addEventListener('click', (e) => {
    if (e.target === modalAdd) {
        modalAdd.classList.remove('active');
        addProductForm.reset();
        imagePreview.innerHTML = 'Chưa tải ảnh lên';
        imagePreview.style.backgroundImage = 'none';
    }
});
productImageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            imagePreview.innerHTML = '';
            const img = document.createElement('img');
            img.src = reader.result;
            imagePreview.appendChild(img);
        });
        reader.readAsDataURL(file);
    }
});

// Modal Edit
const modalEdit = document.getElementById('modalEditProduct');
const closeModalEditBtn = modalEdit.querySelector('.modal-close');
const cancelModalEditBtn = document.getElementById('cancelModalEditProduct');
const editProductForm = document.getElementById('editProductForm');
const editImagePreview = modalEdit.querySelector('.image-preview');
// Add file input for edit modal
let editImageInput = modalEdit.querySelector('#editProductImage');
if (!editImageInput) {
    editImageInput = document.createElement('input');
    editImageInput.type = 'file';
    editImageInput.id = 'editProductImage';
    editImageInput.accept = 'image/*';
    editImageInput.style.display = 'none';
    editImagePreview.parentNode.appendChild(editImageInput);
}
// Add upload button if missing
if (!modalEdit.querySelector('.btn-upload-image')) {
    const uploadBtn = document.createElement('button');
    uploadBtn.type = 'button';
    uploadBtn.className = 'btn-upload-image';
    uploadBtn.innerHTML = '<i class="fa-solid fa-upload"></i> Đổi hình ảnh';
    uploadBtn.onclick = function () {
        editImageInput.click();
    };
    editImagePreview.parentNode.insertBefore(uploadBtn, editImageInput);
}
// Image change logic for edit modal
editImageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            editImagePreview.innerHTML = '';
            const img = document.createElement('img');
            img.src = reader.result;
            img.style.width = '180px';
            img.style.height = '180px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '12px';
            img.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
            editImagePreview.appendChild(img);
        });
        reader.readAsDataURL(file);
    }
});
// Open Edit Modal (for all edit buttons)
document.querySelectorAll('.btn-edit').forEach(function (btn) {
    btn.addEventListener('click', function () {
        modalEdit.classList.add('active');
    });
});
// Close Edit Modal
closeModalEditBtn.addEventListener('click', function () {
    modalEdit.classList.remove('active');
    editProductForm.reset();
    editImagePreview.innerHTML = '<img src="../assets/img/logo.png" alt="Hình ảnh tranh" style="width:180px;height:180px;object-fit:cover;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">';
});
cancelModalEditBtn.addEventListener('click', function () {
    modalEdit.classList.remove('active');
    editProductForm.reset();
    editImagePreview.innerHTML = '<img src="../assets/img/logo.png" alt="Hình ảnh tranh" style="width:180px;height:180px;object-fit:cover;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">';
});
modalEdit.addEventListener('click', function (e) {
    if (e.target === modalEdit) {
        modalEdit.classList.remove('active');
        editProductForm.reset();
        editImagePreview.innerHTML = '<img src="../assets/img/logo.png" alt="Hình ảnh tranh" style="width:180px;height:180px;object-fit:cover;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">';
    }
});

// Modal Delete
const modalDelete = document.getElementById('modalDeleteProduct');
const confirmDeleteBtn = document.getElementById('confirmDeleteProduct');
const cancelDeleteBtn = document.getElementById('cancelDeleteProduct');
document.querySelectorAll('.btn-delete').forEach(function (btn) {
    btn.addEventListener('click', function () {
        modalDelete.classList.add('active');
    });
});
confirmDeleteBtn.addEventListener('click', function () {
   notification.info("Xóa sản phẩm thành công !");
    modalDelete.classList.remove('active');
});
cancelDeleteBtn.addEventListener('click', function () {
    modalDelete.classList.remove('active');
});
closeConfirm.addEventListener('click', function () {
    modalDelete.classList.remove('active');
});
modalDelete.addEventListener('click', function (e) {
    if (e.target === modalDelete) {
        modalDelete.classList.remove('active');
    }
});