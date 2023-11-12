import React, { useState } from 'react';
import axios from 'axios';

const ScanSensitiveData = () => {
  const [keyword1, setKeyword1] = useState("");
  const [keyword2, setKeyword2] = useState("");
  const [results, setResults] = useState(null);

  const submitKeywords = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:4200/runScrapy',
        JSON.stringify({ keyword1, keyword2 }),
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log({ keyword1, keyword2 })
      console.log(res.data);
      setResults(res.data);
    } catch (err) {
      console.log(err);
    };
  };

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
          <label className="form-label mt-1 my-2 label-domain">Entrer le Type du donnée sensible souhaitant chercher</label>
          <input onChange={keyword1Input} type="text" value={keyword1} className="form-control input-domain" />
        </div>

        <div className="form-group has-success">
          <label className="form-label mt-1 my-2 label-domain">Entrer le type de fichier</label>
          <input onChange={keyword2Input} type="text" value={keyword2} className="form-control input-domain" />
        </div>

        <button type="submit" className="btn btn-primary my-2">Submit</button>
      </form>

      {results && (
        <div>
          <h3>Les Résultats:</h3>
          {/* Affichez les résultats ici */}
        </div>
      )}
    </>
  );
};

export default ScanSensitiveData;
