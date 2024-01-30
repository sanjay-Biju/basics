import React from "react";
import { Route, Routes } from 'react-router-dom'
import StateTutorial from "./UseStateExample";
import RefTutorial from "./UseRefExample";
import LayoutEffectTutorial from "./UseLayoutEffectExample"
import Parent from "./Context/Parent";
import UseCallBackHook from "./UseCallBackHook";
import UseEffectHook from "./UseEffectHook";
import UseStateHook from "./UseStateHook";
import UseRefHook from "./UseRefHook";
import UseImperativeHandle from "./UseImperativeHandle";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/StateTutorial" element={< StateTutorial/>} />
        <Route path="/RefTutorial" element={< RefTutorial/>} />
        <Route path="/LayouteffectTutorial" element={<LayoutEffectTutorial/>} />
        <Route path="/parent" element={<Parent/>} />
        <Route path="/UseCallBackHook" element={<UseCallBackHook/>} />
        <Route path="/UseEffectHook" element={<UseEffectHook/>} />
        <Route path="/UseStateHook" element={<UseStateHook/>} />
        <Route path="/UseRefHook" element={<UseRefHook/>} />
        <Route path="/UseImperativeHandle" element={<UseImperativeHandle/>} />
        
      </Routes>
    </>
  )

}
export default App