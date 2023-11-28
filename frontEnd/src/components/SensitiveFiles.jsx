import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import FileTypeChart from './FileTypeChart';


const SensitiveFiles = () => {
  const [keyword1, setKeyword1] = useState("");
  const [keyword2, setKeyword2] = useState("");
  const [results, setResults] = useState(null);
  const[filetypes,setFiletypes]=useState(null)
  const navigate = useNavigate()
  const submitKeywords = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:4200/submit',
        JSON.stringify({ keyword1, keyword2 }),
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log({ keyword1, keyword2 })
      console.log(res.data);
      setResults(res.data.results);
      setFiletypes(res.data.file_type_counts)

    
    
    } catch (err) {
      console.log(err);
      console.log('the submission is failed')
    };
  };
 
  const handleClick = () => {
      navigate('/ResultsPageFiles',{state:{results}}) }
    
  const keyword1Input = (e) => {
    setKeyword1(e.target.value);
  };

  const keyword2Input = (e) => {
    setKeyword2(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitKeywords} className="form-position">
        <div className="form-group has-success">
          <label htmlFor="keyword1" className="form-label mt-1 my-2 label-domain">Enter the Type of sensitive data you want to search</label>
          <input id="keyword1" onChange={keyword1Input} type="text" value={keyword1} className="form-control input-domain" />
        </div>

        <div className="form-group has-success form-group-2">
          <label htmlFor="keyword2" className="form-label mt-1 my-2 label-domain">Enter the file type </label>
          <input id="keyword2" onChange={keyword2Input} type="text" value={keyword2} className="form-control input-domain" />
        </div>

        <button type="submit" className="btn btn-light my-2 btn-form">Submit</button>
      </form>

   
      {results && /*<DataRenderSensitive className="results-container" results={results}/> && */
      <div className="chart-container" >
      <h1 className='chart-title'>File Type Counts Chart</h1>
      <FileTypeChart  fileCounts={filetypes} />
     
      <button className="btn contact-us-button" onClick={handleClick}>Detailed Results</button>
      </div>}
      
    </>
  );
};

export default SensitiveFiles;