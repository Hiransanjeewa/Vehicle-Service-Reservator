import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./header.css"


export default function Home() {
  return (


<nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <div class="container-fluid" id='maindiv'>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://hiransanjeewa.live">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://hiransanjeewa.live">Add Reservation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://hiransanjeewa.live">Profile</a>
        </li>
       
      </ul>
   
    </div>
  </div>
</nav>
  );
};


