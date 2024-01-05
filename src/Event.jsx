import React, { Component } from 'react'

class Event extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            count:this.state.count+1
        })
    }

    render(){
        return(
            <>
           <h1>Handling Events</h1>
           <p>The count is {this.state.count}</p>
           <button type='button' onClick={this.handleClick}>Count</button>
           </>
        )
    }
}

export default Event