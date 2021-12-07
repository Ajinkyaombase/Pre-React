import { useState } from "react";

export default () =>{
    // const stateArr = useState(0);
    //const [value,setValue]=stateArr;
    const [value,setValue]= useState(0); //same as above 2 line
    const onClickHandler =()=>{
        setValue(value + 1);
    };
    const onClickHandlerDecre =()=>{
        setValue(value - 1);
    };
    return(
        <>
        <h1>Value: {value}</h1>
        <button onClick={onClickHandler}>Increment</button>
        <button onClick={onClickHandlerDecre}>Decrement</button>
        </>
    )
};