import React, { useState } from 'react';



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
      <td ><input placeholder="vehicle no" style={{width : 100}}/></td>
      <td ><input placeholder="Date" style={{width : 100}}/></td>
      <td >
      <label for="inputState">Select Time</label>
      <select class="form-control" style={{width : 80}}>
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
      <input type="number" class="form-control" id="inputMileage" />
    </div>
    </td>
      <td >
      <div class="form-group col-md-6" style={{width : 180}}>
      <label for="inputCity">Message</label>
      <input type="textbox" class="form-control" id="inputMessage" />
    </div>
      </td>
      <td ><input placeholder="Date" style={{width : 100}}/></td>
      
    </tr>

setter(element)
    // if (element) {
    //   element.textContent = 'New Content';
    // }
    return null;
  }
