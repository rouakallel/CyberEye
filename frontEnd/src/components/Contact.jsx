import { useState } from 'react';
import axios from 'axios'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot,faPhoneVolume,faEnvelope} from "@fortawesome/free-solid-svg-icons"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4200/sendEmail',{ body: JSON.stringify(formData)}, {
        headers: {'Content-Type': 'application/json'} });

      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }

   
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <div className="contact-us-container">
      <div className='information-part'>
      <img className='img-contact' src='/img/3969587.jpg' alt="img-contact"></img> 
      <div className='information'>

     <div className='cordonnee'><FontAwesomeIcon icon={faLocationDot} style={{color: "#354dcb",}} className=" fa-icon "/> 
    <div className="2line" ><div className='h5-bold'> Address: </div> <div > France / Tunisia</div></div>
     </div> 
     <div className='cordonnee'><FontAwesomeIcon icon={faPhoneVolume} style={{color: "#354dcb",}} className=" fa-icon "/>
     <div className="2line" >  <div className='h5-bold'> Phone:</div>  <div>+33 9 80 80 60 77 <br/> +216 94 844 900 </div>  </div>
     </div> 
     <div className='cordonnee'><FontAwesomeIcon icon={faEnvelope} style={{color: "#354dcb",}} className=" fa-icon "/>
     <div className="2line"><div className='h5-bold'> Email: </div>  <div> contact@securas.fr </div> </div> </div>
      </div>

      </div>


      <div className='message-part'>
        <h4 className="contact-us-title">Need more information? <br/> You can leave us a message</h4>
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <label className="contact-us-label">
          <div className='label-text'> Name:</div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact-us-input"
            />
          </label>
          <label className="contact-us-label">
            <div className='label-text'>Adresse Email:</div>
            <input
              type="text"
              name="email"
              value={formData.email}  
              onChange={handleChange}
              className="contact-us-input"
            />
          </label>
          <label className="contact-us-label">
           <div className='label-text'> Message:</div>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="contact-us-input input-message"
            />
          </label>

          <button type="submit" className="contact-us-button">
            Submit
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Contact;
