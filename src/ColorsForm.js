import React from 'react';
import './ColorsForm.css';

function Color({ ColorsForm }) {

  return (
    <div className="ColorsForm">
      <p>Please select a color.</p>
      {ColorsForm.map(color => <div>{color}</div>)}
    </div>
  );
}


export default ColorsForm;