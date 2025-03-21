import React from 'react';
import Element from './Element';
import '../styles/Canvas.css';

const Canvas = ({ elements, onDrop, onElementSelect }) => {
  return (
    <div className="canvas" onDragOver={(e) => e.preventDefault()} onDrop={onDrop} >
      {elements.map((el) => (
        <Element key={el.id} element={el} onSelect={() => onElementSelect(el)} />
      ))}
    </div>
  );
}

export default Canvas;