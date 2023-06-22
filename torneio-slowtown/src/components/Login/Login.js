import "./login.css";

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
        <a className="dont-have-acc" href="/signup">
          Não tem uma conta? Cadastre-se
        </a>
      </div>
    </div>
  );
}

export default Login;
