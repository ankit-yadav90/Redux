import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { 
    value: 0 
},
  reducers:{
    incremente:(state)=>{
        state.value += 1
    },
    decrement:(state)=>{
        state.value -= 1
    },
    IncriseBuyAmount:(state,actions)=>{
        state.value += actions.payload
    }
  }
});

export const {incremente,decrement,IncriseBuyAmount} = counterSlice.actions
export default counterSlice.reducer 