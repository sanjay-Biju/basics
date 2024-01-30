import React, { useState } from "react";
const StateTutorial = () =>{
    const[inputValue,setInputValue] = useState('');

    let onChangeD = (event) =>{
       const newValue= event.target.value;
       setInputValue(newValue); 
    };

    return(
        <div>
            <input placeholder="Enter your name" onChange={onChangeD}></input>
            {inputValue}
        </div>
    );
};
export default StateTutorial