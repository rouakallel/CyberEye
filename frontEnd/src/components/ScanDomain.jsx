
import { useState } from "react"
import axios from 'axios'
import renderData from './DataRenderer';

const ScanDomain =() => {
    
    const [name,setDomain] = useState("")
    const [results, setResults] = useState(null);
   
    const submitDomain = async(e) => {
      e.preventDefault()
      try {
       const res = await axios.post('http://localhost:4200/nomDomain', JSON.stringify({name: name}), {headers: {'Content-Type': 'application/json'}})
          console.log(res.data)
          setResults(res.data);
         } 
        catch(err) {
          console.log(err)
        }; 
    
      }
    const domainInput = (e) => {
        setDomain(e.target.value)
      }
  return (
    <>
   <form onSubmit={submitDomain} className=" form-position">

    <div className="form-group has-success ">
    <label className="form-label mt-1 my-2 label-domain " >Check Your Domain</label>
    <input onChange={domainInput} type="text" value={name} className="form-control input-domain" id="inputDomain"></input>
    </div>

    <button type="submit" className="btn btn-primary my-2 ">Submit</button>

    </form>
    
    
    {results && (
      <div>
        <h3>Les Résultats du Scan de ton domaine :</h3>
        {/* Affichez les résultats ici */}
        <div>
        {results && renderData(results)}
        </div>
      { /* <pre>{JSON.stringify(results, null, 2)}</pre>*/} 
      </div>
    )}


    </>
  )
}

export default ScanDomain