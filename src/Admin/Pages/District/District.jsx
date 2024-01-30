import React, { useEffect, useState } from "react";
import './district.css'
const District = () => {

  const [district, setDistrict] = useState('')

  useEffect(() => {
    setDistrict('mr')
  },[])

  return(
    <div className="mainbox">
        <div className="subbox">
            <div className="box1">
                <div className="district">DISTRICT</div>
                <div className="value"> <input type="text" placeholder="Enter Your District" onChange={(event) => setDistrict(event.target.value)}/></div>
            </div>
            <div className="box2"><button>Submit</button></div>
        </div>
        {
         district
        }

    </div>
  )

}
export default District