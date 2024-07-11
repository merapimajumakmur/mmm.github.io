document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Reset error message
  errorMessage.textContent = "";

  // Simulasi proses login
  if (username === "ptmerapimajumakmur" && password === "suksestanpabatas") {
    alert("Login berhasil!");
    // Redirect ke halaman dashboard atau halaman lain
    window.location.href = "/kontak/app.html";
  } else {
    errorMessage.textContent = "Username atau password salah";
  }
});

document.querySelector(".toggle-password").addEventListener("click", function () {
  const passwordField = document.getElementById("password");
  const passwordIcon = this.querySelector("i");

  // Toggle the type attribute
  if (passwordField.type === "password") {
    passwordField.type = "text";
    passwordIcon.classList.remove("fa-eye");
    passwordIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    passwordIcon.classList.remove("fa-eye-slash");
    passwordIcon.classList.add("fa-eye");
  }
});
