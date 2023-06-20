const { Router } = require("express");

const AuthenticationController = require("../../controllers/auth/AuthenticationController")

const routes = Router();

routes.post("/login", AuthenticationController.doLogin);
routes.get("/logout", AuthenticationController.doLogout);

module.exports = routes;