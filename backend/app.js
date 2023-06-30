const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const AtletaRoutes = require("./src/routes/AtletaRoutes");
const EtapaRoutes = require("./src/routes/EtapaRoutes");
const JuizRoutes = require("./src/routes/JuizRoutes");
const LutaRoutes = require("./src/routes/LutaRoutes");

app.use(cors());
app.use(bodyParser.json());

app.use(AtletaRoutes);
app.use(EtapaRoutes);
app.use(JuizRoutes);
app.use(LutaRoutes);

module.exports = app;