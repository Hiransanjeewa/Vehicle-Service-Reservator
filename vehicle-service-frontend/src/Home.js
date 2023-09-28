
import React, { useEffect, useState } from 'react';
import Header from './components/header';
import "bootstrap/dist/css/bootstrap.min.css";
import Reservation from './components/reservations';
import axios from 'axios';
import UserProfile from './components/userProfile';
import { useAuthContext } from "@asgardeo/auth-react";
import { setCookie, getCookie, deleteCookie } from "./utils/cookieUtils";
import jwtDecode from 'jwt-decode';




export default function Home() {

    const { state, signIn, signOut } = useAuthContext();

    const [accessToken, setAccessToken] = useState(null);


    const { token , SetToken} = useState ();
const { getAccessToken } = useAuthContext();


useEffect(() => {
    getAccessToken().then((accessToken) => {
        setCookie('Access_Code', accessToken, 30);
        console.log(accessToken);

async function getAccessToken() {
    const response = await axios.post('https://api.asgardio.com/auth/token', {
      access_code: getCookie('Access_Code'),
      grant_type: 'authorization_code',
    });
    setAccessToken(response.data.access_token);
  }

  async function getJwtToken() {
    const jwtToken = jwtDecode(accessToken);
    setCookie('JwtToken', jwtToken, 30);
    //console.log(jwtToken);
  }


    }).catch((error) => {
        console.log(error);
    });
}, []);


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
