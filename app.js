const express = require("express");
require("./db/conn");

const routes = require("./router/router");

const app = express();
app.use(express.json());

app.use("/api", routes);

app.listen(3000, () => {
  console.log("server is started in 3000");
});
