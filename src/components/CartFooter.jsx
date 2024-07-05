import React from "react";
import { useNavigate } from "react-router-dom";
 

const Cartfooter=()=>
{
    const navigate=useNavigate();
    const handleclick=()=>{
        navigate('/cart');
    }
    return(<div onClick={handleclick} className="footer">Head to cart🛒</div>)
}
export default Cartfooter;