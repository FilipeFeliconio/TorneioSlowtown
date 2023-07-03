import React, { useState } from "react";
import signUpRefereeService from "../../services/signup-referee";
import { useNavigate } from "react-router-dom";

function SignupReferee() {
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userDataReferee = {
      nome: nome,
    };

    signUpRefereeService(userDataReferee);
    navigate("/");
  };

  return (
    <div className="container-signup">
      <div className="container-form">
        <h2>Cadastrar Juiz</h2>
        <form onSubmit={handleSubmit}>
          <div className="container-division">
            <input
              required
              type="text"
              placeholder="Nome do Juiz"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default SignupReferee;
