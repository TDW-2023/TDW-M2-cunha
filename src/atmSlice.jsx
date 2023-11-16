import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 200,
}

export const atmSlice = createSlice({
  name: 'atm',
  initialState,
  reducers: {
    decrementByAmount: (state, action) => {
        state.value += action.payload
    },
    incrementByAmount: (state, action) => {
        state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { decrementByAmount, incrementByAmount } = atmSlice.actions

export default atmSlice.reducer