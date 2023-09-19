import React from 'react';
import { Form } from 'react-bootstrap';

class BootstrapDatePickerComponent extends React.Component {
  render() {
    const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in the format "YYYY-MM-DD".

    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <Form.Group controlId="dob">
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                placeholder="Reservation Date"
                min={currentDate} // Set the minimum date to the current date
              />
            </Form.Group>
          </div>
        </div>
      </div>
    );
  }
}

export default BootstrapDatePickerComponent;
