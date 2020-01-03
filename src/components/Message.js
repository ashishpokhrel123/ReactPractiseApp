import React, { Component } from 'react'

export default class Message extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             message:'22C'
              
         }
     }

     handleClick = ()=>{
        //  alert("You have clicked it");
        this.setState({message:'22C,you clicked it'});
     }
     
    render() {
        return (
            <div>
    <h2>Hello,{this.state.message}</h2>
    <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

