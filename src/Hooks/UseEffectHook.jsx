import { useEffect, useState } from "react";
 
const UseEffectHook = () =>{
    const [district, setDistrict] = useState('')
    const [count,setCount] = useState(0)
    useEffect(() => { 
    setDistrict("Ernakulam") 
    console.log('hi');
    },[count])
return(
   <div>
     <input type="text" onChange={()=> setCount((prevState) => prevState + 1)} />
    <div>{district}</div>
   </div>
)
}
export default UseEffectHook
