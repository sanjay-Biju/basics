
import React,{useContext} from "react";
import {  ValueContexts } from "./ControllerE";

const ChildTwoE = () =>{
    const {value} = useContext(ValueContexts)
    return(
        <div>
            <p>child two</p>
            {
                value
            }
        </div>
    )
}
export default ChildTwoE