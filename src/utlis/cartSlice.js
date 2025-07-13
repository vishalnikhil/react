
import { createSlice } from "@reduxjs/toolkit";


  const cartSlice=createSlice({
        
       name:'cart',
       initialState:{
            items:["pizaa","burger","pasta"],
       },

       reducers:{

        //here modifiaction takes place

           addItem:(state,action)=>{

            state.items.push(action.payload);
               
           },

           removeItem:(state)=>{
                state.items.pop();
           },

           clearCart:(state)=>{
            //  state.items.length=0;
                 state.items.length=state.items.length-1;  
           }

       },


  })

  export const{addItem,removeItem,clearCart} = cartSlice.actions;


  export default cartSlice.reducer;