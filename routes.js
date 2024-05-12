const { getAllDestinations, getDestinationsForHomepage } = require("./handler");
const { destinations } = require("./destinations");

const routes = [
  {
    method: "GET",
    path: "/jakartacityescape/api/getDestinationsForHomepage",
    handler: getDestinationsForHomepage,
  },
  {
    method: "GET",
    path: "/jakartacityescape/api/getAllDestinations",
    handler: getAllDestinations,
  },
  {
    method: "GET",
    path: "/jakartacityescape/api/getDestination/{destination}",
    handler: (request) => {
      let data = [];

      for (let i = 0; i < destinations.length; i++) {
        if (
          destinations[i].nama.replace(/\s+/g, "-").toLowerCase() ===
          request.params.destination.replace(/\s+/g, "-").toLowerCase()
        ) {
          data.push(destinations[i]);
        }
      }

      return {
        status: "success",
        data,
      };
    },
  },
];

module.exports = { routes };
