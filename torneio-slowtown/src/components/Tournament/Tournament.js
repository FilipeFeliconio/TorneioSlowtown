import "./tournament.css";
import React, { useState } from "react";

export default function Tournament() {
  const [competidores, setCompetidores] = useState([
    "Competidor 1",
    "Competidor 2",
    "Competidor 3",
    "Competidor 4",
    "Competidor 5",
    "Competidor 6",
    "Competidor 7",
    "Competidor 8",
  ]);

  const [vencedor, setVencedor] = useState(null);

  const handleChange = (index, event) => {
    const updatedCompetidores = [...competidores];
    updatedCompetidores[index] = event.target.value;
    setCompetidores(updatedCompetidores);
  };

  const handleVencedor = () => {
    const vencedor1 = competidores[0] > competidores[1] ? competidores[0] : competidores[1]
    const vencedor2 = competidores[2] > competidores[3] ? competidores[2] : competidores[3]
    const vencedor3 = competidores[4] > competidores[5] ? competidores[4] : competidores[5]
    const vencedor4 = competidores[6] > competidores[7] ? competidores[6] : competidores[7]

    const semi1 = vencedor1 > vencedor2 ? vencedor1 : vencedor2
    const semi2 = vencedor3 > vencedor4 ? vencedor3 : vencedor4

    const finalista1 = semi1 > semi2 ? semi1 : semi2;

    const vencedorFinal = finalista1;
    setVencedor(vencedorFinal);
  };

  const renderChaves = () => {
    const chaves = [];

    for (let i = 0; i < competidores.length; i += 2) {
      const competidor1 = competidores[i];
      const competidor2 = competidores[i + 1];

      chaves.push(
        <div className="chave" key={i}>
          <input
            type="text"
            value={competidor1}
            placeholder="Competidor 1"
            onChange={(event) => handleChange(i, event)}
          />
          <span>vs</span>
          <input
            type="text"
            value={competidor2}
            placeholder="Competidor 2"
            onChange={(event) => handleChange(i + 1, event)}
          />
        </div>
      );
    }

    return chaves;
  };

  return (
    <div className="container-tournament">
      <h1>Chaves do Campeonato</h1>
      {renderChaves()}
      <button onClick={handleVencedor}>Determinar Vencedor</button>
      {vencedor && <div className="vencedor">O vencedor é o {vencedor}</div>}
    </div>
  );
}
