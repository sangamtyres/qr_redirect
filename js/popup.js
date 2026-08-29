const brandNames = {
  roots: "Roots Auto",
  savsol: "Savsol Ester 5",
  valvoline: "Valvoline",
};

function showPopup(brand) {
  const modal = document.getElementById("popupModal");
  const message = document.getElementById("modalMessage");

  const brandLabel = brandNames[brand] || "Partner";

  message.textContent = `The scanner application for ${brandLabel} is not available on this device (Error: QR-SANGAM-404). Please install the official app from your app store to proceed.`;

  // Use "flex" to preserve CSS flexbox centering
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closePopup() {
  const modal = document.getElementById("popupModal");
  if (!modal) return;

  modal.style.display = "none";
  document.body.style.overflow = ""; // Restore background scrolling
}

// Close when clicking outside the dialog card
window.addEventListener("click", function (event) {
  const modal = document.getElementById("popupModal");
  if (event.target === modal) {
    closePopup();
  }
});

// Close with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup();
  }
});