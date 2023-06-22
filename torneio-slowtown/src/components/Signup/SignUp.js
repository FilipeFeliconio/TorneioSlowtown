import "./signup.css";

function Signup() {
  const test = () => {
    console.log("test signup");
  };

  return (
    <div className="container-signup">
      <div className="container-form">
        <h2>Cadastre-se</h2>
        <form>
          <div className="container-division">
            <input required type="text" placeholder="Nome" />
            <input required type="password" placeholder="CPF" />
            <input required type="password" placeholder="Email" />
          </div>
          <div className="container-division">
            <input required type="password" placeholder="Peso" />
            <input required type="password" placeholder="Senha" />
            <input type="password" placeholder="Patrocinador" />
          </div>
          <button type="submit" onClick={test}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
