import React, { useState } from 'react';
import '../styles/PropertyForm.css';

const PropertyForm = ({ selectedElement, onUpdate }) => {
  const [props, setProps] = useState(selectedElement.properties);

  const handleChange = (e) => {
    setProps({ ...props, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate({ ...selectedElement, properties: props });
  };

  return (
    <div className="property-form">
      <h3>Edit Properties</h3>
      {Object.keys(props).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <input name={key} value={props[key]} onChange={handleChange} />
        </div>
      ))}
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default PropertyForm;
