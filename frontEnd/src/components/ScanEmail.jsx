
import { useState } from "react"
import axios from 'axios'
import DataRendererEmail from './DataRendererEmail'
import validator  from "validator"
const ScanEmail = () => {
  
  const [adresseEmail,setEmail] = useState("")
  const [results, setResults] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const submitEmail = async(e) => {
    e.preventDefault()
    if (!validator.isEmail(adresseEmail)) {
      console.error('Adresse e-mail non valide');
      setEmailError('Adresse e-mail non valide');
      return;
    }
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
      setEmail(e.target.value);
      setEmailError(null); 
    }
return (
  <>
 <form onSubmit={submitEmail} className=" form-position" id="form-email">
 <div className="form-group">
 <label  className="form-label mt-4" id="exampleInputEmail1" >Email address</label>
 <input onChange={emailInput} type="email"  value={adresseEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
 <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
 </div>
  <button type="submit" className="btn btn-light my-2 btn-form">Submit
  <svg className="svg-inline--fa fa-circle-right ms-2 sizeicon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"></path></svg></button>

  </form>
  {emailError ? (
    <div className="error-message emailResult">
      {emailError}
    </div>
  ):
  
  results && (
    <div className='emailResult'>
    <h4 className='titleh4'>Is your email compromised as a result of a data breach:</h4>
    <div className='mailcomp'>{results.isLeaked ? 'Yes' : 'No'}</div>
    {results.isLeaked && (
      <div className='mailcomp'>
        <DataRendererEmail hibpResult={results.hibpResult} />
      </div>
    )}
  </div>
  )}


  </>
)
}

export default ScanEmail