import React, { useState } from 'react';
import BootstrapDatePickerComponent from './datePicker';



export function AddReservationForm(setter) {
  const style = {
    maindiv:{
       backgroundColor: "dark"
    }
  
}
const Districts = [
  "Colombo", "Gampaha", " Kalutara", " Kandy", " Matale", " Nuwara Eliya", " Galle", " Matara", "Hambantota", " Jaffna", " Kilinochchi", " Mannar", " Vavuniya", " Mullaitivu", " Batticaloa", " Ampara", " Trincomalee", " Kurunegala", " Puttalam", " Anuradhapura", " Polonnaruwa", " Badulla", " Moneragala", " Ratnapura", " Kegalle"
]




    const element = <tr> 
      <td></td>
      <td >
      <div class="form-group col-md-2" style={{width : 100}}>
      <label for="inputZip">Vehicle no</label>
      <input type="text" class="form-control" id="inputZip" placeholder='Vehicle no'/>
    </div></td>
      <td >
        {/* <input placeholder="Date" style={{width : 100}}/> */}
      <BootstrapDatePickerComponent/>
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
      <button class="form-control" type='submit' style={{width : 80, height : 40}}>
      Add </button></td>
    
    </tr>


setter(element)
    // if (element) {
    //   element.textContent = 'New Content';
    // }
    return null;
  }
