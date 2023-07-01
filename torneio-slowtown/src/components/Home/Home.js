import "./home.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-home">
      <h1>Torneio Slowtown</h1>
      <Link className="link" to="/tournament">
        Torneio
      </Link>
      <Link className="link" to="/listing">
        Competidores
      </Link>
      <Link className="link" to="/login">
        Login
      </Link>
      <Link className="link" to="/signup">
        Cadastre-se
      </Link>
      
    </div>
  );
}

export default Login;
