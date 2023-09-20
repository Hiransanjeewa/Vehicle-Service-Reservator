
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./reservation.css"
import  { useState } from 'react';
import './AddReservationForm';
import { AddReservationForm }  from './AddReservationForm'; 

export default function Reservation() {

  const [newReservation, setNewReservation] = useState({
   
    book_id: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    location: '',
    vehicle_no: '',
    mileage: 0,
    message: ''
  } ) 


  // Testing

  const handleAddReservation = (formData) => {
    // Handle the form data here, for example, updating state or making an API call
    console.log('Form Data:', formData);
  };


  // TEsting

    const initialData = [
        {
          "book_id": 302,
          "name": "DjGihantha",
          "email": "djgihantha@gmail.com",
          "phone": "4534535324",
          "date": "2023-09-18T00:00:00.000+00:00",
          "time": "17:51:12",
          "location": "Nuwara Eliya",
          "vehicle_no": "DJ-0005",
          "mileage": 2344,
          "message": "Gammak thamai"
        },
        {
            "book_id": 303,
            "name": "GihanthaBro",
            "email": "djgihantha@gmail.com",
            "phone": "4534535324",
            "date": "2023-09-18T00:00:00.000+00:00",
            "time": "17:51:12",
            "location": "Kurunagla dote",
            "vehicle_no": "DJ-0005",
            "mileage": 2346,
            "message": "Masa ganakin service karala na dsasda sdas da sdasdas das"
          }
      ];
    
      const [data, setData] = useState(initialData);
      const addNewReservation =   <td colSpan={8} id='newReservation'>
      <button onClick={() => AddReservationForm(setNewReservationForm)}>
          Add New Reservation
      </button>
 
  </td>

      const [newReservationForm, setNewReservationForm] = useState(addNewReservation);
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
         {data.map((item, index) => (
       
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
 

      ))}

   
       
        {newReservationForm}

      
      </tbody>
</table>



 



</div>
);
};