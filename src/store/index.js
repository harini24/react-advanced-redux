import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart-slice";
import UISlice from "./ui-slice";

const store = configureStore({
    reducer: {
        ui: UISlice.reducer,
        cart: CartSlice.reducer
    }
})

export default store