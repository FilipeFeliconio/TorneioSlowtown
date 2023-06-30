const {Router} = require("express");
const EtapaController = require("../controllers/EtapaController");
const {verifyJWT} = require("../middleware/auth/AuthenticationMiddleware");
const routes = Router();

routes.post("/etapa", verifyJWT, EtapaController.create);
routes.get("/etapa", verifyJWT, EtapaController.getAll);
routes.get("/etapa/:id", verifyJWT, EtapaController.get);
routes.put("/etapa/:id", verifyJWT, EtapaController.update);
routes.delete("/etapa/:id", verifyJWT, EtapaController.remove);

module.exports = routes;