import React from 'react';
import { useState } from "react"
import axios from 'axios'
import renderHost from './HostRender';

const ScanServiceExpo = () => {

  const [host,setHost] = useState("")
  const [results, setResults] = useState(null);
 
  const submitHost = async(e) => {
    e.preventDefault()
    try {
     const res = await axios.post('http://localhost:4200/host', JSON.stringify({domain: host}), {headers: {'Content-Type': 'application/json'}})
        console.log(res.data)
        setResults(res.data);
       }
      catch(err) {
        console.log(err)
      };
  
    }
  const hostInput = (e) => {
      setHost(e.target.value)
    }
return (
  <>
 <form onSubmit={submitHost} className=" form-position">

  <div className="form-group has-success ">
  <label className="form-label mt-1 my-2 label-domain " >Check Your domain</label>
  <input onChange={hostInput} type="text" value={host} className="form-control input-domain " ></input>
  </div>

  <button type="submit" className="btn btn-primary my-2 ">Submit</button>

  </form>
  
  
  {results && (
    <div>
      <h3>Les Résultats du Scan de votre domaine :</h3>
      
      <div>
      {results && renderHost(results)}
      </div>
    { /* <pre>{JSON.stringify(results, null, 2)}</pre>*/} 
    </div>
  )}


  </>
  )
}

export default ScanServiceExpo