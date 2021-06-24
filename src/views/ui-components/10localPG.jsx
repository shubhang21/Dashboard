import React from "react";


import CollapsibleTable from './table.jsx';
import "./button.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
   
} from 'reactstrap';

const localpg = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/
        
        <Card>
        <CardBody>
        <div className="fontstyle">
            <div>
                <CardTitle>STUDENT DETAILS</CardTitle>
                
            </div>
            
        </div>
        <CollapsibleTable />
            <p></p>
                     
        <input class='but' type="button" value="Submit"></input>
            
        </CardBody>
    </Card >
    );
}


export default localpg;
 