import React from "react";
import "./listing.css";

function CompetidoresPage() {
  const competidores = [
    {
      nome: "Miguel Lima",
      cpf: "123.456.789-01",
      email: "miguellima@gmail.com",
      peso: "75kg",
      categoria: "Pena",
      patrocinador: "Monster",
    },
    {
      nome: "Claudio Souza",
      cpf: "234.567.890-12",
      email: "claudiosouza@gmail.com",
      peso: "80kg",
      categoria: "Pena",
      patrocinador: "RedBull",
    },
    {
      nome: "Andre Marques",
      cpf: "234.567.890-12",
      email: "andremarques@gmail.com",
      peso: "90kg",
      categoria: "Medio",
      patrocinador: "Camil",
    },
    {
      nome: "Anderson Rogerio",
      cpf: "234.567.890-12",
      email: "andersonrogerio@gmail.com",
      peso: "95kg",
      categoria: "Medio",
      patrocinador: "Spotify",
    },
    {
      nome: "Tyler Joseph",
      cpf: "234.567.890-12",
      email: "tylerjoseph@gmail.com",
      peso: "75kg",
      categoria: "Pena",
      patrocinador: "Trench",
    },
    {
      nome: "Josh Dun",
      cpf: "234.567.890-12",
      email: "joshdun@gmail.com",
      peso: "75kg",
      categoria: "Pena",
      patrocinador: "Dema",
    },
    {
      nome: "Daniel Santiago",
      cpf: "234.567.890-12",
      email: "danielsantiago@gmail.com",
      peso: "77kg",
      categoria: "Pena",
      patrocinador: "TAM",
    },
    {
      nome: "Carlos Icaro",
      cpf: "234.567.890-12",
      email: "carlosicaro@gmail.com",
      peso: "74kg",
      categoria: "Pena",
      patrocinador: "Ford",
    },
  ];

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
