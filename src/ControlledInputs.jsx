import React, { Component, useState } from 'react'

class ControlledInputs extends Component  {
    constructor(props){
        super(props)
        this.name=React.createRef()
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
       console.log(this.name.current.value);
    }

    render(){
        return(
            <>
            <h1>My name </h1>
            <form onSubmit={this.handleSubmit}>
            <input type='text'
            ref={this.name}
            />
            <button type='submit'>Click</button>

            </form>
          
            </>
        )
    }
 
}

export default ControlledInputs