const destinations = [
  {
    id: 1,
    nama: "Kota Tua",
    deskripsi:
      "Jika anda tidak menyukai tempat wisata yang berisik, mungkin Anda bisa mencoba ke Kota Tua! Destinasi wisata yang menyimpan segudang pengetahuan sejarah yang dapat menjadi wawasan baru bagimu. Gedung-gedung khas peninggalan bangunan tua bergaya kolonial Belanda yang begitu menawan. Letaknya di sebelah utara dari pusat jakarta, kota tua dapat dijangkau melalui berbagai moda transportasi umum seperti bus Transjakarta, KRL Commuter Line, dan MRT.\n\nDengan berjalan diantara bangunan-bangunan bersejarah di Kota Tua, Anda dapat merasakan suasana zaman dulu yang dirasakan oleh nenek moyang. Jika merasa lelah untuk berjalan kaki, anda dapat menyewa sepeda ontel yang pastinya mudah untuk ditemukan disana.\n\nSelain itu juga terdapat museum Fatahillah, yang merupakan bekas balai kota sekaligus sebagai tempat pengadilan dan juga penjara bawah tanah. Selain museum Fatahillah,ada tempat lain yang bisa dikunjungi seperti museum Wayang, museum Seni Rupa dan Keramik, museum Bank Indonesia, dan lainnya yang tidak kalah menarik. Sekarang adalah saatnya kamu berkungjung, karena Kota Tua menunggu kedatangan Anda!",
    kategori: "Sejarah, Seni & Budaya",
    lokasi: "Jakarta Barat",
    Alamat: "Jl Kalibesar Timur No. 30 Kel. Pinangsia",
    instagram: "@kotatua.jkt",
    jamOp: "08.00 - 21.00 WIB",
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
      "Bingung menghabiskan waktu liburan dimana? TMII jawabnya! Taman Mini Indonesia Indah(TMII) adalah salah satu tempat wisata yang wajib kalian kunjungi. Berlokasi di Jakarta Timur dan memiliki area seluas ± 147 hektare atau 1,47 kilometer persegi.\n\nDestinasi wisata yang mempersembahkan kekayaan budaya, keberagaman serta keindahan alam Nusantara dalam satu tempat. Kalian bisa menikmati perjalanan yang menakjubkan melintasi 34 provinsi, dengan replika bangunan, tarian, dan kebudayaan unik setiap daerah.\n\nDisamping itu, di tengah-tengah TMII terdapat sebuah danau yang menggambarkan miniatur kepulauan Indonesia di tengahnya, kereta gantung, berbagai museum, dan Teater Keong Mas), berbagai sarana rekreasi ini menjadikan TMIII sebagai salah satu kawasan wisata terkemuka di ibu kota.\n\nRasakan keajaiban alam, kekayaan budaya, dan keindahan arsitektur tradisional yang memikat hati di setiap sudutnya. Temukan pesona Indonesia dari Sabang hingga Merauke di Taman Mini Indonesia Indah (TMII)!",
    kategori: "Taman Hiburan dan Edukasi",
    instagram: "@tmiiofficial",
    jamOp: "05.00 - 20.00 WIB",
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
      "Habis diputusin pacar atau sedang melewati masa sulit? Nah, Anda bisa mencoba meluapkan emosi dan rasa kesal dengan berteriak di tempat ini! Dufan yang merupakan singkatan dari Dunia Fantasi, menyediakan berbagai wahana permainan yang spektakuler dan menantang.\n\nDufan terdiri dari berbagai kawasan bertema yang menakjubkan. Beberapa wahana yang paling populer adalah wahana ekstrem seperti roller coaster Halilintar, Cyclone, dan Bianglala raksasa. Adapun Dunia Petualangan yang menghadirkan suasana hutan belantara dengan animatronik binatang buas dalam wahana Hutan Kaya.\n\nSetelah merasa lelah dengan wahana ekstrem, Anda dapat bermain wahana komedi putar yang membuat anda lebih rileks sehabis berteriak. Nikmati keseruannya di taman rekreasi ini yang akan selalu menyajikan pengalaman tak terlupakan bagi setiap pengunjungnya.",
    kategori: "Rekreasi",
    instagram: "@infodufan",
    jamOp:
      "Senin - Jumat	: 10.00 - 17.00 WIB \nSabtu - Minggu : 10.00 - 19.00 WIB",
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
      "Taman Impian Jaya Ancol adalah taman rekreasi tematik terbesar dan terlengkap di Jakarta. Terletak di Jakarta Utara berhadapan dengan Laut Jawa, Taman Impian Jaya Ancol merupakan kawasan resor tepi pantai yang berdiri di atas lahan seluas 80 hektar. Taman rekreasi ini menyediakan berbagai fasilitas, mulai dari olahraga air dan pantai, wahana seru, kolam renang, hingga Eco-Park dan pertunjukan spertakuler bertabur bintang kaliber internasional.\n\nDunia Fantasi (Dufan) menawarkan 27 wahana mengasyikkan, antara lain roller coaster raksasa, air terjun Niagara, Tornado, dan juga Istana Boneka. Di Atlantis Water Adventure terdapat 8 kolam renang berukuran besar yang dilengkapi dengan efek ombak dan wahana seluncur.\n\nAda pula Seaworld, dimana Anda bisa berjalan di bawah terowongan kaca sambil menyaksikan maraknya kehidupan di bawah air. Selain itu, terdapat Pasar Seni, Eco-Park, Ocean Park, serta tiga buah hotel berbintang dimana Anda bisa menikmati liburan dan akhir pekan dalam kenyamanan di tepi pantai.\n\nMari kita berpetualang dan jelajahi keajaiban lainnya di Taman Impian Jaya Ancol!",
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
      "Siapa yang tidak tahu dengan ikon Utama Kota Jakarta yang satu ini? Monas atau yang dikenal sebagai monumen nasional, merupakan salah satu bangunan bersejarah yang diresmikan pada tahun 1961 telah menyimpan banyak sekali cerita sejarah Ibu Kota. Monas dibangun sebagai bentuk mengenang dan melestarikan perjuangan bangsa Indonesia pada masa revolusi kemerdekaan 1945, agar membangkitkan inspirasi dan semangat patriotisme generasi saat ini dan mendatang. Didesain dengan tinggi 132 meter serta dihiasi puncak api yang melambangkan semangat dan perjuangan Indonesia menjadikannya sangat cocok sebagai landmark Ibu Kota. Monas juga tidak hanya menjadi tujuan wisata populer bagi wisatawan lokal dan internasional, tetapi juga menjadi tempat untuk berbagai acara dan perayaan nasional, seperti peringatan Hari Kemerdekaan Indonesia pada tanggal 17 Agustus setiap tahun. Sebagai simbol nasional, Monas memiliki nilai sejarah dan simbolis yang kuat bagi bangsa Indonesia. Monas juga menjadi pusat kegiatan budaya dan acara-acara nasional, seperti perayaan Hari Kemerdekaan Indonesia yang diadakan setiap tahun. Dengan sejarah yang kaya dan pemandangannya yang indah, Monas tetap menjadi destinasi yang wajib dikunjungi bagi siapa pun yang ingin mengenal lebih dekat keindahan dan keberagaman Indonesia.",
    kategori: "Taman Hiburan dan Edukasi",
    instagram: "@monumen.nasional",
    jamOp:
      "Selasa - Minggu : 08.00 - 15.00 [Tugu Monas], 06.00 - 16.00 [Kawasan Monas]",
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
    Alamat:
      "Jl. Taman Wijaya Kusuma, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710",
    instagram: "@masjidistiqlal.official",
    jamOp: "04:00 - 21:00 WIB",
    image: "/assets/istiqlal.webp",
    images: ["/assets/", "/assets/", "/assets/", "/assets/", "/assets/"],
  },
  {
    id: "7",
    nama: "Katedral Jakarta",
    deskripsi:
      "Katedral Jakarta adalah sebuah katedral Katolik Roma di Jakarta, Indonesia, yang juga merupakan tempat kedudukan Uskup Agung Katolik Roma Jakarta, yang saat ini menjabat sebagai Uskup Agung Ignatius Suharyo Hardjoatmodjo.",
    kategori: "Agama",
    lokasi: "Jakarta Pusat",
    Alamat:
      "Jl. Katedral No.7B, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710",
    instagram: "@katedraljakarta",
    jamOp:
      "Senin			: Tutup \nSelasa - Sabtu	: 10.00 - 16.00 WIB \nMinggu		: Sesuai perjanjian",
    image: "/assets/katedral.png",
    images: ["/assets/", "/assets/", "/assets/", "/assets/", "/assets/"],
  },
  {
    id: "8",
    nama: "Hutan Kota GBK",
    deskripsi:
      "Area hijau dengan beragam lapangan olahraga & stadion bisbol, serta restoran & area piknik.",
    kategori: "Rekreasi",
    lokasi: "Jakarta Pusat",
    Alamat:
      "Jl. Katedral No.7B, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710",
    instagram: "@hutankota.gbk",
    jamOp: "Selasa - Minggu	: 06.00-10.00 WIB dan 15.00-18.00 WIB.",
    image: "/assets/hutangbk.png",
    images: ["/assets/", "/assets/", "/assets/", "/assets/", "/assets/"],
  },
  {
    id: "9",
    nama: "Taman Wisata Alam Mangrove Angke Kapuk",
    deskripsi:
      "Suaka margasatwa ini memiliki banyak pohon bakau, binatang-binatang seperti monyet, dan beragam burung.",
    kategori: "Rekreasi",
    lokasi: "Jakarta Pusat",
    Alamat:
      "Jalan Garden House, Kamal Muara, Kecamatan Penjaringan, Daerah Khusus Ibukota Jakarta 14470, Indonesia.",
    instagram: "@twa_mangrove",
    jamOp: "08.00 WIB - 17.30 WIB.",
    image: "/assets/Mangrove.jpeg",
    images: ["/assets/", "/assets/", "/assets/", "/assets/", "/assets/"],
  },
  {
    id: "10",
    nama: "Pantjoran Pantai Indah Kapuk",
    deskripsi:
      "Kumpulan bangunan dengan desain penuh hiasan yang mengingatkan pada Chinatown kuno, dengan toko makanan dan pedagang kaki lima.",
    kategori: "Rekreasi",
    lokasi: "Jakarta Utara",
    Alamat: "Pantjoran PIK, Daerah Khusus Ibukota Jakarta 14460, Indonesia.",
    instagram: "@pantjoranpik",
    jamOp: "Selasa - Minggu : 07.00 - 23.00 WIB.",
    image: "/assets/PIK.jpg",
    images: ["/assets/", "/assets/", "/assets/", "/assets/", "/assets/"],
  },
];

module.exports = { destinations };
