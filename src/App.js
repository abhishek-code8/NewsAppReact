import React from "react";
// import Dashboad from './Components/dashboad/Dashboad';
import "./App.css";
// import Footer from './Components/footer/Footer';
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import DisplayCard from "./Components/displaycard/DisplayCard";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

import ReadNow from "./Components/readnow/ReadNow";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={DisplayCard} />
              <Route path="/readNow" component={ReadNow} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </Router>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
