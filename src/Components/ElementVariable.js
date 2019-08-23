import React,{Component} from 'react'

class ElementVariable extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn : true
        }
    }

    render(){
        let message
        if(this.state.isLoggedIn){
            message= <div>This is IF Element</div>
        }
        else{
            message=<div>This is ELSE Element</div>
        }
        
            return(message)
    }
}

export default ElementVariable