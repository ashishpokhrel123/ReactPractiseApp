import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    handleclick = () =>{
        
        this.setState({count:this.state.count+1})
    }
    
    render() {
        return (
            <div>
    <h2>You have click{this.state.count} times</h2>
                <button onClick={this.handleclick}>Click me</button>
            </div>
        )
    }
}
