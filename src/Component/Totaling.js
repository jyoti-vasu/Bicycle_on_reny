import React, { Component } from 'react';
import { Button,Col,Form ,FormLabel,FormCheck, FormGroup,Row, FormControl, ControlLabel }
 from "react-bootstrap";
 //import * as ReactBootstrap from 'react-bootstrap';
 import './Styling.css'


export default class Totaling extends Component {

    amount=()=>
    {
     alert("your refundable amount is ----"); 
    }

    render() {
        return (
            <div>
                <Form className="total">
Total Cycle for Kids : <input type='number' md="4" name='kids' placeholder="Total Cycle for Kids" />
Damaged cycle : <input type='number' md="4" name='kids' placeholder="Damaged cycle" />
<br/><br/>

Total Cycle for Men : <input type='number' md="4" name='Men' placeholder="Total Cycle for Men" />
Damaged cycle : <input type='number' md="4" name='Men' placeholder="Damaged cycle" />
<br/><br/>

Total Cycle for Women : <input type='number' md="4" name='Women' placeholder="Total Cycle for Women" />
Damaged cycle : <input type='number' md="4" name='Women' placeholder="Damaged cycle" />
<br/><br/>

<Button variant="primary" type="submit" onClick={this.amount} >Refundable Amount</Button>
</Form>
            </div>
        )
    }
}







