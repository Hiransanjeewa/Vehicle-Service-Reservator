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

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
   
  const { isAuthenticated ,error,isLoading} = useAuth0();
  const [actionPerformed, setActionPerformed] = useState(0);

  useEffect(() => {
    // Check if the action has been performed in sessionStorage
    const hasActionPerformed = sessionStorage.getItem('actionPerformed');

    // if (!isAuthenticated) {
    //   sessionStorage.setItem('actionPerformed', '0');
    // }

    if (isAuthenticated && hasActionPerformed!=1) {
      // Build the Auth0 authorization URL
      const authUrl =
        'https://vehicle-reservator-organization.us.auth0.com/authorize' +
        '?response_type=code' +
        '&client_id=zEC8341BoJSDT36XZIgjT3W6S6c66odi' +
        '&redirect_uri=http://localhost:3000' +
        '&audience=https://vehicle-service-api.com';

      // Redirect the user to the Auth0 authorization URL
      sessionStorage.setItem('actionPerformed', '1');
      window.location.href = authUrl;
      const urlSearchParams = new URLSearchParams(window.location.search);
    
      // Access a specific parameter
      const myParam = urlSearchParams.get('myParam');
      console.log('Value of myParam:', myParam);
    } else {
     // console.log('User is already authenticated');
    }
  }, [isAuthenticated]);

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





