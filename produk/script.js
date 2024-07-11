const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    navbar.classList.add("scrolled");
    // Ubah warna teks navbar saat di-scroll
    navLinks.forEach((link) => (link.style.color = "#fff"));
  } else {
    navbar.classList.remove("scrolled");
    // Kembalikan warna teks navbar saat di awal
    navLinks.forEach((link) => (link.style.color = "#000"));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const arrowContainer = document.querySelector(".arrow-container");

  arrowContainer.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navbarToggler = document.querySelector(".navbar-toggler");

  // Tambahkan event listener ke elemen document
  document.addEventListener("click", function (event) {
    // Periksa apakah yang diklik bukan bagian dari menu navigasi atau tombol toggler
    const isClickInsideNavbar = navbarCollapse.contains(event.target);
    const isClickNavbarToggler = navbarToggler.contains(event.target);

    // Tutup menu navigasi jika yang diklik berada di luar menu atau bukan tombol toggler
    if (!isClickInsideNavbar && !isClickNavbarToggler) {
      navbarCollapse.classList.remove("show");
    }
  });
});

// LOADING PAGE
document.onreadystatechange = function () {
  var loader = document.getElementById("loader");
  if (document.readyState !== "complete") {
    loader.style.display = "block";
  } else {
    loader.style.display = "none";
  }
};

$(document).ready(function () {
  $(".slide").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $(".nav-arrow.prev"),
    nextArrow: $(".nav-arrow.next"),
  });
});
