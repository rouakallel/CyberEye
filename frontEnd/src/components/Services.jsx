import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
    
    <div className="album py-5 serviceContainer ">
    <div className="container ">

      <div className="row albumfont ">
        <div className="col-md-4 ">
          <div className="card mb-4 ">
            <div className="card-title "> Detection de l'exposition des e-mails</div>
            <img className="card-img-top img-fixed-height" src="../img/businessman-logging-his-tablet.jpg" alt="DetectionMail"/>
            <div className="card-body ">
              <p className="card-text">Notre but est d'identifier et de sécuriser proactivement les adresses électroniques vulnérables, prévenant ainsi les risques de vol d'identité, de fraude et d'exploitation malveillante. </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-lg btn-primary"> <Link to="/detectionMail" className="link" > Demo</Link> </button>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
     

      
        <div className="col-md-4">
          <div className="card mb-4 box-shadow cardhaut">
          <div className="card-title ">Detection des données sensibles</div>
            <img className="card-img-top img-fixed-height" src="../img/img3.jpg" alt="sensitiveData"/>
            <div className="card-body">
              <p className="card-text"> Notre objectif est de repérer et de protéger activement les informations confidentielles, telles que les identifiants, les documents sensibles, et autres données stratégiques, afin de prévenir toute tentative d'accès non autorisé, de fuite ou d'exploitation malintentionnée. </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-lg btn-primary"><Link to="/sensitiveData" className="link"> Demo</Link></button>
                  
                </div>
               
              </div>
            </div>
          </div>
        </div>
     

      
        <div className="col-md-4">
          <div className="card mb-4 box-shadow  cardhaut">
            <div className="card-title ">  Detection des services exposés</div>
            <img className="card-img-top img-fixed-height" src="../img/img2.jpg" alt="detectionServiceExpo"/>
            <div className="card-body">
              <p className="card-text"> Notre dessein est de surveiller les services exposés afin de prévenir les incidents de sécurité , de minimiser les risques potentiels, les impacts négatifs et garantir un environnement en ligne sûr pour vos utilisateurs et vos données.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-lg btn-primary"><Link to="/detectionServiceExpo" className="link"> Demo</Link></button>
                  
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