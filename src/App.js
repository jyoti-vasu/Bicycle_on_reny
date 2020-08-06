import React from 'react';
import logo from './logo.svg';
import './App.css';
import Totaling from './Component/Totaling';
import { BrowserRouter as Router, Link, NavLink, Switch, Route} from 'react-router-dom'
import CheckHere from './Component/CheckHere';
//import * as ReactBootstrap from 'react-bootstrap';
import Details from './Component/Details';
import Home from './Component/Home';
//import { Button, FormGroup, FormControl, ControlLabel } from "./Component/react-bootstrap";


function App() {
  return (
    <div>

      <Home/>
      <CheckHere/>
      <Details/>
      <Totaling/>


{/* <Router>
  
    {/* <li><Link to ='/'>Home</Link></li> */}
  {/* <Switch>
  <Route  path='/' exact component={Navbar}/> 
  <Route path='/CheckHere' component={CheckHere}/>
  </Switch> 
  </Router>*/}
 





{/* <Router>
       <h4 >  <NavLink exact to='/'> Home </NavLink>
        <NavLink to='/login'> LogIn </NavLink></h4>
<Switch>
  <Route path='/' exact component={Home}/>
  <Route path='/login' component={Login}/>
  <Route path='/signup' component={Signup}/>
 */}





  {/* <Home/> */}
  
 {/* <CheckHere/>  */}
 {/* <Details/> 
<Totaling/> */}
    </div>
   
);
}
export default App;


