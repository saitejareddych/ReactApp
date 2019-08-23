import React from 'react'
import './Greet.css';

function Greet(props){
    
    return(
        <div >
            <p> This is functional component by {props.name}</p>
            <p>This line does not contain any props</p>
        </div>
    
    );
}

export default Greet;