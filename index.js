require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log("Server listening on PORT: ", port);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});
