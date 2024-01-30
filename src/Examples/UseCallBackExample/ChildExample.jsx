
import React,{useEffect} from "react";

function Child({returnComment}){
    useEffect(() =>{
     console.log("function Was Called")
    },[returnComment]);
    return <div>{returnComment("PEDRO")} </div>
}
export default Child;
