

const renderHost = (data) => {
    
  return (
    <>
    <div className="part1">
    <div className="table1">
    <h2 className="domainheader"> Owner Details</h2>
    <table className=" table-borderless"> 
      <tr className=" row">
        <td className="col"> Domain</td>
        <td className="col">{data.domains[0]}</td>
      </tr>
      <tr className="row">
      <td className="col">Adresse IP</td>
      <td className="col">{data.ip_str}</td>
    </tr>
    </table>
    </div>
    <div className="table2">
    <h2 className="domainheader"> Localisation Details</h2>
    <table className=" table-borderless"> 
      <tr className="row ">
        <td className="col"> Country Code </td>
        <td className="col">{data.country_code}</td>
      </tr>
      <tr className="row">
      <td className="col"> Organization</td>
      <td className="col">{data.org}</td>
    </tr>
    </table>
    </div>
    </div>

    <div className="part2">
    <div className="table2">
    <h2 className="domainheader"> Other Details</h2>
    <table className=" table-borderless"> 
      <tr className="row ">
        <td className="col"> Ports ouverts</td>
        <td className="col">
        <ul>
              {data.ports.map((port, index) => (
                <li key={index}>{port}</li>
              ))}
        </ul>
        </td>
      </tr>
      <tr className="row">
      <td className="col"> CPE</td>
      <td className="col">{ data.uniqueCPEArray ? (
        <ul>
          {data.uniqueCPEArray.map((cpe, index) => (
            <li key={index}>{cpe}</li>
          ))}
        </ul>
      ) : (
        <p>No CPE data available</p>
      )}</td>
    </tr>
    </table>
    </div>
    </div>

    </>
  );
};

export default renderHost;
