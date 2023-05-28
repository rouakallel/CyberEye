
  
  const renderPopularityRanks = (popularityRanks) => {
    return (
      <ul>
        {Object.entries(popularityRanks).map(([source, rank], index) => (
          <li key={index}>
            <strong>Source:</strong> {source}<br />
            <strong>Timestamp:</strong> {rank.timestamp}<br />
            <strong>Rank:</strong> {rank.rank}<br />
          </li>
        ))}
      </ul>
    );
  };
  
  const renderLastAnalysisResults = (lastAnalysisResults) => {
    return (
      <ul>
        {Object.entries(lastAnalysisResults).map(([engine, result], index) => (
          <li key={index}> 
            <strong>Engine:</strong> {engine}<br />
            <strong>Category:</strong> {result.category}<br />
            <strong>Result:</strong> {result.result}<br />
            <strong>Method:</strong> {result.method}<br />
            <strong>Engine Name:</strong> {result.engine_name}<br />
          </li>
        ))}
      </ul>
    );
  };
  
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
      <td>{data.type}</td>
    </tr>
    <tr>
      <th className="table-light">ID:</th>
      <td>{data.id}</td>
    </tr>
    <tr>
      <th className="table-light">Attributes:</th>
      <td></td>
    </tr>
    <tr>
      <th className="table-light">Popularity Ranks:</th>
      <td>{renderPopularityRanks(data.attributes.popularity_ranks)}</td>
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
              <td>{data.attributes.last_analysis_stats.harmless}</td>
            </tr>
            <tr>
              <td>malicious</td>
              <td>{data.attributes.last_analysis_stats.malicious}</td>
            </tr>
            <tr>
              <td>suspicious</td>
              <td>{data.attributes.last_analysis_stats.suspicious}</td>
            </tr>
            <tr>
              <td>undetected</td>
              <td>{data.attributes.last_analysis_stats.undetected}</td>
            </tr>
            <tr>
              <td>timeout</td>
              <td>{data.attributes.last_analysis_stats.timeout}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th className="table-light">Reputation:</th>
      <td>{data.attributes.reputation}</td>
    </tr>
    <tr>
      <th className="table-light">Last Analysis Results:</th>
      <td>{renderLastAnalysisResults(data.attributes.last_analysis_results)}</td>
    </tr>
    <tr>
      <th className="table-light">TLD:</th>
      <td>{data.attributes.tld}</td>
    </tr>
    <tr>
      <th className="table-light">Last Modification Date:</th>
      <td>{data.attributes.last_modification_date}</td>
    </tr>
    <tr>
      <th className="table-light">Categories:</th>
      <td>{JSON.stringify(data.attributes.categories)}</td>
    </tr>
    <tr>
      <th className="table-light">Total Votes:</th>
      <td>{JSON.stringify(data.attributes.total_votes)}</td>
    </tr>
  </tbody>
</table>
      </>
    );
  };
  export default renderData