import React from "react";

class ClassComp extends React.Component{
     constructor(){
        super()
        this.state={
            count:0
        }
        console.log("constructor");
     }
     componentDidUpdate(){
        console.log("update");
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
     componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response)=>response.json())
        .then((users)=>console.log(users))
        console.log("componentDidMount");
     }
     componentDidCatch(){
        
     }
     componentWillUnmount(){
       console.log("unmount");
     }
    render(){
        console.log("render");
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