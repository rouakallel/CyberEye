import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import FileTypeChart from './FileTypeChart';


const SensitiveFiles = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const[filetypes,setFiletypes]=useState(null);
  const[filecount,setFilecount]=useState();

  const navigate = useNavigate()
  const submitKeywords = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:4200/submit',
        JSON.stringify({ keyword }),
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log({ keyword })
      console.log(res.data);
      setResults(res.data.results);
      setFiletypes(res.data.file_type_counts)
      setFilecount(res.data.result_count)
    
    
    } catch (err) {
      console.log(err);
      console.log('the submission is failed')
    };
  };
 
  const handleClick = () => {
      navigate('/ResultsPageFiles',{state:{results}}) }
    
  const keywordInput = (e) => {
    setKeyword(e.target.value);
  };

  

  return (
    <>
      <form onSubmit={submitKeywords} className="form-position">
        <div className="form-group has-success">
          <label htmlFor="keyword1" className="form-label mt-1 my-2 label-domain">Enter the keyword you want to search </label>
          <input id="keyword1" onChange={keywordInput} type="text" value={keyword} className="form-control input-domain" />
        </div>

  

        <button type="submit" className="btn btn-light my-2 btn-form">Submit</button>
      </form>

   
      {results && (filecount === 0 ? (
        <div className='shodanResult'>
        <p className='no-result'>No result for the keyword: {keyword}</p>
        </div>
      ) : (
        <div className='fileResult'>
        <div className="chart-container">
          <h4 className='titleh4'> The Diagram of exposed files containing the keyword {keyword}</h4>
          <FileTypeChart fileCounts={filetypes} />
          <button className="btn detailed-result-button" onClick={handleClick}>Detailed Results</button>
        </div>
        </div>
      ))}
      
      
    </>
  );
};

export default SensitiveFiles;