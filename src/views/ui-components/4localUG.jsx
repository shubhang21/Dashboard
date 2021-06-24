import React from "react";

import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import img3 from 'assets/images/users/3.jpg';
import img4 from 'assets/images/users/4.jpg';

import CollapsibleTable from './table.jsx';
import "./button.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const localUG = () => {
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

export default localUG;
