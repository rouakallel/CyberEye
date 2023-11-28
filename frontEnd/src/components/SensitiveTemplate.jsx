import  {faFile,faDatabase,faCode} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
const SensitiveTemplate = () => {
  return (
    
    <>
    <div className="template-sensitive">

    <div className="container-sensitive">

    <Link className="button1" to="/sensitiveFiles">
    <button type="button" className="  btn btn-light button-sensitive" id="button1"><FontAwesomeIcon className="icon-size"  icon={faFile} />
    </button>
    </Link> 

    <Link className="button2" to="/sensitiveData">
    <button type="button" className=" btn btn-light button-sensitive" id="button2"><FontAwesomeIcon className="icon-size" icon={faDatabase} /></button>
    </Link>

    <Link className="button3" to="/sensitiveCode">
    <button type="button" className=" btn btn-light button-sensitive" id="button3"><FontAwesomeIcon className="icon-size" icon={faCode} /></button>

    </Link>
    </div>
    </div>

    
    

    </>
  )
}

export default SensitiveTemplate