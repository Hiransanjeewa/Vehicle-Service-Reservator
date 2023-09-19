import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function BootstrapDatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState('');
  const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in "YYYY-MM-DD" format

  const handleDateChange = (event) => {
    const newDate = event.target.value;

    // Check if the selected date is not a Sunday and not a past date
    if (!isSunday(newDate) && !isPastDate(newDate)) {
      setSelectedDate(newDate);
    }
  };

  const isSunday = (dateString) => {
    const selectedDate = new Date(dateString);
    setSelectedDate("yyyy-mm-dd");
    if (selectedDate.getDay() === 0) {
      alert('Sorry We are closed on sundays please select different day')
      return selectedDate.getDay() === 0; 
    }
    // Sunday corresponds to day 0
  };

  const isPastDate = (dateString) => {
    return dateString < currentDate;
  };

  return (
    <div>
      <Form.Group controlId="reservationDate">
      <label for="inputState">Select Date </label>

      
        <Form.Control
          type="date"
          name="reservationDate"
          value={selectedDate}
          onChange={handleDateChange}
          min={currentDate}
        />
      </Form.Group>
    </div>
  );
}


export default BootstrapDatePickerComponent;
