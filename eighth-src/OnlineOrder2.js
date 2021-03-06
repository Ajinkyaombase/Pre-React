import { useState } from "react";
import OnlineOrderChild from "./OnlineOrderChild";


const OnlineOrder2 =(props) =>{
    console.log(props);
    const status=[
        "Order Placed","Pending","Preparing","Out for delivery","Delivered"
    ];
    const [value ,setValue] =useState(0);
    const onClickHandler=()=>{
        setValue(value+1);
    };

    return(
        <>
        <h1>Online Orders</h1>
        <div>Current status:{status[value]}</div>
        <button onClick={onClickHandler}>Next status</button>
        <OnlineOrderChild onClickHandler={onClickHandler}/>
        </>
    );
}
export default OnlineOrder2;