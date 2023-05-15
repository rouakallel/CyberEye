import { useState } from "react"
import axios from 'axios'
function Search() {
    
    const [nomDomain,setDomain] = useState("")
   
    const submitDomain = async(e) => {
      e.preventDefault()
      try {
       const res = await axios.post('http://localhost:4200/nomDomain', JSON.stringify({nomDomain: nomDomain}), {headers: {'Content-Type': 'application/json'}})
          console.log(res.data)
         }
        catch(err) {
          console.log(err)
        };
    
      }
    const domainInput = (e) => {
        setDomain(e.target.value)
        console.log(e.target.value)
      }
  return (
    <>
   <form onSubmit={submitDomain}>

    <div className="form-group has-success">
    <label className="form-label mt-1 my-2 " >Enter your domain</label>
    <input onChange={domainInput} type="text" value={nomDomain} className="form-control" id="inputDomain"></input>
    </div>

    <button type="submit" className="btn btn-primary my-2 ">Submit</button>

    </form>
    {nomDomain}
    </>
  )
}

export default Search