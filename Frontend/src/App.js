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
    if ((sessionStorage.getItem('isUserAuthenticated')!=1)&&isAuthenticated) {
    //   console.log('****')
    // }

   // if (isAuthenticated && !sessionStorage.getItem('isUserAuthenticated')) {

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
  
          const response = await axios.get('http://localhost:8080/api/public?access_code='+accessCodeObject.code);
          
          // Handle the response here
          console.log('Response:', response.data);
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





 // sessionStorage.setItem('isUserAuthenticated',false)

 

  if (error) {
    return <div>Oops... {error.message}</div>;
  }



  if (isLoading) {
    return <Loading />;
  }

 

 //const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  // You can use other properties/methods from the useAuth0 hook as needed

  // const handleSomeAction = async () => {
  //   if (isAuthenticated) {
  //     try {
  //       // Get an access token silently (if needed)
  //       const accessToken = await getAccessTokenSilently();

  //       // Perform actions with the access token, if necessary

  //       console.log(accessToken);
  //       // Note: If you need the authorization code, you may need to use the Auth0 SPA SDK events.
  //       // The Auth0Provider might not expose the authorization code directly.

  //     } catch (error) {
  //       console.error('Error getting access token:', error);
  //     }
  //   }
  // };

  // handleSomeAction()




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





