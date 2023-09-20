import React, { useState } from 'react';
import BootstrapDatePickerComponent from './datePicker';
import axios from 'axios';

function AddVehicleNoForm({removeReservationAdder}) {


    const [newVehicleNo, setVehicleNo] = useState('') 
    const [newDate, setDate] = useState('') 
    const [newTime, setTime] = useState('') 
    const [newLocation, setLocation] = useState('') 
    const [newMessage, setMessage] = useState('') 
    const [newMileage, setMileage] = useState('') 


      const handleVehicleNoChange = (event) => {
        const newVehicleNo = event.target.value;
        setVehicleNo(newVehicleNo);
      };

      const handleTimeChange = (event) => {
        //console.log(event.target.value)
        const newTime = event.target.value;
        setTime(newTime);
      };
      const handleMessageChange = (event) => {
        //console.log(event.target.value)
        const newMessage = event.target.value;
        setMessage(newMessage);
      };
      const handleMileageChange = (event) => {
        //console.log(event.target.value)
        const newMileage = event.target.value;
        setMileage(newMileage);
      };
      const handleLocationChange = (event) => {
        //console.log(event.target.value)
        const newLocation = event.target.value;
        setLocation(newLocation);
      };

      const handleSubmit =async (e) => {

        e.preventDefault(); // Prevent the default form submission behavior

        // Validation checks
        if (newVehicleNo==='') {
            alert('Please add your Vehicle No');
            return;
        }
        if (/[a-z]/.test(newVehicleNo)) {
            alert('only capital letters are allowed')
            return; 
        }
        if (7 > newVehicleNo.length ||  8 <  newVehicleNo.length) {
          alert('Invalid Vehicle Number');
          return; // Stop further processing
        }
        
        if (newDate==='') {
            alert('Please select Date');
            return;
        }
        if (!/^\d{4}-\d{2}-\d{2}$/.test(newDate)) {
          alert('Invalid date format. Use YYYY-MM-DD.');
          return;
        }
        if (newTime==="") {
            alert('Please select time for the reservation');
          return;
        }
    
        if (!['10 AM', '11 AM', '12 PM'].includes(newTime)) {
          alert('Invalid time. Use 10 AM, 11 AM, or 12 PM.');
          return;
        }
        //console.log(newTime)
        if (newLocation === '') {
            alert('Please select a location')
             return;
        }
        if (!Districts.includes(newLocation)) {
            console.log('Please select a right location')
            return;
          }
            
    
        if (newMileage === '') {
          alert('Please add mileage of your vehicle');
          return;
        }
        if ( newMileage > 200000 ) {
            alert('Please add correct mileage of your vehicle');
            return;
          }


        const vehicleService = {
            book_id: 0,
            name: "Hiran Sanjeewa",
            email: "hiransanjeewa@gmail.com",
            phone: "4534535324",
            date: newDate,
            time: newTime,
            location: newLocation,
            vehicle_no: newVehicleNo,
            mileage: newMileage,
            message: newMessage
        }


          try {
           
            // Send the newReservation object to the backend using Axios
            const response = await axios.post('http://localhost:8080/add-reservation', vehicleService, {
              headers: {
                'Content-Type': 'application/json',
              },
              
            });
            if (response.data==='success') {
                removeReservationAdder(false)
            }else {
              alert (response.data)
            }
            
      
            // if (response.status === 200) {
            //   // Handle successful response from the backend
            //   console.log('Reservation successfully sent to the backend.');
            // } else {
            //   // Handle errors or unexpected responses
            //   console.error('Failed to send reservation to the backend.');
            // }
          } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error:', error);
          }
      }

      
  const style = {
    maindiv:{
       backgroundColor: "dark"
    }
}

const Districts = [
  "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya", "Galle", "Matara", "Hambantota", "Jaffna", "Kilinochchi", "Mannar", "Vavuniya", "Mullaitivu", "Batticaloa", "Ampara", "Trincomalee", "Kurunegala", "Puttalam", "Anuradhapura", "Polonnaruwa", "Badulla", "Moneragala", "Ratnapura", "Kegalle"
]

  return (
    <tr> 
      <td>
       
        </td>
      <td >
      <div class="form-group col-md-2" style={{width : 100}}>
      <label for="inputZip">Vehicle no</label>
      <input type="text" class="form-control" id="inputZip" placeholder='AAA-0001' name='vehicle_no' maxlength="8" 
  onChange={handleVehicleNoChange}
       />
    </div></td>
      <td >
        {/* <input placeholder="Date" style={{width : 100}}/> */}
      <BootstrapDatePickerComponent newDate={newDate} setDate={setDate}/>
      </td>
      <td >
      <label for="inputState">Select Time</label>
      <select class="form-control" style={{width : 100}} name='time'
        onChange={handleTimeChange}>
       <option value="" selected>Choose ...</option>
        <option value='10 AM'>10 AM</option>
        <option value='11 AM'>11 AM</option>
        <option value='12 PM'>12 PM</option>
      </select></td>
      <td>
      
      <div class="form-group col-md-4"  style={{width : 110}}>
      <label for="inputState">Select District</label>
      <select id="inputState" class="form-control" name='location'
        onChange={handleLocationChange}>
        <option selected value="">Choose ...</option>
        {Districts.map((item, index) => (
    
       <option key={index} value={item}>{item}</option>
  
   
   ))}
      </select>
    </div>

      </td>
      <td >
      <div class="form-group col-md-6" style={{width : 100}}>
      <label for="inputCity">Mileage</label>
      <input type="number" class="form-control" id="inputMileage" placeholder='0000' name='mileage'
        onChange={handleMileageChange}/>
    </div>
    </td>
      <td >
      <div class="form-group col-md-6" style={{width : 180}}>
      <label for="inputCity">Message</label>
      <input type="textbox" class="form-control" id="inputMessage" placeholder='message' name='message'
        onChange={handleMessageChange}/>
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