import React, { useState } from 'react';
import AddReservationForm from './AddReservation';

function ParentComponent() {
  const [inputData, setInputData] = useState('');

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Input Data: {inputData}</p>
      <AddReservationForm inputData={inputData} setInputData={setInputData} />
    </div>
  );
}

export default ParentComponent;