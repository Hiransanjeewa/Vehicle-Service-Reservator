
import React, { useState } from 'react';
import Header from './components/header';
import "bootstrap/dist/css/bootstrap.min.css";
import Reservation from './components/reservations';
import ReservationSender from './components/reservationSender';
import UserProfile from './components/userProfile';

//import CustomDatePickerComponent from './components/test';
//import Date from './components/date';




export default function Home() {


        const [selectedComponent, setSelectedComponent] = useState('Reservation');
    
        const renderComponent = () => {
            switch (selectedComponent) {
                case 'Reservation':
                    return <Reservation />;
                case 'ReservationSender':
                    return <ReservationSender />;
                case 'UserProfile':
                    return <UserProfile />;
                default:
                    return <Reservation />; // Default to Reservation if the state is invalid.
            }
        };
    
        return (
            <div className='maindiv'>
                <Header setSelectedComponent={setSelectedComponent} />
                {renderComponent()}

               {/* <BootstrapDatePickerComponent/> */}


       
             
                
            </div>
         

           
        );
    }
