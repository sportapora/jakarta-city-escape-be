"use strict";

require("dotenv").config();
const Hapi = require("@hapi/hapi");
const { routes } = require("./routes");
const port = process.env.PORT || 3001;

const init = async () => {
  const server = Hapi.server({
    port: port,
    host: "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });
  server.route(routes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});

init();
