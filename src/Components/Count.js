import React, {Component} from 'react'

class Count extends Component{

    constructor(){
        super();
        this.state ={
            count:0
        }
    }

    incrementCount(){
        this.setState({
            count :this.state.count+1
        },() => console.log(this.state.count) )
        console.log('console log is :',this.state.count)
    }
    decrementCount(){
        this.setState({
            count :this.state.count-1
        })
    }
    render(){
        return(
            <div>
                <h1>Count is {this.state.count}</h1>
                <button onClick={() => this.incrementCount()}>Increment</button>
                <button onClick={() => this.decrementCount()}>Decrement</button>
            </div>
        )
    }

}

export default Count;