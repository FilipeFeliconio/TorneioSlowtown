const {Router} = require("express");
const AtletaController = require("../controllers/AtletaController");
const {verifyJWT} = require("../middleware/auth/AuthenticationMiddleware");
const routes = Router();

routes.post("/atleta", AtletaController.create);
routes.get("/atleta", verifyJWT, AtletaController.getAll);
routes.get("/atleta/:id", verifyJWT, AtletaController.get);
routes.get("/atleta/categoria/:categoria", verifyJWT, AtletaController.getByCategory);
routes.delete("/atleta/:id", verifyJWT, AtletaController.remove);

module.exports = routes;