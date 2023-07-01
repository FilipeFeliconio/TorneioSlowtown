import React, { useState } from "react";
import signUpAdminService from "../../services/signup";
import signUpAtleta from "../../services/signup-atleta";
import { useNavigate } from "react-router-dom";

function SignupAtletaFunc() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [peso, setPeso] = useState("");
  const [categoria, setCategoria] = useState("");
  const [patrocinador, setpatrocinador] = useState("");

  const navigate = useNavigate();  

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      primeiro_nome: nome,
      ultimo_nome: sobrenome,
      email: email,
      senha: senha,
      is_admin: false,
    };

    const atletaData = {
      primeiro_nome: nome,
      ultimo_nome: sobrenome,
      cpf: cpf,
      peso: peso,
      categoria: categoria,
      patrocinador: patrocinador,
    };

    signUpAdminService(userData);
    signUpAtleta(atletaData);
    navigate('/')
  };

  return (
    <div className="container-signup">
      <div className="container-form">
        <h2>Cadastre-se - Atleta</h2>
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
            <input
              required
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Peso"
              value={peso}
              onChange={(event) => setPeso(event.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Categoria"
              value={categoria}
              onChange={(event) => setCategoria(event.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Patrocinador"
              value={patrocinador}
              onChange={(event) => setpatrocinador(event.target.value)}
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default SignupAtletaFunc;
