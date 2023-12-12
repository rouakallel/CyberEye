import  { faFileExport} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"




const DataRenderSensitive = ({results}) => {
 if (!results || results.length === 0) {
        return <p>Aucun résultat disponible .</p>
      }  
  return (
    <div className='sensitive-data-result'>
    <h3 className="title-result">The Results</h3>
    <ul className="list-result-sensitive">
    {results.map((result,index) => {
        const resultArray = result.split(';');
          if (resultArray.length >= 3) {
            const title = resultArray[0];
            const link = resultArray[1];
            const description = resultArray[2];
          return(     
      <li  key={index}> 
      <strong>{title}</strong>
      <p display='none'> {description}</p>
      <div  className="file-link"> View file
      <a  href={link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon-file" icon={faFileExport} /></a> 
      </div>
      </li>)}
      return null
    })}
    </ul>
    </div>
  )
}

export default DataRenderSensitive