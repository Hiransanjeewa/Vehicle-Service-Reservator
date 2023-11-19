import React, { useEffect, useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import { useLocation } from 'react-router-dom'; // Assuming you're using react-router-dom


// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import axios from "axios";
initFontAwesome();

const App = () => {

   
  const { isAuthenticated ,error,isLoading} = useAuth0();


  useEffect(() => {

   // sessionStorage.setItem('isUserAuthenticated',0)

   // sessionStorage.setItem('isUserAuthenticated',0)
    if ((sessionStorage.getItem('isUserAuthenticated')!=1)&&isAuthenticated) {
    //   console.log('****')
    // }

   // MAke this true only the access code is correct
     sessionStorage.setItem('isUserAuthenticated',1)
      console.log('Passed')
      
      const authUrl =
        'https://vehicle-reservator-organization.us.auth0.com/authorize' +
        '?response_type=code' +
        '&client_id=zEC8341BoJSDT36XZIgjT3W6S6c66odi' +
        '&redirect_uri=http://localhost:3000' +
        '&audience=https://vehicle-service-api.com';

    // Redirect the user to the Auth0 authorization URL
      window.location.href = authUrl;
    
    } else if ((sessionStorage.getItem('isTokenGenerated')!=1)&& isAuthenticated  ) {


      const sendAccessCode = async () => {
        try {
          // Replace 'your-access-code-object' with the actual access code object
          const accessCodeObject = {
            code : "hello"
          };

          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const code = urlParams.get('code');
      
          // Now you can use the code in your component
          console.log('Code from URL:', code);
      

  
          const response = await axios.get('http://localhost:8080/api/public?code='+code);
          
          // Handle the response here
          //console.log('Response:', response.data);

          // Storing the JWT access token
          sessionStorage.setItem('accessToken', response.data);

          // Retrieve token from sessionStorage
          const storedToken = sessionStorage.getItem('accessToken');

          sessionStorage.setItem('isTokenGenerated',1)

          
        } catch (error) {
          // Handle errors here
          console.error('Error:', error);
        }
      };
  
      // Call the function when the component mounts
      sendAccessCode();

      
    }
  }, [isAuthenticated]);


   // sessionStorage.setItem('isTokenGenerated',0)


 // sessionStorage.setItem('isUserAuthenticated',false)

 const AccessToken = sessionStorage.getItem('accessToken');
console.log(AccessToken)

  if (error) {
    return <div>Oops... {error.message}</div>;
  }



  if (isLoading) {
    return <Loading />;
  }





  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/account" component={ExternalApi} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;





