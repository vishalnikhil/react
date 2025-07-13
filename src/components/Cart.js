import React from 'react'
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux';
import { clearCart } from '../utlis/cartSlice';




const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

    
 const dispatch=useDispatch();

  const handleClearcart=()=>{

    dispatch(clearCart());
     
  }




  return (
    <div className='flex w-4 p-4  '>
     
        <h1 className='m-4 p-4 text-2xl text-center '>{cartItems}</h1>


        <button  onClick={handleClearcart} className='border-2 h-16 w-16 bg-amber-200 hover:bg-amber-400'>clear cart</button>

        
        {cartItems.length ===0  && <h1>you cart is empty</h1>}

           
      
      
    </div>
  )
}

export default Cart
