import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items:[], // to hold plant objects, plus a quantity property
    totalQuantity:  0, // to keep track of total items for the header badge
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        //add item to cart
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem){
                existingItem.quantity +=1;
            } else {
                //if it's a new plant, add it to the array with quantity of 1
                state.items.push({...action.payload, quantity:1});
            }
            state.totalQuantity +=1;

        },
        //Remove item from cart
        removeItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                state.totalQuantity-= existingItem.quantity; //deduct from total header count
                state.items = state.items.filter(item => item.id !== action.payload); //Remove from array
            }
        },
        //increase or decrease quantity of specific item
        updateQuantity: (state, action) => {
            const { id, amount } = action.payload; // amount will be +1 or -1
            const existingItem = state.items.find(item => item.id === id);

            if(existingItem){
                //we update only if the new quantity would be at least 1
                if (existingItem.quantity + amount > 0) {
                    existingItem.quantity += amount;
                    state.totalQuantity += amount;
                }
            }
        }
    }
});
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;