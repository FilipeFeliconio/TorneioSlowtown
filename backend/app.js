const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const AuthRoutes = require("./src/routes/auth/AuthenticationRoutes");
const UserRoutes = require("./src/routes/app/UsuarioRoutes");
const AtletaRoutes = require("./src/routes/app/AtletaRoutes");
const EtapaRoutes = require("./src/routes/app/EtapaRoutes");
const JuizRoutes = require("./src/routes/app/JuizRoutes");
const LutaRoutes = require("./src/routes/app/LutaRoutes");

app.use(cors());
app.use(bodyParser.json());

app.use(AuthRoutes);
app.use(UserRoutes);
app.use(AtletaRoutes);
app.use(EtapaRoutes);
app.use(JuizRoutes);
app.use(LutaRoutes);

module.exports = app;