import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState={
    cartItems:[]
}

export const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        handelClick(state,action){
            console.log(action.payload)
            const items=action.payload
            const productItems=state.cartItems.find(state=>state.id===items.id)
            if(productItems){productItems.quantiter+=1;
             Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been updated",
                showConfirmButton: false,
                timer: 1000
              });}
            else{
                state.cartItems=[items,...state.cartItems]
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1000
                  });
            } 
           },
           decrement(state,action){
            const items=action.payload
            const productItems=state.cartItems.find(state=>state.id===items.id)
            if(productItems) { productItems.quantiter-=1
             if (productItems.quantiter==0)
             { state.cartItems= state.cartItems.filter(state=>state.id!==items.id)}
             else
             state.cartItems=[...state.cartItems]
            }
            }, 
            increment(state,action){
                const items=action.payload
                const productItems=state.cartItems.find(state=>state.id===items.id)
                if (productItems){productItems.quantiter+=1
                state.cartItems=[...state.cartItems]}
            },
          handelDelete(state,action){
               const items=action.payload
                const productItems=state.cartItems.find(state=>state.id===items.id)
            if (productItems){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been deleted",
                    showConfirmButton: false,
                    timer: 1000
                  });
                      state.cartItems=state.cartItems.filter(state=>state.id!==items.id)
                    }
                    
                   
            
              

    }
}})
export default CartSlice.reducer;
export const {handelClick,decrement,increment,handelDelete}=CartSlice.actions