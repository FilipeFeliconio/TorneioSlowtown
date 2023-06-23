import "./login.css";
import { Link } from 'react-router-dom'

function Login() {
  const test = () => {
    console.log("test login");
  };

  return (
    <div className="container-home">
      <div className="container-form">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button type="submit" onClick={test}>
            Entrar
          </button>
        </form>
        <Link className="dont-have-acc" to="/signup">
          Não tem uma conta? Cadastre-se
        </Link>
      </div>
    </div>
  );
}

export default Login;
