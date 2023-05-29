 
  const renderHost = (hostData) => {
    return (
      <>
      
      <ul>

      <li> <strong>Region Code:</strong> {hostData.regionCode}<br /> </li>
      <li> <strong>Area Code:</strong> {hostData.areaCode}<br /></li>
      <li> <strong>Domains:</strong> {hostData.domains.join(', ')}<br /></li>
      <li> <strong>Hostnames:</strong> {hostData.hostnames.join(', ')}<br /></li>
      <li> <strong>Country Code:</strong> {hostData.countryCode}<br /></li>
      <li>  <strong>Organization:</strong> {hostData.org}<br /></li>
      <li>  <strong>Ports Ouverts :</strong> <ul>
        {hostData.ports.map((port, index) => (
          <li key={index}>{port}</li>
        ))}
      </ul>
      </li>
      
    </ul>
     
      </>
    );
  };
  export default renderHost