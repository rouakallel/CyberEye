import  {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
const SensitiveTemplate = () => {
  return (
    
    <>
    <div className="container-sensitive">

    
    <div className="sensitive-div"> 
    <img className="senstive-img" src="../img/fileSearch.png" alt="fileSearch"/>
    <div className="sensitive-text">
    <h5>  Search In Files Exposed In The Net <Link  to="/sensitiveFiles"><FontAwesomeIcon className="icon-size" icon={faArrowRight} /></Link></h5>
    <p className="sensitive-pr"> You can check if you have sensitive files exposed in the web in different extensions </p>
    </div>
     </div>
    

    

    
    <div className="sensitive-div"> 
    <img className="senstive-img" src="../img/dataSearch1.png" alt="fileSearch"/>
    <div className="sensitive-text">
    <h5> Search for Sensitive Data <Link  to="/sensitiveData"> <FontAwesomeIcon className="icon-size" icon={faArrowRight} /> </Link></h5> 
    <p className="sensitive-pr"> You can check if you have sensitive data exposed in the web </p>
    </div>
    </div>
    
   

    
    <div className="sensitive-div">
    <img className="senstive-img" src="../img/CodeSearch.png" alt="fileSearch"/>
    <div className="sensitive-text">
    <h5>Search For Sensitive Code  <Link to="/sensitiveCode"> <FontAwesomeIcon className="icon-size" icon={faArrowRight} /> </Link></h5> 
    <p className="sensitive-pr"> You can check if you have sensitive code exposed in the web  </p>
     </div>
     </div>
    

    </div>

    
    </>
  )
}

export default SensitiveTemplate