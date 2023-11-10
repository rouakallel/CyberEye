import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function SensitiveData() {
  const [fileTypes, setFileTypes] = useState({
    pdf: false,
    xls: false,
    txt: false,
  });

  const [categories, setCategories] = useState({
    auth: false,
    finance: false,
    medical: false,
  });

  const handleCheckboxChange = (event, group, setGroup) => {
    const { name, checked } = event.target;

    setGroup((prevGroup) => ({
      ...prevGroup,
      [name]: checked,
    }));
  };

  const handleSubmit = async() => {
    const selectedOptions = {
      fileTypes,
      categories,
    };
  
    console.log('Options sélectionnées :', selectedOptions);
  
    try {const response = await axios.post('http://127.0.0.1:5000/submit', selectedOptions, {
      headers: {
        'Content-Type': 'application/json',
      } })
      console.log(response.data)
        }
      catch(err) {
        console.error('Erreur :', err);
      };
  };

  return (
    <div className="container mt-5">
      <h2 className="datafont">Types de fichiers :</h2>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          name="pdf"
          checked={fileTypes.pdf}
          onChange={(e) => handleCheckboxChange(e, fileTypes, setFileTypes)}
        />
        <label className="form-check-label">PDF</label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          name="xls"
          checked={fileTypes.xls}
          onChange={(e) => handleCheckboxChange(e, fileTypes, setFileTypes)}
        />
        <label className="form-check-label">XLS</label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          name="txt"
          checked={fileTypes.txt}
          onChange={(e) => handleCheckboxChange(e, fileTypes, setFileTypes)}
        />
        <label className="form-check-label">TXT</label>
      </div>

      <h2 className="datafont">Catégories :</h2>
      <div className="form-check"> 
        <input
          type="checkbox"
          className="form-check-input"
          name="auth"
          checked={categories.auth}
          onChange={(e) => handleCheckboxChange(e, categories, setCategories)}
        />
        <label className="form-check-label">Données d'authentification</label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          name="finance"
          checked={categories.finance}
          onChange={(e) => handleCheckboxChange(e, categories, setCategories)}
        />
        <label className="form-check-label">Données financières</label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="medicalCheckbox"
          name="medical"
          checked={categories.medical}
          onChange={(e) => handleCheckboxChange(e, categories, setCategories)}
        />
        <label className="form-check-label">Données médicales</label>
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>Rechercher</button>
    </div>
  );
}

export default SensitiveData;
