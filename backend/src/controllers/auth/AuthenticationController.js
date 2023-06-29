const UserService = require("../../services/app/UserService");
const AuthService = require("../../services/auth/AuthenticationService");

module.exports = {
	async doLogin(req, res) {
		try{
			if (req.body.hasOwnProperty('email') && req.body.hasOwnProperty('senha')  ) {
				const userLogin = await UserService.getByEmail(req.body.email);
				console.log(userLogin)
				if(!userLogin){
					throw new Error();
				}

				const authenticated = await AuthService.comparePwd(req.body.senha, userLogin.senha);
			
				if(!authenticated){
					throw new Error();
				}

				const token = AuthService.signJwt(userLogin._id);
				res.set('Authorization', `Bearer ${token}`);
				res.status(200).json({
					user: userLogin,
					token: token
				});
			} else {
				res.status(400).send("Objeto de requisição deve conter um atributo email e senha");
			}
		}catch{
			res.status(400).send("Credenciais incorretas");
		}
	},

	doLogout(req, res) {
		res.set('Authorization', `Bearer `);
		res.status(200).send();
	},
}