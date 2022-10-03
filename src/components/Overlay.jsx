import React from 'react';
import './Overlay.css'

function Overlay(props) {
  return ( 
    <div className="container">
      <p>Invalid Input</p>
      <p>Please enter a valid name or age (non-empty values)</p>
      <button>Okay</button>
    </div>
   );
}

export default Overlay;