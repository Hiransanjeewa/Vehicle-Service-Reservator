import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./header.css"


export default function Home({ setSelectedComponent }) {
  return (


<nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <div class="container-fluid" id='maindiv'>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="nav-link active" aria-current="page" onClick={() => setSelectedComponent('Reservation')}>Reservations</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" onClick={() => setSelectedComponent('ReservationSender')}>Add Reservation</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" onClick={() => setSelectedComponent('UserProfile')}>Profile</button>
        </li>
       
      </ul>
   
    </div>
  </div>
</nav>
  );
};


