import "./home.css";
import { Link } from "react-router-dom";

function Login() {
  const token = localStorage.getItem("token")
  const user = localStorage.getItem("user")
  const is_admin = localStorage.getItem("admin")

  console.log('token', token)
  console.log('is_admin', is_admin)

  return (
    <div className="container-home">
      {token ? (
        <div className="rosto">
        Ola, {user ?? 'Icone Rosto'}
      </div>
      ) : (
        <div className="rosto">
        Icone Rosto
      </div>
      )}
      
      <div>
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
        <Link className="link" to="/signup-atleta">
          Cadastro Atleta
        </Link>
        <Link className="link" to="/signup-admin">
          Cadastro Admin
        </Link>
        {is_admin && (
          <Link className="link" to="/signup-referee">
          Cadastro Juiz
        </Link>
        )}
      </div>
    </div>
  );
}

export default Login;
