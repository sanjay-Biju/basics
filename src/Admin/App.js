import React from "react";
import District from './Pages/District/District'
import { Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Category from './Pages/Category/Category';
import SubCategory from './Pages/SubCategory/SubCategory'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/District" element={<District />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/SubCategory" element={<SubCategory />}/>
      </Routes>
    </>
  )

}
export default App