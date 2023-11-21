import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <>
    <div className='intro'>
         <div className='introtext'>
         <h1> Our Cyber Threat intelligence Platform</h1> 
         <h4>We equip you with the knowledge to uncover the uncertainties.</h4>
         </div>
         <div> <img className='imgth' src="../img/threatimg.svg" alt="threatimg"/></div>
    </div>
    <div className="album py-5 serviceContainer ">
    <div className="container ">

      <div className="row albumfont ">
        <div className="col-md-4 ">
          <div className="card mb-4 shadow cardhaut">
          <div className='title-card'>
            
            <img className="card-img-top img-card " src="../img/detect3.jpg" alt="DetectionMail"/>
            <div className="card-title "> Detection Of Email Exposure</div>
          </div>
            <div className="card-body ">
              <p className="card-text">Our mission is to proactively identify and safeguard vulnerable email addresses, mitigating the risks associated with identity theft, fraud, and malicious exploitation. By leveraging advanced threat intelligence, we aim to provide robust security measures that actively protect against potential threats, ensuring a secure digital environment. </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-lg btn-primary 
                  "> <Link to="/detectionMail" className="link" > Demo</Link> </button> 
                </div> 
              
              </div>
            </div>
          </div>
        </div>
     

      
        <div className="col-md-4">
          <div className="card mb-4 shadow cardhaut">
          <div className='title-card'>
            <img className="card-img-top img-card" src="../img/detect4.jpg" alt="sensitiveData"/>
            <div className="card-title ">Sensitive data detection</div>
            </div>
            <div className="card-body">
              <p className="card-text"> Our primary goal is to proactively identify and safeguard sensitive information, encompassing credentials, confidential documents, and other strategic data. By doing so, we aim to thwart any unauthorized access, prevent potential leaks, and mitigate the risks of malicious exploitation, ensuring the secure use of data. </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-lg btn-primary"><Link to="/sensitiveData" className="link"> Demo</Link></button>
                  
                </div>
               
              </div>
            </div>
          </div>
        </div>
     

      
        <div className="col-md-4">
          <div className="card mb-4 shadow  cardhaut">
           <div className='title-card'>
            <img className="card-img-top img-card" src="../img/detect5.jpg" alt="detectionServicesExposés"/>
            <div className="card-title "> Detection of exposed services </div>
            </div>  
            <div className="card-body">
              <p className="card-text">Our overarching objective is to vigilantly monitor services that are exposed, proactively preventing potential security incidents, mitigating risks, minimizing adverse impacts, and ultimately safeguarding a secure online environment for both your users and data. In order to keep your digital assets and sensitive information secure.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-lg btn-primary"><Link to="/detectionServicesExposés" className="link"> Demo</Link></button>
                  
                </div>
         
              </div>
            </div>
          </div>
        </div>


       </div>

      </div>
      </div>
     
    </>
  )
}

export default Services