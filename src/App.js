import React from "react";
import Admin from './Admin/App'
import Hook from './Hooks/App'
import Examples from './Examples/App'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <Routes>
      <Route path="/Admin/*" element={<Admin/>} />
      <Route path="/Hook/*" element={<Hook/>} />
      <Route path="/Examples/*" element={<Examples/>} />
    </Routes>
  )

}
export default App