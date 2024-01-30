import React, { useContext } from 'react'
import {ValueContext} from './Controller'

const ChildTwo = () => {
    const {value} = useContext(ValueContext)
  return (
    <div>
        <p>ChildTwo</p>
        {
            value
        }
    </div>
  )
}

export default ChildTwo