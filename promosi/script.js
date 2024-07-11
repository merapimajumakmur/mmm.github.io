// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Function untuk menambahkan animasi fadeOut pada modal saat ditutup
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.animation = "fadeOut 0.3s ease";
  setTimeout(() => {
    modal.style.display = "none";
    modal.style.animation = "";
  }, 300);
}

// Function untuk membuka modal dengan animasi fadeIn
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.style.animation = "fadeIn 0.3s ease";
}

// Function untuk menutup modal ketika mengklik di luar modal
window.onclick = function (event) {
  var modals = document.querySelectorAll(".modal");
  for (var i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      closeModal(modals[i].id);
    }
  }
};

// Function untuk menutup modal ketika mengklik tombol close
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.animation = "fadeOut 0.3s ease";
  setTimeout(() => {
    modal.style.display = "none";
    modal.style.animation = "";
  }, 300);
}

// Function untuk membuka modal dengan animasi fadeIn
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.style.animation = "fadeIn 0.3s ease";
}

// Function to filter cards based on category
function filterCategory(category) {
  var cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    var categoryText = card.querySelector("p").innerText.toLowerCase();
    if (categoryText.includes(category.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Pemanggilan loadCompanyInfo() pada awal halaman
window.onload = function () {
  // Set nilai dropdown select ke PT Merapi Agung Lestari
  document.getElementById("company").value = "company1";
  // Panggil fungsi loadCompanyInfo() untuk memuat informasi perusahaan
  loadCompanyInfo();
  // Panggil fungsi filterCategory() dengan parameter 'spanduk' untuk menampilkan kategori spanduk
  filterCategory("");
};

// Function to load company-specific information
function loadCompanyInfo() {
  var selectedCompany = document.getElementById("company").value;
  var companyGallery = document.getElementById("companyGallery");
  var categoryList = document.getElementById("categoryList");

  // Clear previous content
  companyGallery.innerHTML = "";
  categoryList.innerHTML = "";

  // Dynamically populate cards based on the selected Company
  switch (selectedCompany) {
    case "company1":
      // Add cards and categories all year
      categoryList.innerHTML = `
      <li><a onclick="filterCategory('poster')" style="cursor: pointer">POSTER</a></li>
      <li><a onclick="filterCategory('banner')" style="cursor: pointer">BANNER</a></li>
      <li><a onclick="filterCategory('layar')" style="cursor: pointer">LAYAR ROMBONG</a></li>
      <li><a onclick="filterCategory('parasol')" style="cursor: pointer">PARASOL</a></li>
      <li><a onclick="filterCategory('gasebo')" style="cursor: pointer">GASEBO</a></li>
      <li><a onclick="filterCategory('spanduk')" style="cursor: pointer">SPANDUK</a></li>
      <li><a onclick="filterCategory('umbul')" style="cursor: pointer">UMBUL-UMBUL</a></li>
      <li><a onclick="filterCategory('mobil')" style="cursor: pointer">MOBIL BRANDING</a></li>
        <!-- Add more categories if needed -->
      `;
      // Add cards for all years
      companyGallery.innerHTML = `
        <!-- Cards for all years -->
        <!-- Card 1 -->
        <div class="card" onclick="openModal('myModal1')">
        <img src="/branding/2024 branding parasol nes 1.jpeg" alt="BRANDING PARASOL NES">
        <p>Branding Parasol Neslite</p>
        </div>
        <!-- Card 2 -->
        <div class="card" onclick="openModal('myModal2')">
        <img src="/branding/2024 branding parasol mgmx 1.jpeg" alt="BRANDING PARASOL MGMX">
        <p>Branding Parasol Magnum Max</p>
        </div>
        <!-- Card 3 -->
        <div class="card" onclick="openModal('myModal3')">
        <img src="/branding/2024 branding gasebo nesmax 1.jpeg" alt="GASEBO NESMAX">
        <p>GASEBO NESLITE MAX</p>
        </div>
        <!-- Card 4 -->
        <div class="card" onclick="openModal('myModal4')">
        <img src="/branding/2024 branding layar rombong 1.jpg" alt="BRANDING LR MGMX">
        <p>Layar Rombong / Layar Nama Toko</p>
        </div>
        <!-- Card 5 -->
        <div class="card" onclick="openModal('myModal10')">
        <img src="/branding/2024 branding gasebo Nes Menthol.jpeg" alt="GASEBO NESMTHOL">
        <p>GASEBO NESLITE Menthol</p>
        </div>
        <!-- Card 6 -->
        <div class="card" onclick="openModal('myModal11')">
        <img src="/branding/2024 SPANDUK MUDIK BARENG MMM.jpeg" alt="SPANDUK NESLITE">
        <p>SPANDUK MUDIK BARENG 2024</p>
        </div>
        <!-- Card 7 -->
        <div class="card" onclick="openModal('myModal13')">
        <img src="/branding/2024 SPANDUK SMI PUASA NESLITE 5.jpeg" alt="SPANDUK IDUL FITRI NESLITE">
        <p>SPANDUK IDUL FITRI NESLITE 2024</p>
        </div>
        <!-- Card 8 -->
        <div class="card" onclick="openModal('myModal14')">
        <img src="/branding/2024 SPANDUK SMI PUASA MGMMAX 3.jpeg" alt="SPANDUK IDUL FITRI MAGNUM MAX">
        <p>SPANDUK IDUL FITRI MAGNUM MAX 2024</p>
        </div>

        <!-- Card 9 -->
       <div class="card" onclick="openModal('myModal7')">
       <img src="/branding/2023 umbul nes brand 1.jpeg" alt="UMBUL-UMBUL">
       <p>Branding Umbul-Umbul Neslite X Karang Taruna Kota Bekasi</p>
       </div>
       <!-- Card 10 -->
       <div class="card" onclick="openModal('myModal8')">
       <img src="/branding/2023 umbul mgmx 1.jpg" alt="UMBUL-UMBUL">
       <p>Branding Umbul-Umbul Magnum</p>
       </div>
       <!-- Card 12 -->
       <div class="card" onclick="openModal('myModal9')">
       <img src="/branding/2023 banner nes 1.jpeg" alt="BANNER">
       <p>Branding Gasebo & Banner Neslite</p>
       </div>
       <!-- Card 13 -->
       <div class="card" onclick="openModal('myModal15')">
         <img src="/branding/2018 gasebo nes 1.jpg" alt="GASEBO NESLITE">
         <p>GASEBO NESLITE REGULER</p>
       </div>
       <!-- Card 14 -->
       <div class="card" onclick="openModal('myModal16')">
         <img src="/branding/2013 layar rombong 2.jpg" alt="LAYAR ROMBONG NESLITE">
         <p>LAYAR ROMBONG NESLITE REGULER (nama toko)</p>
       </div>
       <!-- Card 15 -->
       <div class="card" onclick="openModal('myModal17')">
         <img src="/branding/2012 event mobil brand 3.jpg" alt="BRANDING MOBIL NESLITE">
         <p>BRANDING MOBIL NESLITE</p>
       </div>
       <!-- Card 16 -->
       <div class="card" onclick="openModal('myModal18')">
         <img src="/branding/2010 poster nes 4.jpg" alt="POSTER NESLITE">
         <p>POSTER NESLITE MUSIC EDITION</p>
       </div>
                  <!-- Add more cards if needed -->
      `;
      break;

    case "company2":
      // Add cards and categories year 2024
      categoryList.innerHTML = `
      <li><a onclick="filterCategory('parasol')" style="cursor: pointer">PARASOL</a></li>
      <li><a onclick="filterCategory('gasebo')" style="cursor: pointer">GASEBO</a></li>
      <li><a onclick="filterCategory('layar')" style="cursor: pointer">LAYAR ROMBONG</a></li>
      <li><a onclick="filterCategory('spanduk')" style="cursor: pointer">SPANDUK</a></li>
        <!-- Add more categories if needed -->
      `;
      // Add cards for 2024
      companyGallery.innerHTML = `
        <!-- Cards for 2024 -->
        <!-- Card 1 -->
                  <div class="card" onclick="openModal('myModal1')">
                    <img src="/branding/2024 branding parasol nes 1.jpeg" alt="BRANDING PARASOL NES">
                    <p>Branding Parasol Neslite</p>
                  </div>
                  <!-- Card 2 -->
                  <div class="card" onclick="openModal('myModal2')">
                    <img src="/branding/2024 branding parasol mgmx 1.jpeg" alt="BRANDING PARASOL MGMX">
                    <p>Branding Parasol Magnum Max</p>
                  </div>
                  <!-- Card 3 -->
                  <div class="card" onclick="openModal('myModal3')">
                    <img src="/branding/2024 branding gasebo nesmax 1.jpeg" alt="GASEBO NESMAX">
                    <p>GASEBO NESLITE MAX</p>
                  </div>
                  <!-- Card 4 -->
                  <div class="card" onclick="openModal('myModal4')">
                    <img src="/branding/2024 branding layar rombong 1.jpg" alt="BRANDING LR ROMBONG">
                    <p>Layar Rombong / Layar Nama Toko</p>
                  </div>
                  <!-- Card 5 -->
                  <div class="card" onclick="openModal('myModal10')">
                    <img src="/branding/2024 branding gasebo Nes Menthol.jpeg" alt="GASEBO NESMTHOL">
                    <p>GASEBO NESLITE Menthol</p>
                  </div>
                  <!-- Card 6 -->
                  <div class="card" onclick="openModal('myModal11')">
                    <img src="/branding/2024 SPANDUK MUDIK BARENG MMM.jpeg" alt="SPANDUK NESLITE">
                    <p>SPANDUK MUDIK BARENG 2024</p>
                  </div>
                  <!-- Card 7 -->
                  <div class="card" onclick="openModal('myModal13')">
                    <img src="/branding/2024 SPANDUK SMI PUASA NESLITE 5.jpeg" alt="SPANDUK IDUL FITRI NESLITE">
                    <p>SPANDUK IDUL FITRI NESLITE 2024</p>
                  </div>
                  <!-- Card 8 -->
                  <div class="card" onclick="openModal('myModal14')">
                    <img src="/branding/2024 SPANDUK SMI PUASA MGMMAX 3.jpeg" alt="SPANDUK IDUL FITRI MAGNUM MAX">
                    <p>SPANDUK IDUL FITRI MAGNUM MAX 2024</p>
                  </div>
                  <!-- Add more cards if needed -->
      `;
      break;

    case "company3":
      // Add cards and categories 2023
      categoryList.innerHTML = `
       <!-- Categories year 2023 -->
       <li><a onclick="filterCategory('gasebo')" style="cursor: pointer">GASEBO</a></li>
       <li><a onclick="filterCategory('spanduk')" style="cursor: pointer">SPANDUK</a></li>
       <li><a onclick="filterCategory('umbul')" style="cursor: pointer">UMBUL-UMBUL</a></li>
       <li><a onclick="filterCategory('banner')" style="cursor: pointer">BANNER</a></li>

       <!-- Add more categories if needed -->
     `;
      // Add cards for 2023
      companyGallery.innerHTML = `
       <!-- Cards for 2023 -->
       <!-- Card 1 -->
       <div class="card" onclick="openModal('myModal5')">
       <img src="/branding/2023 gasebo nes 1.jpeg" alt="GASEBO NES">
       <p>Branding Gasebo Neslite</p>
       </div>
       <!-- Card 2 -->
       <div class="card" onclick="openModal('myModal6')">
       <img src="/branding/2023 spanduk nes 1.jpg" alt="SPANDUK">
       <p>Branding Spanduk Neslite</p>
       </div>
       <!-- Card 3 -->
       <div class="card" onclick="openModal('myModal7')">
       <img src="/branding/2023 umbul nes brand 1.jpeg" alt="UMBUL-UMBUL">
       <p>Branding Umbul-Umbul Neslite X Karang Taruna Kota Bekasi</p>
       </div>
       <!-- Card 4 -->
       <div class="card" onclick="openModal('myModal8')">
       <img src="/branding/2023 umbul mgmx 1.jpg" alt="UMBUL-UMBUL">
       <p>Branding Umbul-Umbul Magnum</p>
       </div>
       <!-- Card 5 -->
       <div class="card" onclick="openModal('myModal9')">
       <img src="/branding/2023 banner nes 1.jpeg" alt="BANNER">
       <p>Branding Gasebo & Banner Neslite</p>
       </div>
       <!-- Add more cards if needed -->
     `;
      break;

    case "company4":
      // Add cards and categories 2018
      categoryList.innerHTML = `
      <!-- Categories year 2023 -->
        <li><a onclick="filterCategory('asbak')" style="cursor: pointer">ASBAK</a></li>
      `;
      // Add cards 2018
      companyGallery.innerHTML = `
      <!-- Categories year 2012 -->
        <!-- Card 1 -->
        <div class="card" onclick="openModal('myModal40')">
        <img src="/img_mc/ASBAK 72 4.jpg" alt="ASBAK 72">
        <p>ASBAK TUJUH DUA</p>
        </div>
        <!-- Add more cards if needed -->
      `;
      break;

    default:
      break;
  }
}

// Function to filter cards based on category
function filterCategory(category) {
  var cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    var categoryText = card.querySelector("p").innerText.toLowerCase();
    if (categoryText.includes(category.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Pemanggilan loadCompanyInfo() pada awal halaman
window.onload = function () {
  loadCompanyInfo();
};

// LOADING PAGE
document.onreadystatechange = function () {
  var loader = document.getElementById("loader");
  if (document.readyState !== "complete") {
    loader.style.display = "block";
  } else {
    loader.style.display = "none";
  }
};
