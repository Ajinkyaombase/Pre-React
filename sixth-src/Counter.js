import { Component } from "react";
import { connect } from "react-redux";
import React from "react";




class Counter extends Component{

    render(){
        console.log(this.props);
        return(
            <>
            <h1>Counter:{this.props.counter}</h1>
            <button onClick={this.props.increment}>Increment</button>
            <button onClick={this.props.decrement}>Decrement</button>
            <button onClick={this.props.multiplication}>Multiplication</button>
            <button onClick={this.props.division}>Division</button>
            
            </>
        )
    }
}

const mapStateToProps=(state)=>{
     return{
         counter:state.counter,
     }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      increment:()=>dispatch({ type:"increment"}),
      decrement:()=>dispatch({ type:"decrement"}), 
      multiplication:()=>dispatch({type:"multiplication"}),
      division:()=>dispatch({type:"division"}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);