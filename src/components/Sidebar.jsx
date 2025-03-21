import React from 'react';
import image from './image.avif';
import '../styles/Sidebar.css';

const elements = [
  {type:'text', label:'Text', properties:{ content:'Hello, You can edit this text by clicking on this.',
   color: '#000000'} 
  },
  {type:'image', label:'Image', properties:{ src:image , width: '350px'} },
  {type:'button', label:'Button', properties:{ text:'Click Me', background:'#4CAF50'} },
];

const Sidebar = ({ onDragStart }) =>{
  return (
    <div className="sidebar">
      <h3>Elements</h3>
      {elements.map((el, index) => (
        <div key={index} draggable className="draggable" onDragStart={(e) => onDragStart(e, el)}>
          {el.label}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;

