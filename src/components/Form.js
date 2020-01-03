import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:''
        }
    }
    handleUsernameChange =(event)=>{
          this.setState({
              username: event.target.value
          },console.log(this.state.username));
    }
    
    render() {
        return (
            <div>
                <h2>My form</h2>
                <form>
                    <div>
                        <label>Username:</label>
                        <input types="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                </form>
            </div>
        )
    }
}
