// Simple interactivity for your static site
document.addEventListener("DOMContentLoaded", function() {
  // Page 1 logic
  const goBtn = document.getElementById("goBtn");
  if (goBtn) {
    goBtn.addEventListener("click", function() {
      window.location.href = "page2.html";
    });
  }

  // Page 2 logic
  const alertBtn = document.getElementById("alertBtn");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeBtn");

  if (alertBtn && modal && closeBtn) {
    // Only show modal when the button is clicked
    alertBtn.addEventListener("click", function() {
      modal.classList.remove("hidden");
    });

    // Hide modal when close button is clicked
    closeBtn.addEventListener("click", function() {
      modal.classList.add("hidden");
    });
  }
});
