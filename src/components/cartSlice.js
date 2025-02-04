import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items:[],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const product =action.payload;
            const existingProduct = state.items.find(item=>item.id==product.id);

            if(existingProduct){
                existingProduct.quantity+=1;
            }else{
                state.items.push({...product,quantity:1})
            }
            
        },
        removeCart:(state,action)=>{
            state.items=state.items.filter(item=>item.id!==action.payload.id)
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }
})

export const {addToCart,removeCart,clearCart} =cartSlice.actions;
export default cartSlice.reducer;