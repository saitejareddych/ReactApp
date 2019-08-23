import React, {Component} from 'react'

class Form extends React.Component{

    constructor(props){
        super(props)
        this.state={
            UserName: ' ',
            textarea: ''
        }
    }
    textHandler = (event) => {
        this.setState({
            UserName: event.target.value
        })
    }

    TextAreaHandler = event => {
        this.setState({
            textarea : event.target.value
        })
    }

    submitHandler = evenrt => {
        alert(`${this.state.UserName} ${this.state.textarea}`)
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
            <div >
                <h1>Form Component</h1>
                <label>User Name</label>
                <input type='Text' value ={this.state.UserName} onChange={this.textHandler}></input>
                <label>Text Area</label>
                <textarea value ={this.state.textarea} onChange={this.TextAreaHandler}></textarea>
                <button type='submit'>Submit</button>
            </div>
            </form>
        );
    }
}

export default Form;