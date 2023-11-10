
import React from 'react';
const DataRendererEmail = ({ hibpResult }) => {
  if (!hibpResult || hibpResult.length === 0) {
    return <p>Aucun résultat disponible pour cet e-mail.</p>;
  }

  return (
    <div>
      <h4>You are breached in these accounts:</h4>
      <ul>
        {hibpResult.map((item, index) => (
          <li key={index}>
            <strong>{item.Name}</strong> - {item.Description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataRendererEmail;
