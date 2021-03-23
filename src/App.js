import React from 'react';
// import Dashboad from './Components/dashboad/Dashboad';
import './App.css';
// import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import DisplayCard from './Components/displaycard/DisplayCard';
import { Route, Switch,BrowserRouter as Router, Redirect } from 'react-router-dom';

import ReadNow from './Components/readnow/ReadNow';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row';

// Password - newapiPasswordislong12345//
// Api Key : 75b7ea3d15c34d96a7dd0dc273787e17

class App extends React.Component{
  render(){

    return (
      <div>
    
     <Header />
    <Router>
      <Switch>
       <Route path="/displaycard" component={DisplayCard} />
       <Route path="/readNow" component={ReadNow} />
       <Route path="/login" component = {Login} />
       <Route path="/register" component = {Register}/>
       </Switch>
     </Router>

    <Footer />
    </div>
    )
   
  }
}

export default App;

