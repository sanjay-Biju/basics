import React from "react";
import {Routes, Route} from 'react-router-dom'
import UseRefExample from "./UseRefExample"
import ContextExample from "./ContextExample/ParentE"
import CallBack from "./UseCallBackExample/UseCallBackExample";
import Calculation from "./Homework/SalaryCalculation";
 
const App = () =>{
    return(
        <>
        <Routes>    
            <Route path="/UseRefExample" element={<UseRefExample/>} />
            <Route path="/ContextExample" element={<ContextExample/>}/>
            <Route path="/UseCallBackExample" element={<CallBack/>} />
            <Route path="/SalaryCalculation" element={<Calculation/>} />

        </Routes>
        </>
    )
}
export default App