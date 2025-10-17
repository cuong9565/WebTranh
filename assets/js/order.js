
// Hàm mở modal chi tiết đơn hàng
function openOrderDetail(orderId) {
    document.getElementById('orderId').textContent = orderId;
    document.getElementById('detailOrderId').textContent = orderId;
    document.getElementById('orderDetailModal').style.display = 'flex';
}

// Hàm đóng modal chi tiết đơn hàng
function closeOrderDetail() {
    document.getElementById('orderDetailModal').style.display = 'none';
}

// Hàm mở modal cập nhật trạng thái
function openStatusUpdate(orderId) {
    document.getElementById('updateOrderId').textContent = orderId;
    document.getElementById('statusUpdateModal').style.display = 'flex';
}

// Hàm đóng modal cập nhật trạng thái
function closeStatusUpdate() {
    document.getElementById('statusUpdateModal').style.display = 'none';
}

// Hàm cập nhật trạng thái đơn hàng
function updateOrderStatus() {
    const orderId = document.getElementById('updateOrderId').textContent;
    const newStatus = document.getElementById('newStatus').value;
    const notes = document.getElementById('statusNotes').value;
    notification.success('Đã cập nhật trạng thái đơn hàng!');

    closeStatusUpdate();
}

// Đóng modal khi click bên ngoài
window.onclick = function (event) {
    const orderDetailModal = document.getElementById('orderDetailModal');
    const statusUpdateModal = document.getElementById('statusUpdateModal');

    if (event.target === orderDetailModal) {
        closeOrderDetail();
    }
    if (event.target === statusUpdateModal) {
        closeStatusUpdate();
    }
}

// Đặt ngày mặc định
document.addEventListener('DOMContentLoaded', function () {
    const today = new Date().toISOString().split('T')[0];
    const firstDay = new Date();
    firstDay.setDate(1);
    const firstDayStr = firstDay.toISOString().split('T')[0];

    document.getElementById('startDate').value = firstDayStr;
    document.getElementById('endDate').value = today;
});
