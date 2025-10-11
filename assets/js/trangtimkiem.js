// Lưu giá trị input
document.getElementById('searchInput').addEventListener('input', function() {
    sessionStorage.setItem('searchValue', this.value);
});

// Khi load trang
window.addEventListener('load', function() {
    const val = sessionStorage.getItem('searchValue');
    if(val) document.getElementById('searchInput').value = val;
});
