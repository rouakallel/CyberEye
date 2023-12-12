import { useState } from 'react';
import axios from 'axios';


const SensitiveCode = () => {
  const [keyword1, setKeyword1] = useState("");
  const [results, setResults] = useState(null);

  const submitKeywords = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:4200/submit3',
        JSON.stringify({ keyword1 }),
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log({ keyword1 })
      console.log(res.data);
      setResults(res.data.results);
    } catch (err) {
      console.log(err);
      console.log('the submission is failed')
    };
  };

  const keyword1Input = (e) => {
    setKeyword1(e.target.value);
  };

 

  return (
    <>
      <form onSubmit={submitKeywords} className="form-position">
        <div className="form-group has-success">
          <label htmlFor="keyword1" className="form-label mt-1 my-2 label-domain">Enter the extention of the code to search</label>
          <input id="keyword1" onChange={keyword1Input} type="text" value={keyword1} className="form-control input-domain" />
        </div>
        <button type="submit" className="btn btn-light my-2 btn-form">Submit</button>
      </form>

   
      {results}
      
    </>
  );
};

export default SensitiveCode ;