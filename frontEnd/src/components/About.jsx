import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faShield} from "@fortawesome/free-solid-svg-icons"
const About = () => {
  return (
    <> 
    <div className="about-us-container">

    <div><img  className="img-about" src="/img/about.jpg" alt="CyberEye Logo"/></div>
     
    <div class="about-us-content">
        <div className="about-us-text">  
          <div className="about-us-title"> <h1 className="about-us">About Us </h1> <h1 className="cybereye"><span className="diff">CyberEye</span> Threat Intelligence</h1>
        </div>
        <div class="about-us-paragraph">
            <p> <span className="diff"> CyberEye </span>, developed by Securas Technologies, stands as a Cyber Threat Intelligence platform. Its primary mission is to proactively anticipate cyber threats by adeptly detecting sensitive data and exposed services across all layers of the web—Surface <FontAwesomeIcon icon={faGlobe} style={{color: "#354dcb",}} className=" fa-icon-about "/>, Deep, and Dark. <br/> With a focus on comprehensive threat detection, CyberEye plays a pivotal role in fortifying cybersecurity landscapes, providing organizations with a robust shield <FontAwesomeIcon icon={faShield} style={{color: "#354dcb",}} className=" fa-icon-about "/>  against evolving cyber risks.</p>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default About