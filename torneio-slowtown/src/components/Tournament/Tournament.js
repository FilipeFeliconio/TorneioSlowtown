import React, { useState } from "react";
import "./tournament.css";

function ChavesDoCampeonato() {
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

  const [vencedoresChave1, setVencedoresChave1] = useState([]);
  const [vencedoresChave2, setVencedoresChave2] = useState([]);
  const [vencedorFinal, setVencedorFinal] = useState(null);

  const handleChange = (index, event, chave) => {
    const updatedCompetidores = [...competidores];
    updatedCompetidores[index] = event.target.value;
    setCompetidores(updatedCompetidores);
  };

  const handleDeterminarVencedor = (chave) => {
    if (chave === 1) {
      const vencedoresChave1 = [
        competidores[0] > competidores[1] ? competidores[0] : competidores[1],
        competidores[2] > competidores[3] ? competidores[2] : competidores[3],
        competidores[4] > competidores[5] ? competidores[4] : competidores[5],
        competidores[6] > competidores[7] ? competidores[6] : competidores[7],
      ];
      setVencedoresChave1(vencedoresChave1);
    } else if (chave === 2) {
      const vencedoresChave2 = [
        vencedoresChave1[0] > vencedoresChave1[1]
          ? vencedoresChave1[0]
          : vencedoresChave1[1],
        vencedoresChave1[2] > vencedoresChave1[3]
          ? vencedoresChave1[2]
          : vencedoresChave1[3],
      ];
      setVencedoresChave2(vencedoresChave2);
    } else if (chave === 3) {
      const vencedorFinal =
        vencedoresChave2[0] > vencedoresChave2[1]
          ? vencedoresChave2[0]
          : vencedoresChave2[1];
      setVencedorFinal(vencedorFinal);
    }
  };

  const renderChave = (competidoresChave, chave) => {
    return (
      <>
        <div className="chave">
          {competidoresChave.map((competidor, index) => (
            <div key={index} className="competidor">
              <input
                type="text"
                value={competidor || ""}
                placeholder={`Competidor ${index + 1}`}
                onChange={(event) => handleChange(index, event, chave)}
              />
            </div>
          ))}
          <button onClick={() => handleDeterminarVencedor(chave)}>
            Determinar Vencedor
          </button>
        </div>
      </>
    );
  };

  return (
    <div>
      <h1>Chaves do Campeonato</h1>

      <h2>Chave 1</h2>
      {renderChave(competidores, 1)}

      <h2>Chave 2</h2>
      {vencedoresChave1.length === 4 && renderChave(vencedoresChave1, 2)}

      <h2>Chave 3</h2>
      {vencedoresChave2.length === 2 && renderChave(vencedoresChave2, 3)}

      {vencedorFinal && (
        <div className="vencedor-final">
          <h2>Vencedor Final</h2>
          <div>{vencedorFinal}</div>
        </div>
      )}
    </div>
  );
}

export default ChavesDoCampeonato;
