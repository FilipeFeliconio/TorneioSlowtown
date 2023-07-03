import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../services/login";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const forceReload = () => {
    document.location.reload();
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    login(email, senha);
    navigate("/");

    setTimeout(() => {
      forceReload();
    }, [500]);
  };

  return (
    <div className="container-home">
      <div className="container-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
          <button type="submit" to="/">
            Entrar
          </button>
        </form>
        <Link className="dont-have-acc" to="/signup-admin">
          Não tem uma conta? Cadastre-se
        </Link>
        <Link className="dont-have-acc" to="/signup-atleta">
          Cadastre-se como atleta
        </Link>
      </div>
    </div>
  );
}

export default Login;
