import { React, useEffect, useState } from "react";
import "./listing.css";
import listCompetitors from "../../services/competitors";
import listReferees from "../../services/referees";

function CompetidoresPage() {
  const refereesRaw = listReferees();
  const promise2 = Promise.resolve(refereesRaw);
  const [referee, setReferee] = useState([]);


  const competidoresRaw = listCompetitors();
  const promise1 = Promise.resolve(competidoresRaw);
  const [competidores, setCompetidores] = useState([]);

  useEffect(() => {
    promise1.then((value) => {
      setCompetidores(value.data);
    });

    promise2.then((value2) => {
      setReferee(value2.data);
    });
    // eslint-disable-next-line
  }, []);

  console.log("competidores", competidores);
  console.log("referee", referee);

  return (
    <div>
      <h1>Competidores</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Peso</th>
            <th>Categoria</th>
            <th>Patrocinador</th>
          </tr>
        </thead>
        <tbody>
          {competidores.map((competidor, index) => (
            <tr key={index}>
              <td>{competidor.primeiro_nome}</td>
              <td>{competidor.cpf}</td>
              <td>{competidor.peso}</td>
              <td>{competidor.categoria}</td>
              <td>{competidor.patrocinador}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Juízes</h2>
      <ul>
        {referee.map((juiz, index) => (
          <li key={index}>{juiz.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompetidoresPage;
