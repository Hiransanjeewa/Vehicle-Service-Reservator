
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./header.css"
import  { useState } from 'react';

export default function Reservation() {

    const initialData = [
        {
          "book_id": 302,
          "name": "DjGihantha",
          "email": "djgihantha@gmail.com",
          "phone": "4534535324",
          "date": "2023-09-18T00:00:00.000+00:00",
          "time": "17:51:12",
          "location": "Kurunagla dote",
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
            "message": "Masa ganakin service karala na"
          }
      ];
    
      const [data, setData] = useState(initialData);
    
  return (
    <div>
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Booking_No</th>
      <th scope="col">Vehicle_No</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Location</th>
      <th scope="col">Mileage</th>
      <th scope="col">Message</th>
      <th scope="col">Status</th>
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
      </tbody>
</table>



 



</div>
);
};
