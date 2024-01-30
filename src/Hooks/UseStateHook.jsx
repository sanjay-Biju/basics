import React,{useState} from 'react'

const UseStateHook = () => {
    const [district, setDistrict] = useState('')

  return (
    <div><input type="text" placeholder="Enter Your District" onChange={(event) => setDistrict(event.target.value)}/></div>
  )
}

export default UseStateHook