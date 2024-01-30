import React,{useContext} from "react";
import { ValueContexts } from "./ControllerE";

const ChildOneE = () =>{
    const {onChange} = useContext(ValueContexts)
    return(
        
        <div>
            <p>child one</p>

            <input type="text" onChange={onChange}></input>
        </div>
    )
}
export default ChildOneE