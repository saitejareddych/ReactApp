import React,{Component} from 'react'

class IfElseRendering extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn : false
        }
    }

    render(){
        
        if(this.state.isLoggedIn)
        {
            return(<div>Inside If case</div>)
        }
        else{
            return(<div>Inside Else Case</div>)
        }
    }
}

export default IfElseRendering