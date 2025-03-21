import React from 'react';
import '../styles/Element.css';

const Element = ({ element, onSelect }) => {
  const { type, properties } = element;

  return (
    <div className="element" onClick={onSelect}>
      {type === 'text' && <p style={{ color: properties.color }}>{properties.content}</p>}
      {type === 'image' && <img src={properties.src} alt="Element" width={properties.width} />}
      {type === 'button' && (
        <button style={{ background: properties.background }}>
          {properties.text}
        </button>
      )}
    </div>
  );
}

export default Element;
