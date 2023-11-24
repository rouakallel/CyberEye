

const DataRenderSensitive = ({results}) => {
 if (!results || results.length === 0) {
        return <p>Aucun résultat disponible .</p>
      }  
  return (
    <div className='sensitive-data-result'>
    <h3 >The Results</h3>
    <ul className="list-result-sensitive">
    {results.map((result,index) => {
        const resultArray = result.split(';');
          if (resultArray.length >= 3) {
            const title = resultArray[0];
            const link = resultArray[1];
            const description = resultArray[2];
          return(     
      <li key={index}> 
      <strong>{title}</strong>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View file</a>
      </li>)}
      return null
    })}
    </ul>
    </div>
  )
}

export default DataRenderSensitive