import React,{Component} from 'react'

class Conditional extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn : false
        }
    }

    render(){
        return (this.state.isLoggedIn? (<div>The value is TRUE</div>) : (<div>This value is FALSE statement</div>))
    }
}

export default Conditional