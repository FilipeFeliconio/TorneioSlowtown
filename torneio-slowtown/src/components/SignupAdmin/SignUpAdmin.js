import React, { useState } from "react";
import signUp  from "../../services/signup";

function SignupAdmin() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      primeiro_nome: nome,
      ultimo_nome: sobrenome,
      email: email,
      senha: senha,
      is_admin: true,
    };
    
    signUp(userData);
  };

  return (
    <div className="container-signup">
      <div className="container-form">
        <h2>Cadastre-se - Admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="container-division">
            <input
              required
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Sobrenome"
              value={sobrenome}
              onChange={(event) => setSobrenome(event.target.value)}
            />
          </div>
          <div className="container-division">
            <input
              required
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default SignupAdmin;
