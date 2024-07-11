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

// Fungsi untuk menampilkan konten berdasarkan event ID
// Default event ID
var defaultEventId = "event0";

// Fungsi untuk menampilkan konten berdasarkan event ID
function showEventContent(eventId) {
  // Sembunyikan semua konten
  var allImageContainers = document.querySelectorAll(".image-container");
  allImageContainers.forEach(function (container) {
    container.style.display = "none";
  });

  // Tampilkan konten sesuai dengan event ID
  var selectedContainer = document.getElementById(eventId);
  if (selectedContainer) {
    selectedContainer.style.display = "block";
  }
}

// Inisialisasi, tampilkan konten default saat halaman dimuat
showEventContent(defaultEventId);

// Tambahkan event listener untuk setiap sub-judul
var subtitles = document.querySelectorAll(".gallery-sidebar li");
subtitles.forEach(function (subtitle) {
  subtitle.addEventListener("click", function () {
    var eventId = subtitle.getAttribute("onclick").split("'")[1];
    showEventContent(eventId);
  });
});

// Dummy data for events
const eventsData = {
  2040: [
    {
      title: "Takjil on the Road bersama MAKO BRIMOB Cipanas",
      date: "April 2024",
      description:
        "PT 3M wilayah Bogor bersama Satuan Mako Brimob Cipanas, berkolaborasi dalam program pembagian takjil kepada masyarakat sekitar sebagai wujud menjalin silaturahmi terutama di lingkungan sekitar wilayah satuan Brimob Cipanas.",
      images: [
        "/img sosial/2024 TOTR MACO BRIMOB CIPANAS 2.jpg",
        "/img sosial/2024 TOTR MACO BRIMOB CIPANAS 1.jpg",
        "/img sosial/2024 TOTR MACO BRIMOB CIPANAS 3.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Takjil on the Road",
      date: "April 2024",
      description: "Kami, berempati dan turut berpartisipasi setiap tahunnya saat Bulan Ramadhan, dalam program pembagian takjil kepada masyarakat sekitar sebagai wujud menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet kita",
      images: [
        "/img sosial/2024 TOTR 3.jpg",
        "/img sosial/2024 TOTR 1.jpg",
        "/img sosial/2024 TOTR 2.jpg",
        "/img sosial/2024 TOTR 5.jpg",
        "/img sosial/2024 TOTR 6.jpg",
        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Paket Sembako Ramadhan Berkah",
      date: "April 2024",
      description:
        "Dalam mengawali Bulan Suci Ramadan, Sebagai bentuk apresiasi atas dedikasi dan kerja keras, PT Merapi Maju Makmur membagikan paket sembako kepada seluruh karyawan sebagai bekal berpuasa. Semoga sembako ini dapat memberikan dukungan selama menjalankan ibadah puasa.",
      images: [
        "/img sosial/2024 PAKET SEMBAKO KARYAWAN 1.jpg",
        "/img sosial/2024 PAKET SEMBAKO KARYAWAN 2.jpg",
        "/img sosial/2024 PAKET SEMBAKO KARYAWAN 3.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Spanduk Puasa & Idul Fitri 1445 H",
      date: "Maret 2024",
      description: "Kami, berempati dan turut berpartisipasi setiap tahunnya saat Bulan Ramadhan, dan menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet. Kini Kami hadir dengan memaparkan 2 model Spanduk Idul Fitri",
      images: [
        "/img sosial/2024 SPANDUK IDUL FITRI MMM.jpg",
        "/img sosial/2024 SPANDUK IDUL FITRI MMM 1.jpg",
        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Branding HUT NKRI - Ke 78",
      date: "Agustus 2023",
      description: "Kami, dengan penuh rasa cinta terhadap tanah air NKRI, merayakan HUT yang ke-78 dengan menjalin dan mempererat silaturahmi secara serentak dengan lingkungan setempat",
      images: [
        "/img sosial/2023 SPANDUK HUT RI KE-78 1.jpg",
        "/img sosial/2023 SPANDUK HUT RI KE-78 2.jpg",
        "/img sosial/2023 SPANDUK HUT RI KE-78 3.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Spanduk Puasa & Idul Fitri 1442 H",
      date: "2021",
      description: "Kami, berempati dan turut berpartisipasi dalam Bulan Ramadhan, dan menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet kita selama era pandemi",
      images: [
        "/img sosial/2021 SPANDUK PUASA 1.jpg",
        "/img sosial/2021 SPANDUK PUASA 2.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Takjil on the Road",
      date: "2021",
      description: "Kami, turut serta dalam pembagian takjil kepada masyarakat sekitar sebagai wujud menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet kita selama era pandemi",
      images: [
        "/img sosial/2021 TOTR 1.jpg",
        "/img sosial/2021 TOTR 2.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Realisasi Resepsi Pernikahan Warga Cirebon",
      date: "September 2019",
      description: "Kami, dengan bangga ikut serta dalam program pemberdayaan masyarakat, terutama melalui dukungan pada acara resepsi pernikahan warga",
      images: [
        "/img sosial/2019 REALISASI HAJATAN CIREBON 1.jpg",
        "/img sosial/2019 REALISASI HAJATAN CIREBON 2.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Program Solidaritas Paket Beras",
      date: "2012",
      description: "Kami, dengan bangga ikut serta dalam program pemberdayaan masyarakat, terutama melalui dukungan pada pemberian bantuan berupa beras kepada panti asuhan, masjid, dan gereja di sekitar lingkungan kantor dan outlet ",
      images: [
        "/img sosial/2012 SOLIDARITAS PAKET BERAS 3.jpg",
        "/img sosial/2012 SOLIDARITAS PAKET BERAS 2.jpg",
        "/img sosial/2012 SOLIDARITAS PAKET BERAS 1.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Program Pemberian Kurma Kepada Toko Prioritas",
      date: "2012",
      description: "Kami, dengan bangga ikut serta dalam program pemberian paket kurma untuk toko berbintang karena telah menjadi mitra yang signifikan dalam meningkatkan angka penjualan produk kami",
      images: [
        "/img sosial/2012 PROGRAM KURMA UNTUK TOKO 2.jpg",
        "/img sosial/2012 PROGRAM KURMA UNTUK TOKO 1.jpg",
        "/img sosial/2012 PROGRAM KURMA UNTUK TOKO 3.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Spanduk Puasa & Idul Fitri 1432 H",
      date: "2011",
      description: "Kami, berempati dan turut berpartisipasi dalam Bulan Ramadhan, dan menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet",
      images: [
        "/img sosial/2011 SPANDUK PUASA 1.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Spanduk Idul Fitri 1431 H",
      date: "2010",
      description: "Kami, berempati dan turut berpartisipasi dalam menyambut Idul Fitri 1431 H, dan menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet",
      images: [
        "/img sosial/LL 2010.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Spanduk menyambut bulan Puasa ",
      date: "2010",
      description: "Kami, berempati dan turut berpartisipasi menyambut bulan puasa, dan menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet",
      images: [
        "/img sosial/2010 SPANDUK PUASA 1.jpg",
        "/img sosial/2010 SPANDUK PUASA 2.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
  ],
  2024: [
    {
      title: "Takjil on the Road bersama MAKO BRIMOB CIPANAS",
      date: "April 2024",
      description:
        "PT 3M wilayah Bogor bersama Satuan Mako Brimob Cipanas, berkolaborasi dalam program pembagian takjil kepada masyarakat sekitar sebagai wujud menjalin silaturahmi terutama di lingkungan sekitar wilayah satuan Brimob Cipanas.",
      images: [
        "/img sosial/2024 TOTR MACO BRIMOB CIPANAS 2.jpg",
        "/img sosial/2024 TOTR MACO BRIMOB CIPANAS 1.jpg",
        "/img sosial/2024 TOTR MACO BRIMOB CIPANAS 3.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Takjil on the Road",
      date: "April 2024",
      description: "Kami, berempati dan turut berpartisipasi setiap tahunnya saat Bulan Ramadhan, dalam program pembagian takjil kepada masyarakat sekitar sebagai wujud menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet kita",
      images: [
        "/img sosial/2024 TOTR 3.jpg",
        "/img sosial/2024 TOTR 1.jpg",
        "/img sosial/2024 TOTR 2.jpg",
        "/img sosial/2024 TOTR 4.jpg",
        "/img sosial/2024 TOTR 5.jpg",
        "/img sosial/2024 TOTR 6.jpg",
        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Paket Sembako Ramadhan Berkah",
      date: "April 2024",
      description:
        "Dalam mengawali Bulan Suci Ramadan, Sebagai bentuk apresiasi atas dedikasi dan kerja keras, PT Merapi Maju Makmur membagikan paket sembako kepada seluruh karyawan sebagai bekal berpuasa. Semoga sembako ini dapat memberikan dukungan selama menjalankan ibadah puasa.",
      images: [
        "/img sosial/2024 PAKET SEMBAKO KARYAWAN 1.jpg",
        "/img sosial/2024 PAKET SEMBAKO KARYAWAN 2.jpg",
        "/img sosial/2024 PAKET SEMBAKO KARYAWAN 3.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Spanduk Puasa & Idul Fitri 1445 H",
      date: "Maret 2024",
      description: "Kami, berempati dan turut berpartisipasi setiap tahunnya saat Bulan Ramadhan, dan menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet. Kini Kami hadir dengan memaparkan 2 model Spanduk Idul Fitri",
      images: [
        "/img sosial/2024 SPANDUK IDUL FITRI MMM.jpg",
        "/img sosial/2024 SPANDUK IDUL FITRI MMM 1.jpg",
        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
  ],
  2023: [
    {
      title: "Branding HUT NKRI - Ke 78",
      date: "17 Agustus 2023",
      description: "Kami, dengan penuh rasa cinta terhadap tanah air NKRI, merayakan HUT yang ke-78 dengan menjalin dan mempererat silaturahmi secara serentak dengan lingkungan setempat",
      images: [
        "/img sosial/2023 SPANDUK HUT RI KE-78 1.jpg",
        "/img sosial/2023 SPANDUK HUT RI KE-78 2.jpg",
        "/img sosial/2023 SPANDUK HUT RI KE-78 3.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
  ],
  2021: [
    {
      title: "Spanduk Puasa & Idul Fitri 1442 H",
      date: "2021",
      description: "Kami, berempati dan turut berpartisipasi dalam Bulan Ramadhan, dan menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet kita selama era pandemi",
      images: [
        "/img sosial/2021 SPANDUK PUASA 1.jpg",
        "/img sosial/2021 SPANDUK PUASA 2.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Takjil on the Road",
      date: "2021",
      description: "Kami, turut serta dalam pembagian takjil kepada masyarakat sekitar sebagai wujud menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet kita selama era pandemi",
      images: [
        "/img sosial/2021 TOTR 1.jpg",
        "/img sosial/2021 TOTR 2.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
  ],
  2019: [
    {
      title: "Realisasi Resepsi Pernikahan Warga Cirebon",
      date: "September 2019",
      description: "Kami, dengan bangga ikut serta dalam program pemberdayaan masyarakat, terutama melalui dukungan pada acara resepsi pernikahan warga",
      images: [
        "/img sosial/2019 REALISASI HAJATAN CIREBON 1.jpg",
        "/img sosial/2019 REALISASI HAJATAN CIREBON 2.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    // ... tambahkan acara lainnya untuk tahun 2019
  ],
  // ... tambahkan tahun lain jika diperlukan
  2012: [
    {
      title: "Program Solidaritas Paket Beras",
      date: "2012",
      description: "Kami, dengan bangga ikut serta dalam program pemberdayaan masyarakat, terutama melalui dukungan pada pemberian bantuan berupa beras kepada panti asuhan, masjid, dan gereja di sekitar lingkungan kantor dan outlet ",
      images: [
        "/img sosial/2012 SOLIDARITAS PAKET BERAS 3.jpg",
        "/img sosial/2012 SOLIDARITAS PAKET BERAS 2.jpg",
        "/img sosial/2012 SOLIDARITAS PAKET BERAS 1.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Program Pemberian Kurma Kepada Toko Prioritas",
      date: "2012",
      description: "Kami, dengan bangga ikut serta dalam program pemberian paket kurma untuk toko berbintang karena telah menjadi mitra yang signifikan dalam meningkatkan angka penjualan produk kami",
      images: [
        "/img sosial/2012 PROGRAM KURMA UNTUK TOKO 2.jpg",
        "/img sosial/2012 PROGRAM KURMA UNTUK TOKO 1.jpg",
        "/img sosial/2012 PROGRAM KURMA UNTUK TOKO 3.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    // ... tambahkan acara lainnya untuk tahun 2012
  ],
  2011: [
    {
      title: "Spanduk Puasa & Idul Fitri 1432 H",
      date: "2011",
      description: "Kami, berempati dan turut berpartisipasi dalam Bulan Ramadhan, dan menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet",
      images: [
        "/img sosial/2011 SPANDUK PUASA 1.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    // ... tambahkan acara lainnya untuk tahun 2011
  ],
  2010: [
    {
      title: "Spanduk Idul Fitri 1431 H",
      date: "2010",
      description: "Kami, berempati dan turut berpartisipasi dalam menyambut Idul Fitri 1431 H, dan menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet",
      images: [
        "/img sosial/LL 2010.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Spanduk menyambut bulan Puasa ",
      date: "2010",
      description: "Kami, berempati dan turut berpartisipasi menyambut bulan puasa, dan menjalin silaturahmi dengan lingkungan sekitar kantor dan outlet",
      images: [
        "/img sosial/2010 SPANDUK PUASA 1.jpg",
        "/img sosial/2010 SPANDUK PUASA 2.jpg",
        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
  ],
};

// Fungsi untuk mengubah tahun yang ditampilkan dan acara
function changeYear(selectedYear) {
  const eventContainer = document.getElementById("eventContainer");
  eventContainer.innerHTML = ""; // Menghapus konten yang ada

  if (eventsData[selectedYear]) {
    eventsData[selectedYear].forEach((event, eventId) => {
      const eventCard = createEventCard(event, eventId);
      eventContainer.appendChild(eventCard);
    });
  } else {
    eventContainer.innerHTML = "<p>Tidak ada acara untuk tahun yang dipilih.</p>";
  }
}

// Fungsi untuk membuat kartu acara
function createEventCard(event) {
  const eventCard = document.createElement("div");
  eventCard.classList.add("col-lg-4", "col-md-6", "col-sm-12", "mb-4", "event-card");

  // Tambahkan div untuk gambar
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("event-image-container", "position-relative");

  const image = document.createElement("img");
  image.src = event.images[0]; // Menampilkan gambar pertama
  image.alt = event.title;
  image.classList.add("img-fluid", "rounded", "clickable", "w-100", "h-100");
  image.dataset.toggle = "modal"; // Tambahkan atribut data-toggle
  image.dataset.target = "#eventModal"; // Tambahkan atribut data-target
  image.addEventListener("click", function () {
    showEventDetails(event);
  });

  const title = document.createElement("h3");
  title.textContent = event.title;
  title.classList.add("text-center", "mt-2");

  const date = document.createElement("p");
  date.textContent = event.date;
  date.classList.add("text-center", "mb-2");

  imageContainer.appendChild(image);
  eventCard.appendChild(imageContainer);
  eventCard.appendChild(title);
  eventCard.appendChild(date); // Tambahkan tanggal ke dalam kartu acara

  return eventCard;
}

// Fungsi untuk menangani klik gambar di halaman depan
function showGalleryModal(event) {
  const eventId = event.target.dataset.eventId;
  const eventImages = eventsData[currentYear][eventId].images;

  const galleryModalBody = document.getElementById("galleryModalBody");
  galleryModalBody.innerHTML = ""; // Kosongkan konten sebelumnya

  // Tambahkan gambar-gambar ke dalam galeri
  eventImages.forEach((imageUrl) => {
    const galleryImage = document.createElement("img");
    galleryImage.src = imageUrl;
    galleryImage.alt = eventsData[currentYear][eventId].title;
    galleryImage.classList.add("img-fluid", "rounded");
    galleryModalBody.appendChild(galleryImage);
  });

  // Panggil modal galeri secara programmatic
  $("#galleryModal").modal("show");
}

// Function to show event details in the modal
function showEventDetails(event) {
  const modalBody = document.getElementById("eventModalBody");
  modalBody.innerHTML = ""; // Clear previous content

  const title = document.createElement("h3");
  title.textContent = event.title;
  title.classList.add("text-center", "mb-4"); // Add Bootstrap classes for center and margin-bottom

  const date = document.createElement("p");
  date.textContent = event.date;
  date.classList.add("text-center", "mb-2"); // Add Bootstrap classes for center and margin-bottom

  const description = document.createElement("p");
  description.textContent = event.description;
  description.classList.add("text-center");

  // Create a container for the images
  const imagesContainer = document.createElement("div");
  imagesContainer.classList.add("d-flex", "justify-content-center", "flex-wrap");

  // Add each image to the container
  event.images.forEach((imageUrl) => {
    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = event.title;
    image.classList.add("img-fluid", "rounded", "mb-4", "mx-2"); // Add Bootstrap classes for responsive and spacing
    imagesContainer.appendChild(image);
  });

  modalBody.appendChild(title);
  modalBody.appendChild(date);
  modalBody.appendChild(description);
  modalBody.appendChild(imagesContainer);

  // Show the modal programmatically
  $("#eventModal").modal("show");
}

// Initial load with the default year (e.g., 2023)
changeYear("2040");

document.onreadystatechange = function () {
  var loader = document.getElementById("loader");
  if (document.readyState !== "complete") {
    loader.style.display = "block";
  } else {
    loader.style.display = "none";
  }
};
