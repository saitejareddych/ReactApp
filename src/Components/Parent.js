import React, {Component} from 'react'
import Child from './child'

class Parent extends React.Component{

    constructor(){
        super();
        this.state={
            message: 'parent'
        }
    }

    greetParent(){
        this.setState({
            message: "greeting from child method"
        })
        }
     
    greetParent2(){
        this.setState({
            message: "greeting from parent method"
    })
}

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.greetParent2()}>click from parent</button>
                < Child greetHandler={() => this.greetParent()}/>
            </div>
        );
    }
}

export default Parent;