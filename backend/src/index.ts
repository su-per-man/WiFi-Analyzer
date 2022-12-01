const express = require("express");
const cors = require("cors");
const app = express();
const si = require("systeminformation");

app.use(cors());
app.listen(3001, () => {
  console.log("listening on port 3001");
});

app.get("/info", (_req, res) => {
  si.wifiNetworks().then((data) => res.send(data));
});
