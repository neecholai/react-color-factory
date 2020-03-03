import React from 'react';
import './Colors.css';

function Colors({ colors }) {

  return (
    <div className="Colors">
      <p>Please select a color.</p>
      {colors.map(color => <div>{color}</div>)}
    </div>
  );
}



export default Colors;