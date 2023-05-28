import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
    
    <div className="album py-5 serviceContainer ">
    <div className="container ">

      <div className="row">
        <div className="col-md-4 ">
          <div className="card mb-4 ">
            <div className="card-title "> Detection des données sensibles</div>
            <img className="card-img-top img-fixed-height" src="../img/businessman-logging-his-tablet.jpg" alt="DetectionFuite"/>
            <div className="card-body ">
              <p className="card-text">En identifiant et en traitant les données sensibles telles que les informations personnelles ou les e-mails , on peut prévenir les risques de vol d'identité, de fraude et d'abus des données confidentielles.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-lg btn-primary"> <Link to="/detectionFuiteDonnées" className="link" > Demo</Link> </button>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
     

      
        <div className="col-md-4">
          <div className="card mb-4 box-shadow cardhaut">
          <div className="card-title "> Detection des services exposés</div>
            <img className="card-img-top img-fixed-height" src="../img/standard-quality-control-collage-concept.jpg" alt="DetectionServiceExpo"/>
            <div className="card-body">
              <p className="card-text"> En surveillant et en protégeant en permanence les services exposés,vous pouvez prévenir les incidents de sécurité, minimiser les impacts négatifs et garantir un environnement en ligne sûr pour vos utilisateurs et vos données.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-lg btn-primary"><Link to="/detectionServicesExposés" className="link"> Demo</Link></button>
                  
                </div>
               
              </div>
            </div>
          </div>
        </div>
     

      
        <div className="col-md-4">
          <div className="card mb-4 box-shadow  cardhaut">
            <div className="card-title "> Detection de l'usurpation de marque</div>
            <img className="card-img-top img-fixed-height" src="../img/standard-quality-control-collage-concept (1).jpg" alt="DetectionUsurpation"/>
            <div className="card-body">
              <p className="card-text"> En identifiant les tentatives d'usurpation, on peut prendre des mesures proactives pour prévenir les fraudes en ligne,réserver la réputation de la marque,réduire les risques de vol d'identité et protéger la confiance des clients dans votre entreprise</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-lg btn-primary"><Link to="/detectionUsurpation" className="link"> Demo</Link></button>
                 
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