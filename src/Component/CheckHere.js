import React, { Component } from 'react'
//import { Button, FormGroup, FormControl, ControlLabel } from "./Component/react-bootstrap";
import ReactDOM from 'react-dom';
//import Details from './Details';
import './Styling.css'

export default class CheckHere extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kids: '',
            Men: '',
            Women: '',
        };
      }
      myChangeHandler = (event) => 
      {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
      myChangeHandler = (event) => 
      {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
      myChangeHandler = (event) => 
      {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
       CheckHere=()=>
       {
       // this.props.history.push('/CheckHere');
        alert("your application is sent!!"); 
       }
     /*  kidValue=(event)=>
      {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      } */

    render() {
        return (
            <form className="checkhere">
            <h1 className="heading">Welcome dear {this.state.kids} {this.state.Men} {this.state.Women} Apply for your ride </h1>
            <br/><br/>
            Enter number of cycle for Kids : <input type='text' md="4" name='kids' onChange={this.myChangeHandler} />
            <br/><br/>
            Enter number of cycle for Men : <input type='text' md="4" name='Men' onChange={this.myChangeHandler} />
            <br/><br/>
            Enter number of cycle for Women : <input type='text' md="4" name='Women' onChange={this.myChangeHandler} />
            <br/><br/>
            <input type="checkbox" label="Check me out"/> Deliver to address
            <br/><br/>
           Address : <textarea value={this.state.description} />
            <br/><br/>
            Total payable amount :  {/* <input type='text' onChange={this.kidValue} /> */}
            <br/><br/>
            {/* <input type='submit' onClick={this.CheckHere} variant="primary"/>  */}
            {/* <button type='submit' className='btn btn-primary ' onClick={this.CheckHere}> CheckHere </button>
            <br/><br/> */}
           {/*  <Details/> */}
            </form>

        )
    }
}



