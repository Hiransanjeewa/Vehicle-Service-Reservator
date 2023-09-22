import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "@asgardeo/auth-react";
import { useAuthContext } from "@asgardeo/auth-react";
import { useEffect } from 'react';


const config = {
  signInRedirectURL: "http://localhost:3000",
  signOutRedirectURL: "http://localhost:3000",
  clientID: "ArEoe_i9eift2yjz2Hfh2Of6Qw0a",
  baseUrl: "https://api.asgardeo.io/t/hiran",
  scope: [ "openid","profile","email" ]
};

function App() {




  return (
 
 <AuthProvider config={ config }>

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
    
    </AuthProvider>
   
  );
}

export default App;
