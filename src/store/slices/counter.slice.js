import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        reset: () => 0,
        decrement: state => state - 1,
        increment: state => state + 1,
        setCounterGlobal: (state, action) => action.payload
    }
})
export const { reset, decrement, increment, setCounterGlobal } = counterSlice.actions;
export default counterSlice.reducer;