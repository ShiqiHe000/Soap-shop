import { createSlice } from "@reduxjs/toolkit";


const itemSlice = createSlice({
    name: "items",
    initialState: {
        items: [],
        error: null,
    },
    reducers: {
        fetchItemsRedux: (state, action) => {
            state.items = action.payload;
        },
        updateItemRedux: (state, action) => {
            const item = state.items.find(
                (item) => item._id === action.payload.id
            );
            if (!item) return;
            item.number = action.payload.number;
        },
        deleteItemRedux: (state, action) => {
            state.items = state.items.filter(
                (item) => item._id !== action.payload
            );
        },
        addItemRedux: (state, action) => {
            state.items.push(action.payload);
        },
    },
    
       
});

export default itemSlice.reducer;

export const {
    fetchItemsRedux,
    updateItemRedux,
    deleteItemRedux,
    addItemRedux,
} = itemSlice.actions;


export const selectItems = (state) => state.items.items;
