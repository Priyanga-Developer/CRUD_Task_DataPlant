import React from "react";

class ClassComp extends React.Component{
     constructor(){
        super()
        this.state={
            count:0
        }
 
     }
     OnchangeCount=()=>{
        this.setState({
            count:this.state.count+1
        })
     }
     DecrementCount=()=>{
        this.setState({
            count:this.state.count-1
        })
     }
    render(){
   
        return(
            <div>
            <h1> Count is {this.state.count}</h1>
            <button onClick={this.OnchangeCount}>Increment Count</button>
            <button onClick={this.DecrementCount}>Decrement Count</button>
            </div>
        )
    }

}

export default ClassComp