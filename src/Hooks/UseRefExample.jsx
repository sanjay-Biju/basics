import React,{useRef} from "react";
function RefTutorial (){
    const inputRef = useRef('')

    const onClick = () =>{
        console.log(inputRef.current.value);
        inputRef.current.value = "";
    };
    return(
        <div>
            <h1>HELLO</h1>
            <input type="text" placeholder="Enter here" ref={inputRef}/>
            <button onClick={onClick}> change</button>
        </div>
          
    );
}
export default RefTutorial