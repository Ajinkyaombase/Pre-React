import { createStore } from "redux";



const initialstate={
    counter:2,
}


const reducer=(state=initialstate, action)=>{
    
    const { type}= action;        
    switch (type) {
        case "increment": 
        return{
            counter:state.counter +1,
        };
        case "decrement": 
        return{
            counter:state.counter -1,
        };
        case "multiplication": 
        return{
            counter:state.counter *2,
        };
        case "division": 
        return{
            counter:state.counter /2,
        };
        default:
            return state;
    }
}


const store= createStore(reducer);





export default store;