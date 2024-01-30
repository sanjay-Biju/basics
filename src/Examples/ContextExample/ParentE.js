import React,{useState} from "react";
import  ChildOneE from "./ChildOneE";
import ChildTwoE from "./ChildTwoE";
import { ValueContexts } from "./ControllerE";
const ParentE = () =>{
    const [value,setValue] = useState('')
    
    const onChange = (event) =>{
        const NewValueN =event.target.value;
        setValue(NewValueN);
    }
    console.log(value);
    return(
        <ValueContexts.Provider value={{onChange,value}}>
            <div>
                <ChildOneE/>
                <ChildTwoE/>
            </div>
        </ValueContexts.Provider>
    )

}
export default ParentE