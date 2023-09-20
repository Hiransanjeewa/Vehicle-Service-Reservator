
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


    // const reservations = [
    //     {
    //       "book_id": 302,
    //       "name": "DjGihantha",
    //       "email": "djgihantha@gmail.com",
    //       "phone": "4534535324",
    //       "date": "2023-09-18T00:00:00.000+00:00",
    //       "time": "17:51:12",
    //       "location": "Nuwara Eliya",
    //       "vehicle_no": "DJ-0005",
    //       "mileage": 2344,
    //       "message": "Gammak thamai"
    //     },
    //     {
    //         "book_id": 303,
    //         "name": "GihanthaBro",
    //         "email": "djgihantha@gmail.com",
    //         "phone": "4534535324",
    //         "date": "2023-09-18T00:00:00.000+00:00",
    //         "time": "17:51:12",
    //         "location": "Kurunagla dote",
    //         "vehicle_no": "DJ-0005",
    //         "mileage": 2346,
    //         "message": "Masa ganakin service karala na dsasda sdas da sdasdas das"
    //       }
    //   ];


      const email = {
        email : "hiransanjeewa@gmail.com" 
      }


      var reservationsSet ;
      function getReservations() {
        axios.post(
          'http://localhost:8080/get-reservations',
          email,
          ).then(response=>{
            reservationsSet = response.data
         
            setLoading(false);
            console.log(response.data)
           } )
      }
      getReservations()
      setShowReservations(reservationsSet)

     
     
    
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
      {showOtherComponent && <AddReservationForm removeReservationAdder={setShowOtherComponent}/>}
    
    
      </tbody>
</table>





 



</div>
);
};