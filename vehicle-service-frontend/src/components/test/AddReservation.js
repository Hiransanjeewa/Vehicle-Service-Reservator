import React, { useState } from 'react';
import BootstrapDatePickerComponent from '../datePicker';

function AddVehicleNoForm() {


    const [newVehicleNo, setVehicleNo] = useState( ) 
    const [newDate, setDate] = useState('') 
    const [newTime, setTime] = useState( ) 
    const [newLocation, setLocation] = useState( ) 
    const [newMessage, setMessage] = useState( ) 
    const [newMileage, setMileage] = useState( ) 


      const handleVehicleNoChange = (event) => {
        const newVehicleNo = event.target.value;
        setVehicleNo(newVehicleNo);
      };
    //   const handleDateChange = (date) => {
    //     // const newDate = event.target.value;
    //     setDate(date);
    //   };

      function addDate(date) {
         
      }
      const handleTimeChange = (event) => {
        const newTime = event.target.value;
        setTime(newTime);
      };
      const handleMessageChange = (event) => {
        const newMessage = event.target.value;
        setMessage(newMessage);
      };
      const handleMileageChange = (event) => {
        const newMileage = event.target.value;
        setMileage(newMileage);
      };
      const handleLocationChange = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation);
      };

      const handleSubmit =() => {
        console.log(newVehicleNo)
        console.log(newDate)
        alert ('You have clicked')
      }

      
  const style = {
    maindiv:{
       backgroundColor: "dark"
    }
}

const Districts = [
  "Colombo", "Gampaha", " Kalutara", " Kandy", " Matale", " Nuwara Eliya", " Galle", " Matara", "Hambantota", " Jaffna", " Kilinochchi", " Mannar", " Vavuniya", " Mullaitivu", " Batticaloa", " Ampara", " Trincomalee", " Kurunegala", " Puttalam", " Anuradhapura", " Polonnaruwa", " Badulla", " Moneragala", " Ratnapura", " Kegalle"
]




  return (
    <tr> 
      <td>
        {newVehicleNo}
        </td>
      <td >
      <div class="form-group col-md-2" style={{width : 100}}>
      <label for="inputZip">Vehicle no</label>
      <input type="text" class="form-control" id="inputZip" placeholder='Vehicle no' name='vehicle_no' 
  onChange={handleVehicleNoChange}
       />
    </div></td>
      <td >
        {/* <input placeholder="Date" style={{width : 100}}/> */}
      <BootstrapDatePickerComponent newDate={newDate} setDate={setDate}/>
      </td>
      <td >
      <label for="inputState">Select Time</label>
      <select class="form-control" style={{width : 100}}>
       <option selected>Choose ...</option>
        <option>10 AM</option>
        <option>11 AM</option>
        <option>12 PM</option>
      </select></td>
      <td >
      
      <div class="form-group col-md-4"  style={{width : 110}}>
      <label for="inputState">Select District</label>
      <select id="inputState" class="form-control">
        <option selected>Choose ...</option>
        {Districts.map((item, index) => (
    
       <option key={index}>{item}</option>
  
   
   ))}
      </select>
    </div>

      </td>
      <td >
      <div class="form-group col-md-6" style={{width : 100}}>
      <label for="inputCity">Mileage</label>
      <input type="number" class="form-control" id="inputMileage" placeholder='mileage'/>
    </div>
    </td>
      <td >
      <div class="form-group col-md-6" style={{width : 180}}>
      <label for="inputCity">Message</label>
      <input type="textbox" class="form-control" id="inputMessage" placeholder='message'/>
    </div>
      </td>
      <td >
        <br/>
      <button class="form-control" onClick={handleSubmit} style={{width : 80, height : 40}}>
      Add </button></td>
      
    </tr>

 
  );
}

export default AddVehicleNoForm;