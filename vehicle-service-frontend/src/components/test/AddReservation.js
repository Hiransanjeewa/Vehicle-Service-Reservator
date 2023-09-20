import React from 'react';

function AddReservationForm({ inputData, setInputData }) {
  const handleInputChange = (e) => {
    // Update the inputData state with the input value
    setInputData(e.target.value);
  };

  return (
    <div>
      <label htmlFor="inputField">Enter Data:</label>
      <input
        type="text"
        id="inputField"
        value={inputData}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default AddReservationForm;