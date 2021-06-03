import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggleCart(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})


export const UiActions = UISlice.actions;
export default UISlice