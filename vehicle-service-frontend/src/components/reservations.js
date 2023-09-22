
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./reservation.css"
import  { useState } from 'react';
import AddReservationForm from './AddReservation';
import axios from 'axios';
import { getCookie } from '../utils/cookieUtils';





export default function Reservation() {

  
  // Testing

  const [loading, setLoading] = useState(true);


  const [showOtherComponent, setShowOtherComponent] = useState(false);

  const handleClick = () => {
    setShowOtherComponent(true);
  };



  // TEsting

  const [reservations, setShowReservations] = useState();

      const email = {
        email : "hiransanjeewa@gmail.com" 
      }
      
      const token = getCookie('Token')
     // var reservationsSet ;
   

      const fetchData = async () => {
        try {
          const headers = {
            'Authorization': `Bearer ${token}`,
          };

          const response = await axios.post('http://localhost:8080/get-reservations',email,
          { headers })
          setShowReservations(response.data)
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);

     
      const handleDelete = async (event) => {

        if(window.confirm("Are you sure to remove this reservation ?")){
       
        
        const deleteReservationDto = {
          book_id :  event.target.value
        }
        try {
          const response = await axios.post('http://localhost:8080/delete-reservation',deleteReservationDto);
          console.log(response.data)
          fetchData()
        } catch (error) {
          console.error('Error fetching data:', error);
        }
       }
       };


      
      function isFutureTime(timeString) {
      const [hoursString, minutesString] = timeString.split(':');
      const hours = parseInt(hoursString);
      const minutes = parseInt(minutesString);
      
      // Create a Date object with the current date and the provided time
      const currentTime = new Date();
      currentTime.setHours(hours, minutes, 0, 0);
      
      // Get the current time
      const now = new Date();
      
      // Check if the time is in the future or in the past
      if (currentTime > now) {
       
        return true;
      } 
      else {
       
        return false;
      } }


      const upcoming_reservation = {
        backgroundColor: "yellow",
        fontStyle: "italic",
      };

      
      function pastFutureDate(dateString, timeString) {
        const date = new Date(dateString);
      //  console.log(dateString)

// Get the current date
const currentDate = new Date();


 



// Check if the date is today or in the future
//console.log(date +'->'+ currentDate)
if (date > currentDate) {
 
  return true;
} else if (date.toDateString() === currentDate.toDateString()) {
    if (isFutureTime(timeString)) {

 
      return true;
    }
    else {
      return false;
    }
} 
else {
  return false;
}
        
      }

   
   return (
    <div>
        <table class="table " id='reservations-table'>
  <thead>
    <tr>
      <th scope="col" style={{width:80}}>Booking_No</th>
      <th scope="col" style={{width:80}}>Vehicle_No</th>
      <th scope="col" style={{width:100}}>Date</th>
      <th scope="col" style={{width:70}}>Time</th>
      <th scope="col" style={{width:80}}>Location</th>
      <th scope="col" style={{width:80}}>Mileage</th>
      <th scope="col" style={{width:170}}>Message</th>
      <th scope="col" style={{width:80}}>Status</th>
    </tr>
  </thead>

  <tbody>

  {loading ? (
            <tr>
              <td colSpan={8}>Loading...</td>
            </tr>
          ) : (
            reservations.map((item, index) => (

              
             
              <tr
  

  className={ pastFutureDate(item.date.slice(0, 10), item.time.slice(0, 5))
    ? "upcoming"
    : {}}
    >
      
    <td> {item.book_id}</td>
    <td> {item.vehicle_no}</td>
    <td> {item.date.slice(0, 10)}</td>
    <td> {

     item.time.slice(0, 5)
    // pastFutureTime(item.time.slice(0, 5))
    
    }</td>
    <td> {item.location}</td>
    <td> {item.mileage}</td>
    
    {pastFutureDate(item.date.slice(0, 10),item.time.slice(0, 5)) ? (
    
           <td> {item.message} <strong>(Upcoming)</strong></td>
          ) : (
            <td> {item.message}</td>
          )}

   
    
    {pastFutureDate(item.date.slice(0, 10),item.time.slice(0, 5)) ? (
           <td> 
            <button value={item.book_id} class="form-control" onClick={handleDelete} style={{width : 80, height : 40}}>
            Delete </button> </ td> 
          ) : (
           <td> 
           <>Completed</> 
           </td>
          )}
    
    
  </tr>


    )))
    }

          
   
    
    
      {!showOtherComponent && (
       
        <td 
        colSpan={8} 
       id='newReservation'>
      <button onClick={handleClick}>
          Add New Reservation
      </button>
  
  </td>
      )}

      {/* Conditionally render the OtherComponent */}
      {showOtherComponent && <AddReservationForm removeReservationAdder={setShowOtherComponent} showReservstions= {fetchData}/>}
    
    
      </tbody>
</table>





 



</div>
);
};