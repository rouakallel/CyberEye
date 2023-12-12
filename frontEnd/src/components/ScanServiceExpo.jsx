import { useState } from "react";
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import renderHost from './HostRender';
import validator from 'validator';


const ScanServiceExpo = () => {
  const [host, setHost] = useState("");
  const [results, setResults] = useState(null);
  const [domainError, setDomainError] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitHost = async (e) => {
    e.preventDefault();

    if (!validator.isFQDN(host)) {
      setDomainError("Please enter a valid domain");
      return;
    } else {
      setDomainError(null);
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:4200/host', JSON.stringify({ domain: host }), { headers: { 'Content-Type': 'application/json' } });
      console.log(res.data.uniqueCPEArray);
      console.log(res.data.vulns);
      setResults(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const hostInput = (e) => {
    setHost(e.target.value);
    setDomainError(null);
  };

  return (
    <>
      <form onSubmit={submitHost} className="form-position">
        <div className="form-group">
          <label className="form-label mt-1 my-2 label-domain">Check Your domain</label>
          <input onChange={hostInput} type="text" value={host} className="form-control" placeholder="Enter your domain" id="domain" />
        </div>

        <button type="submit" className={`btn btn-light my-2 btn-form ${loading ? 'loading' : ''}`} disabled={loading}>
          {loading ? (
            <BeatLoader color="rgba(27, 84, 209, 1)" loading={loading} size={8} />
          ) : (
            <>
              Submit
              <svg className="svg-inline--fa fa-circle-right ms-2 sizeicon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"></path>
              </svg>
            </>
          )}
        </button>
      </form>

      {domainError ? (
        <div className="error-message shodanResult">
          {domainError}
        </div>
      ) : results && (
        <div className='shodanResult'>
          <h3 className='titleh4'>The Scan Results of your domain are:</h3>
          <div className='result'>
            {results && renderHost(results)}
          </div>
        </div>
      )}
    </>
  );
};

export default ScanServiceExpo;
