import React from 'react'
import './Greet.css';

function Child(props){
    
    return(
        <div >
            <button onClick={props.greetHandler}>click to greet parent</button>
        </div>
    
    );
}

export default Child;