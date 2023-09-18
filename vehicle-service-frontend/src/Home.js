
import React from 'react';
import Header from './components/header';
import "bootstrap/dist/css/bootstrap.min.css";
import Reservation from './components/reservations';



export default function Home() {

    return(
        <div className='maindiv'>
          
                   <Header/>
                   <Reservation/>
                  

        
         
        </div>
    )

}