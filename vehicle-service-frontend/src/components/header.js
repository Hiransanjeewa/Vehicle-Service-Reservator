import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./header.css"


export default function Home({ setSelectedComponent }) {
  return (


<nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid" id='maindiv'>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" onClick={() => setSelectedComponent('Reservation')}>Reservations</button>
        </li>
        {/* <li className="nav-item">
          <button className="nav-link" onClick={() => setSelectedComponent('ReservationSender')}>Add Reservation</button>
        </li> */}
        <li className="nav-item">
          <button className="nav-link" onClick={() => setSelectedComponent('UserProfile')}>Profile</button>
        </li>
       
      </ul>
   
    </div>
  </div>
</nav>
  );
};


