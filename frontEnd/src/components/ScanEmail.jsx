import { useState } from "react"
import axios from 'axios'
import DataRendererEmail from './DataRendererEmail'

const ScanEmail = () => {
 
  const [adresseEmail,setEmail] = useState("")
  const [results, setResults] = useState(null);
 
  const submitEmail = async(e) => {
    e.preventDefault()
    try {
     const res = await axios.post('http://localhost:4200/adresseEmail', {adresseEmail}, {headers: {'Content-Type': 'application/json'}})
        console.log(res.data)
        setResults(res.data);
       }
      catch(err) {
        console.log(err)
      };
  
    }
  const emailInput = (e) => {
      setEmail(e.target.value)
    }
return (
  <>
 <form onSubmit={submitEmail} className=" form-position">

  <div className="form-group has-success ">
  <label className="form-label mt-1 my-2 label-domain " >Check Your Email Account</label>
  <input onChange={emailInput} type="text" value={adresseEmail} className="form-control input-domain" id="inputEmail"></input>
  </div>

  <button type="submit" className="btn btn-primary my-2 ">Submit</button>

  </form>
  
  
  {results && (
    <div>
    <h4>Ton mail est il compromis à la suite d'une violation de données :</h4>
    <div>{results.isLeaked ? 'Oui' : 'Non'}</div>
    {results.isLeaked && (
      <div>
        <DataRendererEmail hibpResult={results.hibpResult} />
      </div>
    )}
  </div>
  )}


  </>
)
}

export default ScanEmail