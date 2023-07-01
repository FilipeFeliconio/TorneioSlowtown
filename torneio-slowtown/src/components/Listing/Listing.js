import { React, useState } from "react";
import "./listing.css";
import listCompetitors from "../../services/competitors";

function CompetidoresPage() {
  const competidoresRaw = listCompetitors();
  const promise1 = Promise.resolve(competidoresRaw);
  const [competidores, setCompetidores] = useState();

  promise1.then((value) => {
    setCompetidores(value);
  });

  console.log("competidores", competidores.data);

  const juizes = ["Juiz 1", "Juiz 2"];

  return (
    <div>
      <h1>Competidores</h1>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>E-mail</th>
            <th>Peso</th>
            <th>Categoria</th>
            <th>Patrocinador</th>
          </tr>
        </thead>
        <tbody>
          {competidores.map((competidor, index) => (
            <tr key={index}>
              <td>{competidor.nome}</td>
              <td>{competidor.cpf}</td>
              <td>{competidor.email}</td>
              <td>{competidor.peso}</td>
              <td>{competidor.categoria}</td>
              <td>{competidor.patrocinador}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Juízes</h2>
      <ul>
        {juizes.map((juiz, index) => (
          <li key={index}>{juiz}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompetidoresPage;
