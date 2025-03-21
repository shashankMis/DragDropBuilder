import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertyForm from './components/PropertyForm';
import './App.css';

function App() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const handleDragStart = (e, element) => {
    e.dataTransfer.setData('element', JSON.stringify(element));
  };

  const handleDrop = (e) => {
    const element = JSON.parse(e.dataTransfer.getData('element'));
    const newElement = { ...element, id: Date.now()};
    setElements([...elements, newElement]);
  };

  const updateElement = (updatedElement) => {
    const updatedElements = elements.map((el) =>  el.id === updatedElement.id ? updatedElement : el);
    setElements(updatedElements);
    setSelectedElement(null);
  };

  return (
    <div className="builder">
      <Sidebar onDragStart={handleDragStart} />
      <Canvas elements={elements} onDrop={handleDrop} onElementSelect={setSelectedElement} />
      {selectedElement && (
        <PropertyForm selectedElement={selectedElement} onUpdate={updateElement} />
      )}
    </div>
  );
}

export default App;
