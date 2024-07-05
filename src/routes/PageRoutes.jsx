import Home from "../pages/homePage";
import Electonics from "../pages/electonicsPage";
import Tools from "../pages/toolsPage";
import { Route,Routes } from "react-router-dom";
import Groceries from "../pages/groceriesPage";
import Groc from "../Groc";
import Too from "../Too";
import Elecs from "../Elec";
import Cart from "../pages/cartPage";
import { useEffect, useState } from "react";
import React from "react";
import CheckoutPage from "../pages/checkoutPage";


const PageRoutes=()=>{
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const[cart, setCart]=useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
    return(
        <div>
        <div className='centerDiv'>ECOMMERCE-WEBSITE</div>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='groceries' element={<Groceries list={Groc} cart={cart} setcart={setCart}/>}/>
          <Route path='electronics' element={<Electonics list={Elecs} cart={cart} setcart={setCart}/>}/>
          <Route path='tools' element={<Tools list={Too} cart={cart} setcart={setCart}/>}/>
          <Route path ='cart' element ={<Cart cart={cart} setcart={setCart}/> }></Route>
          <Route path='checkout' element={<CheckoutPage cart={cart} />} />
        </Routes>
          
        
       </div>
    );

}

export default PageRoutes