import React from 'react';
const renderHost = (hostData) => {
  return (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th>Adresse IP:</th>
          <td>{hostData.ip_str}</td>
        </tr>
        <tr>
          <th>Région Code:</th>
          <td>{hostData.regionCode}</td>
        </tr>
        <tr>
          <th>Area Code:</th>
          <td>{hostData.areaCode}</td>
        </tr>
        <tr>
          <th>Domains:</th>
          <td>{hostData.domains.join(', ')}</td>
        </tr>
        <tr>
          <th>Hostnames:</th>
          <td>{hostData.hostnames.join(', ')}</td>
        </tr>
        <tr>
          <th>Country Code:</th>
          <td>{hostData.countryCode}</td>
        </tr>
        <tr>
          <th>Organization:</th>
          <td>{hostData.org}</td>
        </tr>
        <tr>
          <th>Ports Ouverts:</th>
          <td>
            <ul>
              {hostData.ports.map((port, index) => (
                <li key={index}>{port}</li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default renderHost;
