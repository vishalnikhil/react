

import{configureStore} from "@reduxjs/toolkit"

import cartReducer from "./cartSlice"

//now we need to add slice to our store




   const appStore=configureStore({


          reducer:{

              cart:cartReducer,
            
          }
            

   });


   export default appStore;