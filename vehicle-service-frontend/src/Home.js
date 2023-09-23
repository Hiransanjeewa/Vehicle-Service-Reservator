
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



    const [jwtToken, setJwtToken] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    


    const { token , SetToken} = useState ();
const { getAccessToken } = useAuthContext();






useEffect(() => {
    getAccessToken().then((accessToken) => {
        setCookie('Token', accessToken, 30);
        console.log(accessToken);

// Testing to get Jwt Token


// var qs = require('qs');

// var data = qs.stringify({
//     'code': getCookie('Token'),
//     'grant_type': 'authorization_code',
//     'client_id': 'fMaSTSmswBnMUcTSY3cmJUH5qUAa',
//     'client_secret': 'cy3jxo8fmGsrw7pzXfmb9c3fpGRTKEX93MQ0OBptABEa',
//     'redirect_uri': 'http://localhost:3000/'
// });
// var config = {
//     method: 'post',
//     url: 'https://api.asgardeo.io/t/hiran/oauth2/token',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     data : data
// };

// console.log(token)
// axios(config)
//     .then(function (response) {
//         SetToken(JSON.stringify(response.data));
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });







async function getAccessToken() {
    const response = await axios.post('https://api.asgardio.com/auth/token', {
      access_code: getCookie('Token'),
      grant_type: 'authorization_code',
    });

    setAccessToken(response.data.access_token);
  }

  async function getJwtToken() {
    const jwtToken = jwtDecode(accessToken);
    setJwtToken(jwtToken);
    console.log(jwtToken);
  }
































    }).catch((error) => {
        console.log(error);
    });
}, []);


        const [selectedComponent, setSelectedComponent] = useState('Reservation');
    
        const renderComponent = () => {
            // switch (selectedComponent) {
            //     case 'Reservation':
            //         return <Reservation />;
            //     case 'ReservationSender':
            //         return <Reservation />;
            //     case 'UserProfile':
            //         return <UserProfile />;
            //     default:
            //         return <Reservation />; // Default to Reservation if the state is invalid.
            // }
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
