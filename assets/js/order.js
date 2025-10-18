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

// Hàm mở popup cập nhật trạng thái
function openStatusPopup(orderId, button) {
    const popup = document.getElementById('statusUpdatePopup');
    const rect = button.getBoundingClientRect();
    popup.style.top = `${rect.bottom + window.scrollY}px`;
    popup.style.left = `${rect.left + window.scrollX}px`;
    popup.style.display = 'block';
    popup.dataset.orderId = orderId;
}

// Hàm đóng popup cập nhật trạng thái
function closeStatusPopup() {
    const popup = document.getElementById('statusUpdatePopup');
    popup.style.display = 'none';
}

// Hàm lưu trạng thái cập nhật
function saveStatusUpdate() {
    const popup = document.getElementById('statusUpdatePopup');
    const orderId = popup.dataset.orderId;
    const newStatus = document.getElementById('popupNewStatus').value;
    closeStatusPopup();
    notification.success(`Trạng thái đơn hàng #${orderId} đã được cập nhật!`);
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
