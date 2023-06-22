const {Router} = require("express");
const UsuarioController = require("../../controllers/app/UsuarioController");
const {verifyJWT} = require("../../middleware/auth/AuthenticationMiddleware");
const routes = Router();

routes.post("/usuario", UsuarioController.create);
routes.get("/usuario/:id_usuario", verifyJWT, UsuarioController.getUser);
routes.delete("/usuario/:id_usuario", verifyJWT, UsuarioController.remove);
routes.put("/usuario/:id_usuario", verifyJWT, UsuarioController.update);

module.exports = routes;