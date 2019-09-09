import React,{Component} from 'react'

class Message extends React.Component{

    constructor(){
        super()
        this.state={
            message:"click here to change text"
        }
    }

    changeMessage=()=>{
        this.setState({
            message: "Text is changed"
        })  
    }
    render(){
        return (
        <div >
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>CLICK</button>
        </div>);
    }
}

export default Message;