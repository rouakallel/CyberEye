import React from 'react';
const renderHost = (data) => {
    
  return (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th>Adresse IP:</th>
          <td>{data.ip_str}</td>
        </tr>
        <tr>
          <th>Région Code:</th>
          <td>{data.region_code}</td>
        </tr>
        <tr>
          <th>Domains:</th>
          <td>{data.domains.join(', ')}</td>
        </tr>
        <tr>
          <th>Hostnames:</th>
          <td>{data.hostnames.join(', ')}</td>
        </tr>
        <tr>
          <th>Country Code:</th>
          <td>{data.country_code}</td>
        </tr>
        <tr>
          <th>Organization:</th>
          <td>{data.org}</td>
        </tr>
        <tr>
          <th>Ports Ouverts:</th>
          <td>
            <ul>
              {data.ports.map((port, index) => (
                <li key={index}>{port}</li>
              ))}
            </ul>
          </td>
        </tr>
        <tr>
          <th>CPE:</th>
          <td>
          { data.uniqueCPEArray ? (
            <ul>
              {data.uniqueCPEArray.map((cpe, index) => (
                <li key={index}>{cpe}</li>
              ))}
            </ul>
          ) : (
            <p>No CPE data available</p>
          )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default renderHost;
