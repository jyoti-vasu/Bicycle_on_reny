import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import CheckHere from './CheckHere';
//import { Router, Switch, Route } from "react-router-dom";
import './Styling.css'
import { Link,NavLink } from 'react-router-dom';



export default class Home extends Component {
    render() {
        return (
            <div>
             <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootstrap.Navbar.Brand href="#home">Bicycle on Rent</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
  <ReactBootstrap.Nav className="mr-auto">
   <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
   <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
    <ReactBootstrap.NavDropdown title="Select" id="collasible-nav-dropdown">
    <ReactBootstrap.NavDropdown.Item href="#action/3.1">Kid per cycle 100/-</ReactBootstrap.NavDropdown.Item>
    <ReactBootstrap.NavDropdown.Item href="#action/3.2">Men per cycle 200/-</ReactBootstrap.NavDropdown.Item>
    <ReactBootstrap.NavDropdown.Item href="#action/3.3">Women per cycle 300/-</ReactBootstrap.NavDropdown.Item>
    <ReactBootstrap.NavDropdown.Divider />
    </ReactBootstrap.NavDropdown>
    </ReactBootstrap.Nav>

    <ReactBootstrap.Nav>
      <ReactBootstrap.Nav.Link href="#deets">More</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link eventKey={2} href="#memes"> Dank memes</ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>

<button type="submit" className="check-button" Router path='/CheckHere'> Check here</button>


{/* <CheckHere/>  */}
      </div>
    )
  }
}
