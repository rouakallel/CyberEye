
  
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
      <div>
        <h3>Data:</h3>
        <strong className="">Name:</strong> {data.name}<br />
        <strong>Type:</strong> {data.type}<br />
        <strong>ID:</strong> {data.id}<br />
       { /*<strong>Self Link:</strong> {data.links.self}<br />*/}
        <br />
        <h3>Attributes:</h3>
        <strong>Popularity Ranks:</strong> {renderPopularityRanks(data.attributes.popularity_ranks)}<br />
        <strong>Last Analysis Stats:</strong> {JSON.stringify(data.attributes.last_analysis_stats)}<br />
        <strong>Reputation:</strong> {data.attributes.reputation}<br />
        <strong>Last Analysis Results:</strong> {renderLastAnalysisResults(data.attributes.last_analysis_results)}<br />
        <strong>TLD:</strong> {data.attributes.tld}<br />
        <strong>Last Modification Date:</strong> {data.attributes.last_modification_date}<br />
        <strong>Categories:</strong> {JSON.stringify(data.attributes.categories)}<br />
        <strong>Total Votes:</strong> {JSON.stringify(data.attributes.total_votes)}<br />
      </div>
    );
  };
  export default renderData