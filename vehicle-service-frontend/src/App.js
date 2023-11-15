import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "@asgardeo/auth-react";


const config = {
  signInRedirectURL: "http://localhost:3000/",
  // signOutRedirectURL: "http://localhost:3000/",
  clientID: "8rJB8ldpBjemRk56yPFdlarVVAbM7Aq7",
  baseUrl: "dev-amepvrpb215sw37t.us.auth0.com",
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
