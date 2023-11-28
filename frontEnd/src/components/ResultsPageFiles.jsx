
import { useLocation } from 'react-router-dom';
import DataRenderSensitive from './DataRenderSensitive';

const ResultsPageFiles = () => {
  const{state} = useLocation();
  const{results}=state || {};


  return (
    <div className="results-container">
      <h1>Results</h1>
       {results ? <DataRenderSensitive results={results} /> : <p> No results available </p>}
    </div>
  );
};

export default ResultsPageFiles;
