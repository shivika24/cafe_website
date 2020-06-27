import React, { Component } from 'react';
import Carasoul from './components/carasoul';
import Navbar from './components/navbar';
import Footer from './components/footer'
import Contact from './components/contact';
import Menu from './components/menu';
import Reservation from './components/reservation';
import Blog from './components/blog';
import Blog1 from './components/blog1';
import Blog2 from './components/blog2';
import Blog3 from './components/blog3';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from "react-router-dom";
class App extends Component
{
  render()
  {
    return(
      <div>
      <Router>
        <Navbar/>
      <Switch>
      <Route exact path="/">
           <Carasoul/>
      </Route>
      <Route path="/contact">
           <Contact/>
      </Route>
      <Route path="/menu">
           <Menu/>
      </Route>
      <Route path="/reservation">
           <Reservation/>
      </Route>
      <Route path="/blog">
           <Blog/>
      </Route>
      <Route path="/blog1">
           <Blog1/>
      </Route>
      <Route path="/blog2">
           <Blog2/>
      </Route>
      <Route path="/blog3">
           <Blog3/>
      </Route>
      </Switch>
      <Footer/>
      </Router>
      </div>
    )
  }
}

export default App;
