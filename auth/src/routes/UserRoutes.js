const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const UserController = require("../controllers/UserController")

const routes = Router();

routes.post("/usuario", UserController.createUser);
routes.get("/usuario", verifyJWT, UserController.getAllUsers);
routes.get("/usuario/:user_id", verifyJWT, UserController.getUser);
routes.delete("/usuario/:user_id", verifyJWT, UserController.removeUser);
routes.put("/usuario/:user_id", verifyJWT, UserController.updateUser);

module.exports = routes;