const { getAllDestinations, getDestinationsForHomepage } = require("./handler");
const { destinations } = require("./destinations");
const express = require("express");
const router = express.Router();

router.get("/getDestinationsForHomepage", (req, res) =>
  getDestinationsForHomepage(req, res)
);

router.get("/getAllDestinations", (req, res) => getAllDestinations(req, res));

router.get("/getDestination/:destination", (req, res) => {
  let data = [];

  for (let i = 0; i < destinations.length; i++) {
    if (
      destinations[i].nama.replace(/\s+/g, "-").toLowerCase() ===
      req.params.destination.replace(/\s+/g, "-").toLowerCase()
    ) {
      data.push(destinations[i]);
    }
  }

  res.send({
    status: "success",
    data,
  });
});

module.exports = router;
