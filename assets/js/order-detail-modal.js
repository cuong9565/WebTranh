const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const imageClose = document.getElementsByClassName("image-close")[0];


document.querySelectorAll(".product-item img").forEach(img => {
    img.addEventListener("click", function() {
        imageModal.style.display = "block";
        modalImg.src = this.src;
    });
});

function openOrderDetail() {
  const modal = document.getElementById("orderDetailModal");
  modal.classList.add("show");
  modal.classList.remove("hidden");
}

function closeOrderDetail() {
  const modal = document.getElementById("orderDetailModal");
  modal.classList.remove("show");
  modal.classList.add("hidden");
}

imageClose.onclick = function() {
    imageModal.style.display = "none";
}

imageModal.onclick = function(e) {
    if(e.target == this){
        imageModal.style.display = "none";
    }
}

