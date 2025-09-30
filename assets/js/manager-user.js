document.addEventListener('DOMContentLoaded', function () {
    // Mở modal chỉnh sửa tài khoản
    document.querySelectorAll('.btn-edit').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            var modal = document.getElementById('modalEditUser');
            modal.classList.add('active');
        });
    });
    // Đóng modal 
    document.getElementById('closeModalEdit').addEventListener('click', function () {
        document.getElementById('modalEditUser').classList.remove('active');
    });
    document.getElementById('cancelEditUser').addEventListener('click', function () {
        document.getElementById('modalEditUser').classList.remove('active');
    });
    document.getElementById('saveButton').addEventListener('click', (e) => {
        document.getElementById('modalEditUser').classList.remove('active');
        alert('Cập nhật thành công !');
    })
    // Đóng modal khi click ra ngoài
    window.addEventListener('click', function (e) {
        const modal = document.getElementById('modalEditUser');
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Xem/ẩn mật khẩu
    const addPasswordInput = document.getElementById('addUserPassword');
    const toggleAddPasswordSpan = document.getElementById('toggleAddPassword');
    toggleAddPasswordSpan.addEventListener('click', function () {
        if (addPasswordInput.type === 'password') {
            addPasswordInput.type = 'text';
            toggleAddPasswordSpan.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
        } else {
            addPasswordInput.type = 'password';
            toggleAddPasswordSpan.innerHTML = '<i class="fa-regular fa-eye"></i>';
        }
    });

    const editPasswordInput = document.getElementById('editUserPassword');
    const togglePasswordSpan = document.getElementById('togglePassword');
    togglePasswordSpan.addEventListener('click', function () {
        if (editPasswordInput.type === 'password') {
            editPasswordInput.type = 'text';
            togglePasswordSpan.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
        } else {
            editPasswordInput.type = 'password';
            togglePasswordSpan.innerHTML = '<i class="fa-regular fa-eye"></i>';
        }
    });

    const btnAdd = document.getElementById('openModalAddUser');
    const ModalAdd = document.getElementById('modalAddUser');
    btnAdd.addEventListener('click', (e) => {
        ModalAdd.classList.add('active');
    })
    // Đóng modal 
    document.getElementById('closeModalEditUser').addEventListener('click', function () {
        ModalAdd.classList.remove('active');
    });
    document.getElementById('cancelAddUser').addEventListener('click', function () {
        ModalAdd.classList.remove('active');
    });
    document.getElementById('ButtonAddUser').addEventListener('click', (e) => {
        ModalAdd.classList.remove('active');
        alert('Thêm thành công !');
    })
    // Đóng modal khi click ra ngoài
    window.addEventListener('click', function (e) {
        const modal = document.getElementById('modalEditUser');
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});