import React, { useContext } from "react"
import {ValueContext} from './Controller'
const ChildOne = () =>{

    const {OnChange} = useContext(ValueContext)
 


    return(
        <div>
            <p>ChildOne</p>

        <input type="text" onChange={OnChange}></input>
       
        </div>
    )
}
export default ChildOne