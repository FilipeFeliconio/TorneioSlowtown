const {Router} = require("express");
const JuizController = require("../controllers/JuizController");
const {verifyJWT} = require("../middleware/auth/AuthenticationMiddleware");
const routes = Router();

routes.post("/juiz", verifyJWT, JuizController.create);
routes.get("/juiz", verifyJWT, JuizController.getAll);
routes.get("/juiz/:id", verifyJWT, JuizController.get);
routes.delete("/juiz/:id", verifyJWT, JuizController.remove);
routes.put("/juiz/:id", verifyJWT, JuizController.update);

module.exports = routes;