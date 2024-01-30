import react, { useEffect,useRef,useState } from 'react'
const UseRefHook = () =>{
    const ExpRef =useRef(null)

    const [stateName,setStateName] = useState('')

    const buttonHandle = () =>{
        setStateName(ExpRef.current.value)
    }
    useEffect(() =>{
        ExpRef.current.focus();
    },[])

    return(
        <div>
            <input type="text"  name=""  id="" ref={ExpRef} placeholder='Enter your Name'/>
            <button onClick={buttonHandle}>click</button>
            <div>
                {
                    stateName
                }
            </div>
        </div>

    )
}
export default UseRefHook