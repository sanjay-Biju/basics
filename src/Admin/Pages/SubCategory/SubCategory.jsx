import React, { useState } from "react";
import './SubCategory.css'
const SubCategory = () => {
    const [category ,setCategory]=useState('')
    const[subCategory , setSubCategory] =useState('')

    return (
        <div className="SubCategory">
            <div className="sub-SubCategory">
                <div className="sub-SubCategory1">
                    <div className="sub1-SubCat1"> Category</div>
                    <div className="sub2-SubCat1"><input type="text" placeholder="Category" onChange={(event)=>setCategory(event.target.value)} /></div>
                </div>
                <div className="sub-SubCategory2">
                <div className="sub1-SubCat2"> Sub-Category</div>
                    <div className="sub2-SubCat2"><input type="text" placeholder=" Sub Category" onChange={(event)=>setSubCategory(event.target.value)} /></div>
                </div>
                <div className="sub-SubCategory3">
                    <button>Submit</button>
                </div>
            </div>
            {
                category
            }
            {
                subCategory
            }
        </div>
    )
}
export default SubCategory