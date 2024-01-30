import React, { useState } from "react";
import './Category.css'
const Category = () => {
    const [category,setCategory] = useState('')
    return (
        <div className='category'>
            <div className="cat-container">
                <div className="cat-contaner1">
                    <div className="category-name">Category</div>
                    <div className="category-value"><input type="text" placeholder="Enter Category" onChange={(event) =>setCategory(event.target.value)} /></div>
                </div>
                <div className="cat-container2"><button>Submit</button></div>
            </div>
            {
                category
            }

        </div>
    )
}
export default Category