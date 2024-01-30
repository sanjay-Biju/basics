import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="maincontainer-navbar" >
            <div className="container-navbar">
            <div className="style" ><Link to='/Admin/District' className="decoration">District</Link></div>
            <div className="style"><Link to='/Admin/Brand' className="decoration">Brand</Link></div>
            <div className="style"><Link to='/Admin/Category' className="decoration">Category</Link></div>
            <div className="style"><Link to='/Admin/SubCategory' className="decoration">SubCategory</Link></div>
            <div className="style" ><Link to='/Admin/Place' className="decoration">Place</Link></div>
            </div>
            
        </div>
    )
}
export default Navbar