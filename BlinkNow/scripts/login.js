// Wait for DOM to be fully ready
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const loginBtn = document.querySelector(".login");
  const loginOverlay = document.getElementById("loginOverlay");
  const closeLogin = document.getElementById("closeLogin");
  const loginForm = document.getElementById("loginForm");

  // Check if elements exist
  if (!loginBtn || !loginOverlay || !closeLogin || !loginForm) {
    console.error("Login elements not found!");
    return;
  }

  // Add event listeners
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    loginOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  closeLogin.addEventListener("click", function () {
    loginOverlay.style.display = "none";
    document.body.style.overflow = "auto";
  });

  loginOverlay.addEventListener("click", function (e) {
    if (e.target === loginOverlay) {
      loginOverlay.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login functionality would go here!");
    loginOverlay.style.display = "none";
    document.body.style.overflow = "auto";
  });
});
