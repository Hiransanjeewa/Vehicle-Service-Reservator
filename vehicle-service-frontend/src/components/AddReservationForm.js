import React, { useState } from 'react';
import BootstrapDatePickerComponent from './datePicker';



export function AddReservationForm({ setter }) {
  const style = {
    maindiv:{
       backgroundColor: "dark"
    }
  
}
const [newReservation, setNewReservation] = useState({
  // Your initial state here
});
// const [newReservation, setNewReservation] = useState( {
//   "book_id": 302,
//   "name": "DjGihantha",
//   "email": "djgihantha@gmail.com",
//   "phone": "4534535324",
//   "date": "2023-09-18T00:00:00.000+00:00",
//   "time": "17:51:12",
//   "location": "Nuwara Eliya",
//   "vehicle_no": "DJ-0005",
//   "mileage": 2344,
//   "message": "Gammak thamai"
// } ) 

const Districts = [
  "Colombo", "Gampaha", " Kalutara", " Kandy", " Matale", " Nuwara Eliya", " Galle", " Matara", "Hambantota", " Jaffna", " Kilinochchi", " Mannar", " Vavuniya", " Mullaitivu", " Batticaloa", " Ampara", " Trincomalee", " Kurunegala", " Puttalam", " Anuradhapura", " Polonnaruwa", " Badulla", " Moneragala", " Ratnapura", " Kegalle"
]




    const element = <tr> 
      <td></td>
      <td >
      <div className="form-group col-md-2" style={{width : 100}}>
      <label for="inputZip">Vehicle no</label>
      <input type="text" className="form-control" id="inputZip" placeholder='Vehicle no'/>
    </div></td>
      <td >
        {/* <input placeholder="Date" style={{width : 100}}/> */}
      <BootstrapDatePickerComponent/>
      </td>
      <td >
      <label for="inputState">Select Time</label>
      <select className="form-control"  style={{width : 100}}>
       <option defaultValue>Choose ...</option>
        <option>10 AM</option>
        <option>11 AM</option>
        <option>12 PM</option>
      </select></td>
      <td >
      
      <div className="form-group col-md-4"  style={{width : 110}}>
      <label for="inputState">Select District</label>
      <select id="inputState" className="form-control">
        <option selected>Choose ...</option>
        {Districts.map((item, index) => (
    
       <option key={index}>{item}</option>
  
   
   ))}
      </select>
    </div>

      </td>
      <td >
      <div className="form-group col-md-6" style={{width : 100}}>
      <label for="inputCity">Mileage</label>
      <input type="number" className="form-control" id="inputMileage" placeholder='mileage'/>
    </div>
    </td>
      <td >
      <div className="form-group col-md-6" style={{width : 180}}>
      <label for="inputCity">Message</label>
      <input type="textbox" className="form-control" id="inputMessage" placeholder='message'/>
    </div>
      </td>
      <td >
        <br/>
      <button className="form-control" type='submit' style={{width : 80, height : 40}}>
      Add </button></td>
    
    </tr>


setter(element)
    // if (element) {
    //   element.textContent = 'New Content';
    // }
    return <div></div>;
  }
