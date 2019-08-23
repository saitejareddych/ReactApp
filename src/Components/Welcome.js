import React, {Component} from 'react'

class Welcome extends React.Component{
    render(){
        return(
            <div >
                <h1>This is Class Component {this.props.name}</h1>
            </div>
        );
    }
}

export default Welcome;