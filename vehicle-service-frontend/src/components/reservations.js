
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./reservation.css"
import  { useState } from 'react';
import AddReservationForm from './AddReservation';
import axios from 'axios';


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




      var reservationsSet ;

      const fetchData = async () => {
        try {
          const response = await axios.post('http://localhost:8080/get-reservations',email);
          setShowReservations(response.data)
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);

   

      // useEffect(() => {
      //   // Define a function to send the request
      //   const fetchData = async () => {
      //     try {
      //       const response = await axios.post('http://localhost:8080/get-reservations',email);
            // setShowReservations(response.data)
            // setLoading(false);
      //       //setData(response.data); // Store the response data in state
      //     } catch (error) {
      //       console.error('Error fetching data:', error);
      //     }
      //   };
    
      //   // Call the fetchData function to send the request when the component mounts
      //   fetchData();
      // }, []); // Empty dependency array ensures this effect runs only once

      
      // // function getReservations() {
      //   axios.post(
      //     'http://localhost:8080/get-reservations',
      //     email,
      //     ).then(response=>{
      //       reservationsSet = response.data
      //       setShowReservations(reservationsSet)
      //       setLoading(false);
      //       console.log(response.data)
      //      } )
      // // }
      // // getReservations()
  

     
     
    
      // const [data, setData] = useState(reservations);
   return (
    <div>
        <table class="table table-dark" id='reservations-table'>
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
             
    <tr key={index}>
      
    <td> {item.book_id}</td>
    <td> {item.vehicle_no}</td>
    <td> {item.date.slice(0, 10)}</td>
    <td> {item.time.slice(0, 5)}</td>
    <td> {item.location}</td>
    <td> {item.mileage}</td>
    <td> {item.message}</td>
    <td> Completed</td>
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