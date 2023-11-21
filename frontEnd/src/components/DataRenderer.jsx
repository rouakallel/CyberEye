
  const renderData = (data) => {
    return (
      <>
      <table className="table table-hover table-font">
  <tbody>

    <tr>
      <th className="table-light" >Name:</th>
      <td>{data.name}</td>
    </tr>
    <tr>
      <th className="table-light">Type:</th>
      <td>{data.data.type}</td>
    </tr>
   
    
    <tr>
      <th className="table-light">Last Analysis Stats:</th>
      <td>
        <table>
          <thead>
            <tr>
              <th className="table-light">Type</th>
              <th className="table-light">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>harmless</td>
              <td>{data.data.attributes.last_analysis_stats.harmless}</td>
            </tr>
            <tr>
              <td>malicious</td>
              <td>{data.data.attributes.last_analysis_stats.malicious}</td>
            </tr>
            <tr>
              <td>suspicious</td>
              <td>{data.data.attributes.last_analysis_stats.suspicious}</td>
            </tr>
            <tr>
              <td>undetected</td>
              <td>{data.data.attributes.last_analysis_stats.undetected}</td>
            </tr>
            <tr>
              <td>timeout</td>
              <td>{data.data.attributes.last_analysis_stats.timeout}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th className="table-light">Reputation:</th>
      <td>{data.data.attributes.reputation}</td>
    </tr>
    <tr>
      <th className="table-light">TLD:</th>
      <td>{data.data.attributes.tld}</td>
      </tr>
      <tr>
      <th className="table-light">Last Modification Date:</th>
      <td>{data.data.attributes.last_modification_date}</td>
      </tr>
      <tr>
      <th className="table-light">Categories:</th>
      <td>{JSON.stringify(data.data.attributes.categories)}</td>
    </tr>
    <tr>
      <th className="table-light">Total Votes:</th>
      <td>{JSON.stringify(data.data.attributes.total_votes)}</td>
    </tr>
  </tbody>
</table>
      </>
    );
  };
  export default renderData