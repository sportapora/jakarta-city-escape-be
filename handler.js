const { destinations } = require("./destinations");

const getAllDestinations = (req, res) => {
  res.status(200);
  res.send({
    status: "success",
    data: { destinations },
  });
};

const getDestinationsForHomepage = (req, res) => {
  res.status(200);
  res.send({
    status: "success",
    data: [
      {
        id: 1,
        nama: "Kota Tua",
        deskripsi:
          "Jika anda tidak menyukai tempat wisata yang berisik dan terlalu kekanak-kanakan, mungkin Anda bisa mencoba ke Kota Tua! Destinasi wisata ini menyimpan segudang pengetahuan sejarah yang dapat menjadi wawasan baru bagimu. Gedung-gedung di wilayah tersebut berupa peninggalan bangunan-bangunan tua bergaya kolonial Belanda yang begitu menawan.",
        kategori: "Sejarah dan Seni & Budaya",
        image: "../assets/kotu-hero.jpg",
      },
      {
        id: 2,
        nama: "Dunia Fantasi (Dufan)",
        deskripsi:
          "Habis diputusin pacar atau sedang melewati masa sulit? Mungkin Anda bisa mencoba meluapkan emosi dan rasa kesalmu dengan berteriak di tempat ini! Dufan yang merupakan singkatan dari Dunia Fantasi, menyediakan berbagai wahana permainan yang spektakuler dan menantang.",
        kategori: "",
        image: "../assets/dufan.webp",
      },
      {
        id: 3,
        nama: "Taman Mini Indonesia Indah (TMII)",
        deskripsi:
          "Bingung menghabiskan waktu liburan dimana? TMII jawabnya! TMII atau Taman Mini Indonesia Indah adalah salah satu tempat wisata yang wajib kalian kunjungi. Bertempat di Jakarta Timur dan memiliki area seluas ±  147 hektare atau 1,47 kilometer persegi.",
        kategori: "",
        image: "../assets/tmii.png",
      },
    ],
  });
};

module.exports = {
  getAllDestinations,
  getDestinationsForHomepage,
};
