import React,{Component} from 'react'

class ShortCircuit extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn : false
        }
    }

    render(){
        return (this.state.isLoggedIn && <div>The value is TRUE</div>)
    }
}

export default ShortCircuit