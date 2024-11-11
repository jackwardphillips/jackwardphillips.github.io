function openModal(image) {
    // Get the modal and show it
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const modalCaption = document.getElementById("modalCaption");

    modal.style.display = "flex";
    fullImage.src = image.src; // Set full image source
    modalCaption.textContent = image.alt; // Set caption from alt text
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
