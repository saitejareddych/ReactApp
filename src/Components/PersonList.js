import React from 'react'

function PersonList({Person1}){
    return(
        <h2>
            This is {Person1.Name}. My age is {Person1.Age}
        </h2>
    )
}

export default PersonList