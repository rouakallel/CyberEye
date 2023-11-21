import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form Data:', formData);

   
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <div className="contact-us-container">
        <h2 className="contact-us-title">Contact Us</h2>
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <label className="contact-us-label">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact-us-input"
            />
          </label>
          <label className="contact-us-label">
            Adresse Email:
            <input
              type="text"
              name="email"
              value={formData.email}  
              onChange={handleChange}
              className="contact-us-input"
            />
          </label>
          <label className="contact-us-label">
            Message:
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="contact-us-input"
            />
          </label>

          <button type="submit" className="contact-us-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
