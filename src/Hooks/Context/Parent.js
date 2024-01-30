import React, { useState } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
import { ValueContext } from './Controller'


const Parent = () => {
    const[value,SetValue] = useState('')
     
    const OnChange = (event) => {
        const  NewValue = event.target.value;
        SetValue(NewValue);
    };

    return (
        <ValueContext.Provider  value={{OnChange,value}}>
            <div>
                <ChildOne />
                <ChildTwo />
            </div>

        </ValueContext.Provider>

    )
}

export default Parent