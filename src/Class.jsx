import React from "react";

class ClassComp extends React.Component{
     constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.handleClick=this.handleClick.bind(this);
        console.log("constructor");
     }
     handleClick (id){
        console.log("Clicked!",id);
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
        let id =2;
        return(
            <div>
            <h1> Count is {this.state.count}</h1>
            <button onClick={this.OnchangeCount}>Increment Count</button>
            <button onClick={this.DecrementCount}>Decrement Count</button>
            <button onClick={()=>this.handleClick(id)}>Event handle</button>
            </div>
        )
    }

}

export default ClassComp