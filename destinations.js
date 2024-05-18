const destinations = [
  {
    id: 1,
    nama: "Kota Tua",
    deskripsi:
      "Jika anda tidak menyukai tempat wisata yang berisik dan terlalu kekanak-kanakan, mungkin Anda bisa mencoba ke Kota Tua! Destinasi wisata ini menyimpan segudang pengetahuan sejarah yang dapat menjadi wawasan baru bagimu. Gedung-gedung di wilayah tersebut berupa peninggalan bangunan-bangunan tua bergaya kolonial Belanda yang begitu menawan. Terletak di sebelah utara dari pusat jakarta, kota tua dapat dijangkau melalui berbagai moda transportasi umum seperti bus Transjakarta, KRL Commuter Line, dan MRT Jakarta.\n\nDengan berjalan diantara bangunan-bangunan bersejarah di Kota Tua, Anda dapat merasakan suasana zaman dulu yang dirasakan oleh nenek moyang. Selain itu, terdapat beberapa warung-warung tradisional yang menyediakan hidangan khas. Jika merasa lelah untuk mengelilingi Kota Tua tersebut dengan berjalan kaki, Anda dapat menyewa sepeda ontel yang pastinya mudah untuk ditemukan disana.\n\nMungkin pada saat Anda menjelajahi Kota Tua, Anda akan menemukan museum Fatahillah, museum yang merupakan bekas balai kota sekaligus sebagai tempat pengadilan yang dilengkapi dengan penjara bawah tanah. Selain museum Fatahillah, terdapat berbagai tempat yang patut dikunjungi seperti museum Wayang, museum Seni Rupa dan Keramik, museum Bank Indonesia, dan sebagainya. Daripada membayangkan dari pikiranmu, lebih baik Anda mencoba rasakan sendiri betapa mengagumkan tempat-tempat tersebut! Kota Tua menunggu kedatangan Anda!",
    kategori: "Sejarah, Seni & Budaya",
    lokasi: "Jakarta Barat",
    Instagram: "@kotatua,jkt",
    JamOp: "",
    image: "/assets/kotu-hero.jpg",
    images: [
      "/assets/kotu.png",
      "/assets/kotu1.jpg",
      "/assets/kotu2.jpg",
      "/assets/kotu3.jpg",
      "/assets/kotu4.jpg",
      "/assets/kotu5.png",
    ],
    route_jaklingko: "/assets/rute_KotaTuaJakLingko.png",
    route_krl: "/assets/RuteKotaTuaKRL.png",
  },
  {
    id: 2,
    nama: "Taman Mini Indonesia Indah (TMII)",
    lokasi: "Jakarta Timur",
    deskripsi:
      "Bingung menghabiskan waktu liburan dimana? TMII jawabnya! TMII atau Taman Mini Indonesia Indah adalah salah satu tempat wisata yang wajib kalian kunjungi. Bertempat di Jakarta Timur dan memiliki area seluas ±  147 hektare atau 1,47 kilometer persegi.\n\nDestinasi wisata yang mempersembahkan kekayaan budaya, keberagaman serta keindahan alam Nusantara dalam satu tempat. Kalian bisa menikmati perjalanan yang menakjubkan melintasi 34 provinsi, dengan replika bangunan, tarian, dan kebudayaan unik setiap daerah.\n\nDisamping itu, di tengah-tengah TMII terdapat sebuah danau yang menggambarkan miniatur kepulauan Indonesia di tengahnya, kereta gantung, berbagai museum, dan Teater IMAX Keong Mas dan Teater Tanah Airku), berbagai sarana rekreasi ini menjadikan TMIII sebagai salah satu kawasan wisata terkemuka di ibu kota.\n\nMari rasakan keajaiban alam, kekayaan budaya, dan keindahan arsitektur tradisional yang memikat hati di setiap sudutnya. Temukan pesona Indonesia dari Sabang hingga Merauke di Taman Mini Indonesia Indah (TMII)!!!",
    kategori: "Taman Hiburan dan Edukasi",
    lokasi: "Jakarta Timur",
    Instagram: "@tmiiofficial",
    JamOp: "05.00 - 20.00 WIB",
    image: "/assets/tmii.png",
    images: [
      "/assets/tmii_island.png",
      "/assets/TMII1.jpeg",
      "/assets/TMII2.jpg",
      "/assets/TMII3.jpeg",
      "/assets/TMII4.jpeg",
      "/assets/TMII5.webp",
    ],
    route_jaklingko: "/assets/rute_TMII_JakLingko.png",
    route_krl: "/assets/rute_TMII.png",
  },
  {
    id: 3,
    nama: "Dunia Fantasi (Dufan)",
    lokasi: "Jakarta Utara",
    deskripsi:
      "Habis diputusin pacar atau sedang melewati masa sulit? Mungkin Anda bisa mencoba meluapkan emosi dan rasa kesalmu dengan berteriak di tempat ini! Dufan yang merupakan singkatan dari Dunia Fantasi, menyediakan berbagai wahana permainan yang spektakuler dan menantang.\n\nDufan terdiri dari berbagai kawasan bertema yang menakjubkan. Salah satu yang paling populer adalah Dunia Khayalan yang menampilkan wahana-wahana ekstrem seperti roller coaster Halilintar, Cyclone, dan Bianglala raksasa. Bagi yang kurang menyukai ketinggian, ada pula wahana Terros yang memacu adrenalin dengan jalur melingkar berliku. Tidak ketinggalan pula Dunia Petualangan yang menghadirkan suasana hutan belantara dengan animatronik binatang buas dalam wahana Hutan Kaya.\n\nSetelah merasa lelah dengan wahana ekstrem, Anda dapat bermain wahana komedi putar yang membuat anda lebih rileks sehabis berteriak. Sensasi memutar dan berputar dalam wahana ini akan membantu melepaskan ketegangan dan membuat Anda merasa lebih segar. Nikmati keseruan tanpa batas di taman rekreasi ikonik ini yang akan selalu menyajikan pengalaman tak terlupakan bagi setiap pengunjungnya.",
    kategori: "Rekreasi",
    lokasi: "Jakarta Utara",
    Instagram: "@infodufan",
    JamOp: "Senin - Jumat	: 10.00 - 17.00 WIB \nSabtu - Minggu : 10.00 - 19.00 WIB",
    image: "/assets/dufan.webp",
    images: [
      "/assets/dufan.webp",
      "/assets/dufan1.jpeg",
      "/assets/dufan2.jpg",
      "/assets/dufan3.jpeg",
      "/assets/dufan4.jpg",
      "/assets/dufan5.jpeg",
    ],
    route_jaklingko: "/assests/rute_DufanJakLingko",
    route_krl: "/assests/DufanKRL.png",
  },
  {
    id: 4,
    nama: "Taman Impian Jaya Ancol",
    lokasi: "Jakarta Utara",
    deskripsi:
      "Taman Impian Jaya Ancol adalah taman rekreasi tematik terbesar dan terlengkap di Jakarta. Terletak di Jakarta Utara berhadapan dengan Laut Jawa, Taman Impian Jaya Ancol merupakan kawasan resor tepi pantai yang berdiri di atas lahan seluas 80 hektar. Ini adalah sebuah taman rekreasi yang menyediakan berbagai fasilitas, mulai dari olahraga air dan pantai, wahana seru, kolam renang, hingga Eco-Park dan pertunjukan spertakuler bertabur bintang kaliber internasional.\n\nDunia Fantasy (Dufan) menawarkan 27 wahana mengasyikkan, antara lain roller coaster raksasa, air terjun Niagara, Tornado, dan juga Istana Boneka. Di Atlantis Water Adventure terdapat 8 kolam renang berukuran besar yang dilengkapi dengan efek ombak dan wahana seluncur.\n\nAda pula Seaworld, dimana Anda bisa berjalan di bawah terowongan kaca sambil menyaksikan maraknya kehidupan di bawah air. Selain itu, di sini terdapat pula Pasar Seni, Eco-Park, Ocean Park, serta tiga buah hotel berbintang dimana Anda bisa menikmati liburan dan akhir pekan dalam kenyamanan bungalow di tepi pantai atau mengadakan rapat di tempat yang jauh dari hiruk-pikuknya kehidupan kota.\n\nMari kita berpetualang dan jelajahi keanekaragaman atraksi, mulai dari Atlantis Water Adventure hingga keasyikan Dunia Fantasi. Rasakan keseruan yang tiada akhir dan temukan keajaiban lainnya di Taman Impian Jaya Ancol!",
    kategori: "Rekreasi",
    image: "/assets/taman_impian_jaya_ancol.png",
    images: [
      "/assets/ancol1.webp",
      "/assets/ancol2.jpg",
      "/assets/ancol3.jpg",
      "/assets/ancol4.jpg",
      "/assets/ancol5.jpg",
      "/assets/taman_impian_jaya_ancol.png",
    ],
    route_jaklingko: "/assests/rute_DufanJakLingko.png",
    route_krl: "/assest/rute_DufakKRL.png",
  },
  {
    id: 5,
    nama: "Monas",
    lokasi: "Jakarta Pusat",
    deskripsi:
      "Siapa yang tidak tahu dengan ikon Utama Kota Jakarta yang satu ini? Monas atau yang dikenal sebagai monument nasional, merupakan salah satu bangunan bersejarah yang diresmikan pada tahun 1961 telah menyimpan banyak sekali cerita sejarah Ibu Kota. Monas sendiri dibangun untuk mengenang dan melestarikan perjuangan bangsa Indonesia pada masa revolusi kemerdekaan 1945, agar membangkitkan inspirasi dan semangat patriotisme generasi saat ini dan mendatang. Dengan tinggi 132 meter serta dihiasi puncak api yang melambangkan semangat dan perjuangan Indonesia menjadikannya sangat cocok sebagai landmark Ibu Kota. Monas juga  tidak hanya menjadi tujuan wisata populer bagi wisatawan lokal dan internasional, tetapi juga menjadi tempat untuk berbagai acara dan perayaan nasional, seperti peringatan Hari Kemerdekaan Indonesia pada tanggal 17 Agustus setiap tahunnya. Sebagai simbol nasional, Monas memiliki nilai historis dan simbolis yang sangat penting bagi bangsa Indonesia. Monas juga menjadi pusat kegiatan budaya dan acara-acara nasional, seperti perayaan Hari Kemerdekaan Indonesia yang diadakan setiap tahunnya. Dengan sejarahnya yang kaya dan pemandangannya yang menakjubkan, Monas tetap menjadi destinasi yang wajib dikunjungi bagi siapa pun yang ingin mengenal lebih dekat keindahan dan keberagaman Indonesia.",
    kategori: "Taman Hiburan dan Edukasi",
    lokasi: "Jakarta Pusat",
    Alamat: "RT.5/RW.2, Gambir, Central Jakarta City, Jakarta 10110",
    Instagram: "@monumen.nasional",
    JamOp: "Selasa - Minggu : 08.00 - 15.00 [Tugu Monas], 06.00 - 16.00 [Kawasan Monas]",
    image: "/assets/monas.jpg",
    images: [
      "/assets/monas1.jpg",
      "/assets/monas2.jpg",
      "/assets/monas3.webp",
      "/assets/monas4.jpg",
      "/assets/monas5.jpeg",
      "/assets/monas.jpg",
    ],
    route_jaklingko: "/assest/rute_MonasJakLingko.png",
    route_krl: "assests/rute_Monas_masjid_katedral.png",
  },
  {
    id: "6",
    nama: "Masjid Istiqlal",
    deskripsi:
      "Masjid Istiqlal di Jakarta, Indonesia adalah masjid terbesar di Asia Tenggara dan masjid terbesar kesembilan di dunia dalam hal kapasitas jamaah. Dibangun untuk memperingati kemerdekaan Indonesia, masjid nasional Indonesia ini diberi nama 'Istiqlal', sebuah kata Arab untuk 'kemerdekaan'.",
    kategori: "Agama",
    lokasi: "Jakarta Pusat",
    Instagram: "@masjidistiqlal.official",
    JamOp: "04:00 - 21:00 WIB",
    image: "/assets/istiqlal.webp",
    images: [
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
    ],
  },
  {
    id: "7",
    nama: "Katedral Jakarta",
    deskripsi:
      "Katedral Jakarta adalah sebuah katedral Katolik Roma di Jakarta, Indonesia, yang juga merupakan tempat kedudukan Uskup Agung Katolik Roma Jakarta, yang saat ini menjabat sebagai Uskup Agung Ignatius Suharyo Hardjoatmodjo.",
    kategori: "Agama",
    lokasi: "Jakarta Pusat",
    Instagram: "@katedraljakarta",
    JamOp: "Senin			: Tutup \nSelasa - Sabtu	: 10.00 - 16.00 WIB \nMinggu		: Sesuai perjanjian",
    image: "/assets/katedral.png",
    images: [
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
    ],
  },
  {
    id: "8",
    nama: "Hutan Kota GBK",
    deskripsi:
      "Area hijau dengan beragam lapangan olahraga & stadion bisbol, serta restoran & area piknik.",
    kategori: "Rekreasi",
    lokasi: "Jakarta Pusat",
    Instagram: "@hutankota.gbk",
    JamOp: "Selasa - Minggu	: 06.00-10.00 WIB dan 15.00-18.00 WIB.",
    image: "/assets/hutangbk.png",
    images: [
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
    ],
  },
  {
    id: "9",
    nama: "Taman Wisata Alam Mangrove Angke Kapuk",
    deskripsi:
      "Suaka margasatwa ini memiliki banyak pohon bakau, binatang-binatang seperti monyet, dan beragam burung.",
    kategori: "Rekreasi",
    lokasi: "Jakarta Pusat",
    Instagram: "@twa_mangrove",
    JamOp: "08.00 WIB - 17.30 WIB.",
    image: "/assets/Mangrove.jpeg",
    images: [
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
    ],
  },
  {
    id: "10",
    nama: "Pantjoran Pantai Indah Kapuk",
    deskripsi:
      "Kumpulan bangunan dengan desain penuh hiasan yang mengingatkan pada Chinatown kuno, dengan toko makanan dan pedagang kaki lima.",
    kategori: "Rekreasi",
    lokasi: "Jakarta Utara",
    Instagram: "@pantjoranpik",
    JamOp: "Selasa - Minggu : 07.00 - 23.00 WIB.",
    image: "/assets/PIK.jpg",
    images: [
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
    ],
  },
  {
    id: "11",
    nama: "Taman Margasatwa Ragunan",
    deskripsi:
      "Sebuah taman 147 hektar dan berpenghuni lebih dari 2.000 ekor satwa serta ditumbuhi lebih dari 50.000 pohon membuat suasana lingkungannya sejuk dan nyaman.",
    kategori: "Taman Hiburan dan Edukasi",
    lokasi: "Jakarta Selatan",
    Instagram: "@ragunanzoo",
    JamOp: "Selasa - Minggu : 07.00 - 16.00 WIB",
    image: "/assets/ragunan.jpeg",
    images: [
      "/assets/ragunan.jpeg",
      "/assets/ragunan1.jpg",
      "/assets/ragunan2.webp",
      "/assets/ragunan3.jpg",
      "/assets/ragunan4.jpg",
    ],
  },
  {
    id: "12",
    nama: "Museum Nasional Indonesia",
    deskripsi:
      "Museum Nasional Indonesia merupakan museum arkeologi, sejarah, etnologi, dan geografis.",
    kategori: "Sejarah, Seni & Budaya",
    lokasi: "Jakarta Pusat",
    Instagram: "@museumnasionalindonesia",
    JamOp: "Selasa - Minggu : 08.00 - 16.00 WIB",
    image: "/assets/museumNasional1.jpg",
    images: [
      "/assets/museumNasional.jpg",
      "/assets/museumNasional5.jpg",
      "/assets/museumNasional2.jpg",
      "/assets/museumNasional3.jpg",
      "/assets/museumNasional4.jpg",
    ],
  },
  {
    id: "13",
    nama: "Museum Bank Indonesia",
    deskripsi:
      "Museum yang menyajikan berbagai informasi terkait dunia perbankan di Indonesia, baik sejak sebelum terbentuknya Bank Indonesia hingga periode setelahnya.",
    kategori: "Sejarah, Seni & Budaya",
    lokasi: "Jakarta Barat",
    Instagram: "@museum_bi",
    JamOp: "Selasa - Minggu : 08.00 - 15.30 WIB",
    image: "/assets/museumbi.jpg",
    images: [
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
    ],
  },
  {
    id: "14",
    nama: "Museum Tekstil",
    deskripsi:
      "Di museum ini wisatawan mempelajari sejarah dan metode seni tradisional batik Jawa.",
    kategori: "Sejarah, Seni & Budaya",
    lokasi: "Jakarta Barat",
    Instagram: "@museum_tekstiljkt",
    JamOp: "Selasa - Minggu : 09.00 - 15.00 WIB",
    image: "/assets/tekstil.jpg",
    images: [
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
    ],
  },
  {
    id: "15",
    nama: "MOJA museum",
    deskripsi:
      "Tempat kreatif yang menawarkan set interaktif penuh warna dan unik sebagai latar belakang foto.",
    kategori: "Rekreasi",
    lokasi: "Jakarta Pusat",
    Instagram: "@mojamuseum",
    JamOp: "Senin - Minggu : 11.00 - 19.30 WIB",
    image: "/assets/MOJA.jpg",
    images: [
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
    ],
  },
  {
    id: "16",
    nama: "Pasar Seni",
    deskripsi:
      "Pasar seni merupakan salah satu tempat yang mana pengunjungnya bisa berbelanja barang kerajinan khas dari sebuah daerah.",
    kategori: "Sejarah, Seni & Budaya",
    lokasi: "Jakarta Utara",
    Instagram: "@pasarseni_ancol",
    JamOp: "Senin - Minggu : 10.00 - 21.00 WIB",
    image: "/assets/pasarseni.jpeg",
    images: [
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
    ],
  },
  {
    id: "17",
    nama: "Gereja Sion",
    deskripsi:
      "Gereja Sion dikenal juga dengan nama Portugeesche Buitenkerk atau Gereja Portugis. Disebut Gereja Portugis karena saat kapal-kapal Portugis singgah di pelabuhan Sunda Kelapa dan ditandatangani perjanjian dengan raja Hindu-Sunda. Gereja ini merupakan gedung tertua di Jakarta yang masih dipakai untuk tujuan semula seperti saat awal didirikan. ",
    kategori: "Agama",
    lokasi: "Jakarta Barat",
    Instagram: "@gpibsionjkt",
    JamOp: "Minggu : 07.00 & 10.00 WIB",
    image: "/assets/SION.jpg",
    images: [
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
    ],
  },
  {
    id: "18",
    nama: "Museum Layang-Layang Indonesia",
    deskripsi:
      "Museum ini terdapat berbagai informasi yang berkaitan dengan layang-layang, baik berupa tulisan, gambar, maupun video. Selain menyediakan informasi tentang layang-layang, museum ini juga menyediakan kegiatan pendukung, seperti melukis payung, melukis kaos, melukis wayang mini, membatik, membuat dan mewarnai Layang-layang.",
    kategori: "Sejarah, Seni & Budaya",
    lokasi: "Jakarta Selatan",
    Instagram: "@museumlayanglayang.id",
    JamOp: "Senin - Minggu : 09.00 - 16.00 WIB",
    image: "/assets/layang.jpeg",
    images: [
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
    ],
  },
  {
    id: "19",
    nama: "Kepulauan Seribu",
    deskripsi:
      "Kepulauan Seribu adalah sebuah kepulauan yang terletak di Kabupaten Administrasi Kepulauan Seribu, Daerah Khusus Ibukota Jakarta, Indonesia. Jumlah pulau di Kepulauan Seribu sebanyak 110 pulau dengan kawasan seluas 1.180 hektare yang memanjang dari selatan ke utara. Ukuran pulau-pulau di Kepulauan Seribu tergolong kecil dengan datarann yang landai dan terbagi menjadi beberapa gugus pulau.",
    kategori: "Rekreasi",
    lokasi: "Jakarta Utara",
    Instagram: "@kabupatenkepulauanseribu",
    JamOp: "08.00 - 18.00 WIB",
    image: "/assets/seribu.jpeg",
    images: [
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
    ],
  },
  {
    id: "20",
    nama: "Museum Keramik",
    deskripsi:
      "Museum ini menyimpan koleksi seni Indonesia yang menarik selama berabad-abad. Pecinta keramik dan tembikar akan menganggap museum ini sangat bermanfaat.",
    kategori: "Sejarah, Seni & Budaya",
    lokasi: "Jakarta Barat",
    Instagram: "@museum_keramikjkt",
    JamOp: "Selasa - Minggu : 09.00 - 15.00 WIB",
    image: "/assets/KERAMIK.jpeg",
    images: [
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
      "/assets/",
    ],
  },
];

module.exports = { destinations };
