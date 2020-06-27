import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './navbar.css';
class Navbar extends Component
{
    render()
    {
    return(
<div className="Navbar">
<nav class="navbar fixed-top navbar-expand-lg navbar-light"  style={{margin:0,padding:0,backgroundColor:"rgba(0, 0, 0, 0.25)"}}>
<Link className="navbar-brand" to="/" style={{color:"#a79a55"}}>Dice 'n' Dine</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
    <li class="nav-item">
                <Link class="nav-link" to="/" style={{color:"white"}}>Home</Link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#about" style={{color:"white"}}>About</a> 
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/menu" style={{color:"white"}}>Menu</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/blog" style={{color:"white"}}>Stories</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/contact" style={{color:"white"}}>Contact</Link>
            </li>
            <li class="nav-item" style={{backgroundColor:"#a79a55"}}>
                <Link class="nav-link" to="/reservation" style={{color:"white"}}>Book A Table</Link>
            </li>
    </ul>
  </div>
</nav>
   </div>
        )
    }
}
export default Navbar;