const {Router} = require("express");
const LutaController = require("../controllers/LutaController");
const {verifyJWT} = require("../middleware/auth/AuthenticationMiddleware");
const routes = Router();

routes.post("/luta", LutaController.create);
routes.get("/luta", verifyJWT, LutaController.getAll);
routes.get("/luta/:id", verifyJWT, LutaController.get);
routes.get("/luta/etapa/:etapa", verifyJWT, LutaController.getByEtapa);
routes.put("/luta/:id", verifyJWT, LutaController.update);
routes.delete("/luta/:id", verifyJWT, LutaController.remove);

module.exports = routes;