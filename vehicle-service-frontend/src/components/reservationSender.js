import { useState } from "react";
import BootstrapTimePickerComponent from "./timePicker";
import BootstrapDatePickerComponent from "./datePicker";


export default function ReservationSender() {
    const style = {
        maindiv:{
           backgroundColor: "dark"
        }
    }
    const Districts = [
        "Colombo", "Gampaha", " Kalutara", " Kandy", " Matale", " Nuwara Eliya", " Galle", " Matara", "Hambantota", " Jaffna", " Kilinochchi", " Mannar", " Vavuniya", " Mullaitivu", " Batticaloa", " Ampara", " Trincomalee", " Kurunegala", " Puttalam", " Anuradhapura", " Polonnaruwa", " Badulla", " Moneragala", " Ratnapura", " Kegalle"
    ]
    const [districts, setDistricts] = useState(Districts);
    return (
      <div style={style.maindiv}>
       <form>
  
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Mileage</label>
      <input type="number" class="form-control" id="inputMileage" />
    </div>

    <div class="form-group col-md-6">
      <label for="inputCity">Message</label>
      <input type="text" class="form-control" id="inputMessage" />
    </div>

    <div class="form-group col-md-4">
      <label for="inputState">Select District</label>
      <select id="inputState" class="form-control">
        <option selected>Choose ...</option>
        {districts.map((item, index) => (
    
       <option key={index}>{item}</option>
  
   
   ))}
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Vehicle no</label>
      <input type="text" class="form-control" id="inputZip" />
    </div>
  </div>

  <BootstrapDatePickerComponent/>
  <BootstrapTimePickerComponent/>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
      </div>
    );
}