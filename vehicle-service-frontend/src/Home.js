
import React from 'react';
import Header from './components/header';
import "bootstrap/dist/css/bootstrap.min.css";
import Reservation from './components/reservations';
import ReservationSender from './components/reservationSender';
import UserProfile from './components/userProfile';



export default function Home() {

    return(
        <div className='maindiv'>
          
                   <Header/>
                   <Reservation/>
                   <ReservationSender/>
                   <UserProfile/>
                  

        
         
        </div>
    )

}