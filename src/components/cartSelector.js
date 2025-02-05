import { createSelector } from "@reduxjs/toolkit";

export const selectCart = (state) => state.cart.items; // ✅ Only return items array

export const selectTotalPrice = createSelector(
    [selectCart], 
    (cartItems) => cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);
