import React, {Component} from 'react'

class Form extends React.Component{

    constructor(props){
        super(props)
        this.state={
            UserName: ' ',
            textarea: '',
            dir: 'file.txt'
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

    submitHandler = event => {
        const writeFileP = require("write-file-p");
        writeFileP(`file.txt`, "Hello World", (err, data) => {
            console.log(err || data);
        });
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