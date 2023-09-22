
import React, { useEffect, useState } from 'react';
import Header from './components/header';
import "bootstrap/dist/css/bootstrap.min.css";
import Reservation from './components/reservations';

import UserProfile from './components/userProfile';
import { useAuthContext } from "@asgardeo/auth-react";
import { setCookie, getCookie, deleteCookie } from "./utils/cookieUtils";



//import { useAuthContext } from "@asgardeo/auth-react";




//import CustomDatePickerComponent from './components/test';
//import Date from './components/date';




export default function Home() {

    const { state, signIn, signOut } = useAuthContext();

const { getAccessToken } = useAuthContext();

useEffect(() => {
    getAccessToken().then((accessToken) => {
        setCookie('Token', accessToken, 30);
        console.log(accessToken);
    }).catch((error) => {
        //console.log(error);
    });
}, []);



// Identity provider
//const { state, signIn, signOut } = useAuthContext();
//<button onClick={ () => signIn() }>Login</button>

// const { getAccessToken } = useAuthContext();

// useEffect(() => {
//     getAccessToken().then((accessToken) => {
//         //console.log(accessToken);
//     }).catch((error) => {
//         //console.log(error);
//     });
// }, []);















        const [selectedComponent, setSelectedComponent] = useState('Reservation');
    
        const renderComponent = () => {
            switch (selectedComponent) {
                case 'Reservation':
                    return <Reservation />;
                case 'ReservationSender':
                    return <Reservation />;
                case 'UserProfile':
                    return <UserProfile />;
                default:
                    return <Reservation />; // Default to Reservation if the state is invalid.
            }
        };
    
        return (
            <div className='maindiv'>
                <Header setSelectedComponent={setSelectedComponent} />
                <button onClick={ () => signIn() }>Login</button>
                {renderComponent()}

               {/* <BootstrapDatePickerComponent/> */}


       
             
                
            </div>
         

           
        );
    }
