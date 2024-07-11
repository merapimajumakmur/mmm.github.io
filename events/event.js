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

// Dummy data for events
const eventsData = {
  2023: [
    {
      title: "FESTIVAL PUNCAK 2023 (2023)",
      date: "25-27 Desember 2023",
      description: "Lokasi: Rest Area Gunung Mas Puncak, Kab. Bogor, Jawa Barat",
      images: [
        "/img event/Puncak Fest Bogor 2023 (14).jpg",
        "/img event/(2023) FESTIVAL PUNCAK 2023.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "PENTAS SENI BUDAYA KATAR JATI RASA",
      date: "09 Desember 2023",
      description: "Lokasi: Jl. Jatirasa Rw 03,Kec. Jatiasih, Kota Bekasi, Jawa Barat",
      images: [
        "/img event/(2023) PENTAS SENI BUDAYA KATAR JATI RASA.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "ANNIVERSARY & SILAHTURAHMI BOEDOET 93",
      date: "09 Desember 2023",
      description: "Lokasi:Wisata Situ Gintung Aula B, Tangerang Selatan, Jawa Barat",
      images: [
        "/img event/(2023) ANNIVERSARY & SILAHTURAHMI BOEDOET 93.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "KOPDARGAB Season 3 DKI Jakarta",
      date: "02 Desember 2023",
      description: "Lokasi:Jl. Perintis Kemerdekaan No.kavling 99, Pulo Gadung, Kec. Pulo",
      images: [
        "/img event/(2023) KOPDARGAB Season 3 DKI Jakarta.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "ANNIVERSARI KE 9th TKSCI DEPOK CERIA",
      date: "04 November 2023",
      description: "Lokasi: Rest Area Gunung Mas Puncak, Kab. Bogor, Jawa Barat",
      images: [
        "/img event/(2023) ANNIVERSARI KE 9th TKSCI DEPOK CERIA.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "BADERSJAK Baderhood DKI Jakarta",
      date: "28 Oktober 2023",
      description: "Lokasi: Mall Ciplaz Klender, Jakarta Timur",
      images: [
        "/img event/BADERSJAK.jpg",
        "/img event/(2023) BADERSJAK Baderhood DKI Jakarta.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "YOUTH CULTURE 2023",
      date: "28 Oktober 2023",
      description: "Lokasi: Sepanjang Jl.Kebon Gedang, Bandung",
      images: [
        "/img event/(2023) YC 8.jpg",
        "/img event/(2023) YOUTH CULTURE 2023.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "ACARA PUNCAK HUT RI KE 78 DAN PESTA RAKYAT",
      date: "10 september 2023",
      description: "Lokasi: Lap. Volley Jajaway RW 01 Bandung",
      images: [
        "/img event/(2023) ACARA PUNCAK HUT RI KE 78 DAN PESTA RAKYAT.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "ANNIVERSARY KE 3 HONDA WIN",
      date: "24 Juni 2023,",
      description: "Lokasi: Cikarang Expo",
      images: [
        "/img event/(2023) ANNIVERSARY KE 3 HONDA WIN.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "ACARA PUNCAK HUT RI KE 78 DAN PESTA RAKYAT",
      date: "11-12 februari 2023",
      description: "Lokasi: Lapangan Multi Guna Kota Bekasi",
      images: [
        "/img event/(2023) ACARA PUNCAK HUT RI KE 78 DAN PESTA RAKYAT.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "EMPLOYEE GATHERING 13th",
      date: ["14-15 Januari 2020", "Lokasi : Hotel LOR IN Sentul"],

      description:
        " PT Merapi Maju Makmur merayakan 13th keberhasilannya sebagai perusahaan distributor yang unggul terutama di industri rokok. Acara ini bertujuan untuk mempererat hubungan, memberikan motivasi, dan meningkatkan kebersamaan. Dalam suasana penuh semangat, karyawan dari berbagai departemen, dan antar wilayah berkumpul untuk merayakan pencapaian bersama dan merayakan solidaritas sebagai satu tim. Dengan kehadiran Tiwi, salah satu personel dari duo penyanyi T2, sebagai bintang tamu, acara tersebut menjanjikan pengalaman yang berarti dan penuh kegembiraan bagi seluruh keluarga besar PT Merapi Maju Makmur.",
      images: [
        "/img event/(2023) 13TH ANNIV MMM.JPG",
        "/img event/(2023) 13TH ANNIV MMM 1.jpg",
        "/img event/(2023) 13TH ANNIV MMM 2.jpg",
        "/img event/(2023) 13TH ANNIV MMM 3.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
  ],
  2022: [
    {
      title: "5th Anniversary CBR Riders Bekasi",
      date: "10 desember 2022",
      description: "Lokasi: Lapangan Kecamatan Jatiasih, Bekasi",
      images: [
        "/img event/(2022) 1ST ANNIVERSARY MISI BEKASI 1.jpg",
        "/img event/(2022) 1ST ANNIVERSARY MISI BEKASI.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "PESTA RAKYAT PASAR ALAM VIDA",
      date: "3 Desember 2022",
      description: "Lokasi: PASAR ALAM VIDA BEKASI, Bekasi",
      images: [
        "/img event/(2022) PESTA RAKYAT PASAR ALAM VIDA.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "KOPDARGAB SMC (SUZUKI MOTOR CLUB) BEKASI",
      date: "20 NOVEMBER 2022",
      description: "Lokasi: Area Parkir BTC GP Mall Bekasi Timur",
      images: [
        "/img event/(2022) KOPDARGAB SMC BEKASI.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "3RD ANNIVERSARRY CALSIC CHAPTER TANGERANG",
      date: "23 OKTOBER 2022",
      description: "Lokasi: Mall Ciputra Citra Raya, Cikupa",
      images: [
        "/img event/(2022) 3RD ANNIVERSARRY CALSIC CHAPTER TANGERANG.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "6TH ANNIVERSARY YAMAHA AEROX CLUB INDONESIA",
      date: "15 Oktober 2022",
      description: "Lokasi: Pasar Modern Intermoda BSD, Cisauk",
      images: [
        "/img event/(2022) 6TH ANNIVERSARY YAMAHA AEROX CLUB INDONESIA.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Fortress Chopper LET'S PLAY",
      date: "25 SEPTEMBER 2022",
      description: "Lokasi: Danau Gawir, Legok, Kab. Tangerang",
      images: [
        "/img event/(2022) Fortress Chopper LET'S PLAY.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "KONTES BURUNG MVP (MAGNUM MAX VIRAL PLAYER)",
      date: "11 SEPTEMBER 2022",
      description: "Lokasi: LAPANGAN KONTES KAILASH JL H DIMUN CILODONG KOTA DEPOK",
      images: [
        "/img event/(2022) KONTES BURUNG MVP (MAGNUM MAX VIRAL PLAYER).jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Anniversary 3Th SICI (Sigra Club Indonesia) Depok",
      date: "11 SEPTEMBER 2022",
      description: "Lokasi: JPW CAFE Ruko Verbena D-16 Jl Boulevard GDC sukmajaya Depok",
      images: [
        "/img event/(2022) Anniversary 3Th SICI.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "BEKASI CLOTHING WEEK",
      date: "30-31 Juli 2022",
      description: "Lokasi: BTC Mall Bekasi",
      images: [
        "/img event/(2022) BEKASI CLOTHING WEEK.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "KONTES BURUNG AMI AWARD 2022",
      date: "06 FEBRUARI 2022",
      description: "Lokasi: Lapangan Kontes Jl. Krukut Raya Samping Viula Mutiara Cinere Depok",
      images: [
        "/img event/(2022) KONTES BURUNG AMI AWARD 2022.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    // ... tambahkan acara lainnya untuk tahun 2019
  ],
  2020: [
    {
      title: "EMPLOYEE GATHERING 10th (satu dekade)",
      date: ["18-19 Januari 2020", "Lokasi: Grand Ussu"],
      description:
        " PT Merapi Maju Makmur merayakan 1 dekade keberhasilannya sebagai perusahaan distributor yang unggul terutama di industri rokok. Sebagai bentuk apresiasi kepada seluruh karyawan yang telah berkontribusi dalam perjalanan perusahaan, diadakanlah acara Employee Gathering yang penuh makna dan keceriaan.                                                   Acara ini bertujuan untuk lebih mendekatkan, mempererat hubungan, memberikan motivasi, dan meningkatkan kebersamaan di antara seluruh tim. Dalam suasana penuh semangat, karyawan dari berbagai departemen, dan antar wilayah berkumpul untuk merayakan pencapaian bersama dan merayakan solidaritas sebagai satu tim. Employee Gathering PT Merapi Maju Makmur dalam rangka 1 dekade ini bukan hanya sekadar perayaan, tetapi juga menjadi wahana untuk memupuk rasa kebersamaan yang erat di antara seluruh tim. Harapannya, dengan semakin terjalinnya hubungan baik di antara karyawan, perusahaan dapat terus berkembang dan mencapai prestasi lebih besar di masa depan.",
      images: [
        "/img event/EGPTMMM2020 (5) v1.jpg",
        "/img event/EGPTMMM2020 (11).jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
  ],
  2019: [
    {
      title: "5th Anniversary CBR Riders Bekasi",
      date: "02 Maret 2019",
      description: "Lokasi: Gedung Juang Tambun, Bekasi",
      images: [
        "/img event/CBR 1.jpg",
        "/img event/(2019) 5th Anniversary CBR Riders Bekasi.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    // ... tambahkan acara lainnya untuk tahun 2019
  ],
  2018: [
    {
      title: "10 Years Anniversary NINJA TANGERANG ORGANIZATION",
      date: "01 Desember 2018",
      description: "Lokasi: ICE BSD, Tangerang",
      images: [
        "/img event/NITRO.jpg",
        "/img event/(2018) 10 Years Anniversary NINJA TANGERANG ORGANIZATION.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "(BERANI NGEBAND BERANI BUKTIIN) FESTIFAL MUSIC 2018 SEASON 12",
      date: "10 November 2018",
      description: "Lokasi: Lap. Sepak Bola (C-Loon) Cinangka, Sawangan, Depok",
      images: [
        "/img event/Festival Musik Depok 1 (2).jpg",
        "/img event/(2018) BERANI NGEBAND BERANI BUKTIIN FESTIFAL MUSIC 2018 SEASON 12.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "NESLITE Grebek Kampung (Goyang Caisar)",
      date: "20 Oktober 2018",
      description: "Lokasi: Halaman Parkir Giant Cimore, Tangerang",
      images: [
        "/img event/Grebek Kampung (12).jpg",
        "/img event/(2018) Grebek Kampung Goyang Cesar.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "MALAM PUNCAK HUT RI KE 73 Bogor",
      date: "25 Agustus 2018",
      description: "Lokasi: Perumahan Villa Mutiara Bogor RT 06 RW 11",
      images: [
        "/img event/(2018) MALAM PUNCAK HUT RI KE 73.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "PESTA RAKYAT HUT RI KE 73 Kota Cilegon",
      date: "24 & 31 Agustus 2018",
      description: "Lokasi: Alun-alun Cilegon",
      images: [
        "/img event/(2018) PESTA RAKYAT HUT RI KE 73 KOTA CILEGON.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "SUNSET ANNIVERSARY PARTY",
      date: "11 agustus 2018",
      description: "Lokasi: Parkiran Mal Grand Cakung",
      images: [
        "/img event/(2018) SUNSET ANNIVERSARY PARTY.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Musik Kampus UNKRIS",
      date: "28 April 2018",
      description: "Lokasi: Lapangan Kampus UNKRIS",
      images: [
        "/img event/(2018) MK UNKRIS 2.jpg",
        "/img event/(2018) MK UNKRIS 1.jpg",
        "/img event/(2018) MK UNKRIS 3.jpg",
        "/img event/(2018) MK UNKRIS 4.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "2th Anniversary UBER",
      date: "21 April 2018",
      description: "Lokasi: Lapangan Pertamina, Daanmogot,. Jakarta Barat",
      images: [
        "/img event/(2018) UBER 1.jpg",
        "/img event/(2018) UBER 2.jpg",
        "/img event/(2018) UBER 3.jpg",
        "/img event/(2018) UBER 4.jpg",
        "/img event/(2018) UBER 5.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Anniversary Scooterhood 2018",
      date: "31 Maret sd 1 April 2018",
      description: "Lokasi:  Inspeksi Kanal Timur Cakung",
      images: [
        "/img event/(2018) AS 4.jpg",
        "/img event/(2018) AS 1.jpg",
        "/img event/(2018) AS 2.jpg",
        "/img event/(2018) AS 3.jpg",
        "/img event/(2018) AS 5.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Urban Carnaval",
      date: "28 Januari 2018",
      description: "Lokasi: Ramayana Cikupa",
      images: [
        "/img event/(2018) Urban Carnaval 1.jpg",
        "/img event/(2018) Urban Carnaval 2.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    // ... tambahkan acara lainnya untuk tahun 2019
  ],
  2017: [
    {
      title: "Neslite Mobile Accoustic",
      date: "30 September 2017",
      description: "Lokasi: Neis Café, Galaxy Park, Bekasi",
      images: [
        "/img event/(2017) Neslite Mobile Accoustic 1.jpg",
        "/img event/(2017) Neslite Mobile Accoustic 2.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Tresno Tipe X Birtday Bash",
      date: "Kamis, 28 September 2017",
      description: "Lokasi: Neis Café, Galaxy Park, Bekasi",
      images: [
        "/img event/(2017) Tresno Tipe X Birtday Bash 1.jpg",
        "/img event/(2017) Tresno Tipe X Birtday Bash 2.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "ACCOUSTIC ON",
      date: "Sabtu, 27 Agustus 2017",
      description: "Lokasi: JL.IR.H DJUANDA ( HALAMAN TRI STORE - DAGO ) BANDUNG",
      images: [
        "/img event/(2017) AcousticOn 1.jpg",
        "/img event/(2017) AcousticOn 2.jpg",
        "/img event/(2017) AcousticOn 3.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "NESLITE FEST CONCERT",
      date: "Jumat, 28 Juli 2017",
      description: "Lokasi: The Green Hall, The Media Hotel & Towers, Jl. Gunung Sahari, Jakarta",
      images: [
        "/img event/(2017) Neslite Fest Concert 1.jpg",
        "/img event/(2017) Neslite Fest Concert 3.jpg",
        "/img event/(2017) Neslite Fest Concert 4.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "REGGAE JAM SESSION",
      date: "Sabtu, 20 Mei 2017",
      description: "Lokasi: Lapangan Parkir Belakang BTC Mal Bekasi Timur",
      images: [
        "/img event/(2017) neslite reggae jam session 1.jpg",
        "/img event/(2017) neslite reggae jam session 2.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Bekasi Clothing Week",
      date: "Senin - Minggu, 8 - 14 Mei 2017",
      description: "Lokasi: BTC Mal Bekasi Timur",
      images: [
        "/img event/(2017) Event Bekasi Clothing Week 1.jpg",
        "/img event/(2017) Event Bekasi Clothing Week 2.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "YASMIN FISHING TOURNAMENT",
      date: "Minggu, 1 Januari 2017",
      description: "Lokasi: Pemancingan Yasmin Fishing, Bogor",
      images: [
        "/img event/(2017) LOMBA MANCING YASMIN FISHING TOURNAMENT 1.jpg",
        "/img event/(2017) LOMBA MANCING YASMIN FISHING TOURNAMENT 2.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    // ... tambahkan acara lainnya untuk tahun 2017
  ],
  2013: [
    {
      title: "Neslite Carnaval 2",
      date: "09-11-2013",
      description: "Lokasi : Lapangan Parkir RUSUN Tanah Pasir Blok Mawar, Penjaringan Jakarta Utara",
      images: [
        "/img event/(2013) Neslite Carnaval 2 9 november 2013.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "NESLITE CARNAVAL",
      date: "28-09-2013",
      description: "Lokasi : Parkiran Robinson Baru Cibinong Kab. Bogor",
      images: [
        "/img event/(2013) NESLITE CARNAVAL 28 SEPT 2013.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "UNTUKMU INDONESIAKU",
      date: "15-09-2013",
      description: "Lokasi :  Jl. Gelanggang Kp. Dengus",
      images: [
        "/img event/(2013) UNTUKMU INDONESIAKU 15 SEPTEMBER 2013.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "GET UP TOGETHER WITH REGGEA 6 ( GRC )",
      date: "29-06-2013",
      description: "Lokasi : Lapangan Gang Gareng RT 01 RW 06 Kel. Pondok Kacang Timur Kec. Pondok Aren Tangerang Selatan",
      images: [
        "/img event/(2013) GET UP TOGETHER WITH REGGEA 6 ( GRC ) 29 JUNI 2013.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Jakarta reggae Movement",
      date: "25-05-2013",
      description: "Lokasi : Lapangan Parkir Kolam Renang Glora Bung Karno (GBK)",
      images: [
        "/img event/(2013) Jakarta reggae movement 25 MEI 2013.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "SPEKTAKULAR DUO",
      date: "27-04-2013",
      description: "Lokasi : Balai Sarbini Jakarta",
      images: [
        "/img event/(2013) SPEKTAKULAR DUO 27 APRIL 2013.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "Neslite Dj On The Road",
      date: "13-04-2013",
      description: "Lokasi : Comic cafe tebet & TMII",
      images: [
        "/img event/(2013) Neslite Dj On The Road 13 APRIL 2013.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "ONE LOVE FOREVER",
      date: "28-03-2013",
      description: "Lokasi : Bumi perkemahan Raguna Jakarta Selatan",
      images: [
        "/img event/(2013) ONE LOVE FOREVER 28 MARET 2013.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "SOUND OFF FREEDOM & GROUND ATTACK",
      date: "30-03-2013, & 31-03-2013",
      description: "Lokasi : Lapangan parkir kolam renang senayan GBK",
      images: [
        "/img event/(2013) SOUND OFF FREEDOM & GROUND ATTACK 30-31 MARET 2013.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "REVOLUSTATION OF SOUND",
      date: "24-03-2013",
      description: "Lokasi : Universitas Bung Karno",
      images: [
        "/img event/(2013) REVOLUSTATION OF SOUND 24 MARET 2013.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "LITE A FIYAA MEET THE LION",
      date: "23-03-2013",
      description: "Lokasi : Lap. Sepak Bola Kec. Pondok Aren Jl. Graha Raya Bintaro Tangerang Selatan",
      images: [
        "/img event/(2013) LITE A FIYAA MEET THE LION 23 MARET 2013.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "NESLITE REGGAE MOVEMENT 4",
      date: "19-01-2013",
      description: "Lokasi : Pantai lestari Anyer Banten",
      images: [
        "/img event/(2013) NESLITE REGGAE MOVEMENT 4  19 JAN 2013.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
    {
      title: "NESLITE REGGAE MOVEMENT 3",
      date: "12-01-2013",
      description: "Lokasi : Stadion Mini Pilar Cikarang Bekasi",
      images: [
        "/img event/(2013) NESLITE REGGAE MOVEMENT 3 12 JANUARI 2013.jpg",

        // ... tambahkan URL gambar lain jika diperlukan
      ],
    },
  ],
  2012: [
    {
      title: "(NESLITE MOBILE SHOW)",
      date: "11-11-2012",
      description: "Lokasi : Halaman Parkir Carrefour batu ceper jl. daan mogot raya tangerang banten",
      images: ["/img event/(2012) 4th ANIVERSARY OF AUT-SYDERS TANGERANG 11 NOV 2012.jpg"],
    },
    {
      title: "Bekasi Reggae Movement",
      date: "04-11-2012",
      description: "Lokasi : Rooftop bekasi square",
      images: ["/img event/(2012) Bekasi Reggae Movement.jpg", "/img event/(2012) Bekasi Reggae Movement 2.jpg", "/img event/(2012) Bekasi Reggae Movement 3.jpg"],
    },
    {
      title: "BIGBANG (GRAND FINAL) FESTIVAL NESLITE UR FEST 2012",
      date: "11-11-2012",
      description: "Lokasi : Halaman Parkir Carrefour Batu Ceper Jl. Daan Mogot Raya Tangerang Banten",
      images: ["/img event/(2012) BIGBANG (GRAND FINAL) FESTIVAL NESLITE UR FEST 2012 7 JULI.jpg"],
    },
    {
      title: "HUT DKI JAKARTA YANG KE 485",
      date: "24-06-2012",
      description: "Lokasi :  Jl. Z1 Kampung baru, Kebun Jeruk Jakarta Barat",
      images: ["/img event/(2012) HUT DKI JAKARTA YANG KE 485 24 JUNI.jpg"],
    },
    {
      title: "FESTIVAL NESLITE UR FEST 2012",
      date: "16-06-2012",
      description: "Lokasi : Halaman Parkir Carrefour Batu Ceper Jl. Daan Mogot Raya Tangerang Banten",
      images: ["/img event/(2012) FESTIVAL NESLITE UR FEST 2012 16 JUNI.jpg"],
    },
    {
      title: "GARENG REGGAE COMMUNITY 2012",
      date: "02-06-2012",
      description: "Lokasi : Lapangan Gang Gareng RT 001 06 Kel. Pondok Kacang Timur Kec. Pondok Aren Tangerang Selatan",
      images: ["/img event/(2012) GARENG REGGAE COMMUNITY 2012 2 JUNI.jpg"],
    },
    {
      title: "WAR-WAR NESLITE UR FEST 2012",
      date: "02-06-2012",
      description: "Lokasi : Parkiran Ramayana Plaza Depok",
      images: ["/img event/(2012) WAR2 NESLITE UR FEST 2012 2 JUNI.jpg"],
    },
    {
      title: "FESTIVAL NESLITE UR FEST 2012",
      date: "19-05-2012",
      description: "Lokasi : New Majestic Braga, Bandung",
      images: ["/img event/(2012) FESTIVAL NESLITE UR FEST 2012 19 MEI.jpg"],
    },
    {
      title: "WAR-WAR NESLITE UR FEST 2012",
      date: "05-05-2012",
      description: "Lokasi : Metro Indah Mal Kiaracondong, Bandung",
      images: ["/img event/(2012) WAR-WAR NESLITE UR FEST 2012 5 MEI.jpg"],
    },
    {
      title: "FESTIVAL NESLITE UR FEST 2012",
      date: "22-04-2012",
      description: "Lokasi : Gedung Pertunjukan Gelanggang Remaja Bulungan Jakarta",
      images: ["/img event/(2012) FESTIVAL NESLITE UR FEST 2012 22 APRIL.jpg"],
    },
    {
      title: "KONVOI MOBIL BRANDING DAN SPG MOBILE 2012",
      date: "24-02-2012",
      description: "Lokasi : Museum Fatahillah dan Mc Donald Kemang",
      images: ["/img event/(2012) KONVOI MOBIL BRANDING DAN SPG MOBILE 2012.jpg"],
    },
    {
      title: "NESLITE MOVEMENT (NESLITE MOBILE SHOW)",
      date: "Sabtu, 7 Januari 2012. Pukul 19.00 - 24.00 wib",
      description: "Lokasi : Parkiran Pusat Industri Kecil Cakung dan Harapan Indah Bekasi",
      images: ["/img event/(2012) NESLITE MOVEMENT (NESLITE MOBILE SHOW) 7 Januari 2012.jpg", "/img event/(2012) NESLITE MOVEMENT (NESLITE MOBILE SHOW) 7 Januari 2012 2.jpg"],
    },

    // ... tambahkan acara lainnya untuk tahun 2012
  ],
  2011: [
    {
      title: "NESLITE MOVEMENT (NESLITE MOBILE SHOW)",
      date: "Sabtu, 15 Oktober 2011. Pukul 17.00 - 24.00 wib",
      description: "Lokasi : Griya Cileungsi dan Jalan Pemda Cibinong",
      images: ["/img event/(2011) NESLITE MOVEMENT (NESLITE MOBILE SHOW) 15 Oktober 2011.jpg", "/img event/(2011) NESLITE MOVEMENT (NESLITE MOBILE SHOW) 15 Oktober 2011 2.jpg"],
    },
    {
      title: "BONSER MUSIK EDITION",
      date: "24-07-2011",
      description: "Lokasi : Lapangan Bola Gg Rante Gunung batu Bogor",
      images: ["/img event/(2011) BONSER MUSIK EDITION_ev31 24 juli 2011.jpg"],
    },
    {
      title: "PERAYAAN SHEJIT SUHU THIO THIAN SU",
      date: "22-07-2011",
      description: "Lokasi : Jl. Imam Bonjol Gg. Vihara IV No. 1 Kel Sukajadi Kec. Karawaci Tangerang",
      images: ["/img event/(2011) PERAYAAN SHEJIT SUHU THIO THIAN SU_29 22 juli 2011.jpg"],
    },
    {
      title: "Lomba Burung Kicau",
      date: "17-07-2011",
      description: "Lokasi : Lapangan Cikeas Gunung Putri",
      images: ["/img event/(2011) LOMBA BURUNG KICAU_ev27 17 juli 2011.jpg"],
    },
    {
      title: "DANCE & BREAKDANCE COMPETITION FEAT DJ",
      date: "09-07-2011",
      description: "Lokasi : Fame Station Jl. Sersan Badjuri 100 Bandung",
      images: ["/img event/(2011) DANCE & BREAKDANCE COMPETITION FEAT DJ_LAP22 9 juli 2011.jpg"],
    },
    {
      title: "Festival Band & Dancer Warung Gunung",
      date: "02-07-2011",
      description: "Lokasi : Lapangan Kecamatan Warung Gunung Lebak",
      images: ["/img event/(2011) Festival Band & Dancer Warung Gunung_LAP20 2 juli 2011.jpg"],
    },
    {
      title: "Indonesia Reggae Festival",
      date: "19-05-2011 (Press Conference dan Meet and Greet), 21-05-2011, dan 22-05-2011 (EVENT)",
      description: "Lokasi : Sudirman Plaza - Marriot Executive Apartments (Press Conference dan Meet and Greet), dan Pekan Raya Jakarta Kemayoran (EVENT)",
      images: ["/img event/(2011) indonesia reggae festival_12 (21-22 mei 2011).jpg", "/img event/(2011) indonesia reggae festival_12 (21-22 mei 2011) 2.jpg", "/img event/(2011) indonesia reggae festival_12 (21-22 mei 2011) 3.jpg"],
    },
    {
      title: "Kumpul Bareng anak Band dan Bikers",
      date: "07-05-2011",
      description: "Lokasi : Pasar Segar Depok",
      images: ["/img event/(2011) Kumpul Bareng anak band dan biker_lap 8 7 mei 2011.jpg"],
    },
    {
      title: "Pentas Musik 2011",
      date: "30-04-2011",
      description: "Lokasi : Lapangan Buaran PLN Cikokol",
      images: ["/img event/(2011) Pentas Musik 2011 30 april 2011.jpg"],
    },
    {
      title: "NESLITE GET THE NU ( DJ ON THE ROAD )",
      date: "Sabtu, 24 September 2011",
      description: ["Taman Kencana dan Lapangan SEMPUR Bogor"],
      images: ["/img event/(2011) NESLITE GET THE NU TRIAL.jpg"],
    },

    // ... tambahkan acara lainnya untuk tahun 2011
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
changeYear("2023");

// LOADING PAGE
document.onreadystatechange = function () {
  var loader = document.getElementById("loader");
  if (document.readyState !== "complete") {
    loader.style.display = "block";
  } else {
    loader.style.display = "none";
  }
};
