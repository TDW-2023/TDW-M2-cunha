import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllImg } from './api'

const initialState = {
  entities: null,
}

export const fetchImg = createAsyncThunk(
  'img/getAllImg',
  async (thunkAPI) => {
    const response = await getAllImg()
    return response.data
  }
)

// export const imgSlice = createSlice({
//   name: 'img',
//   initialState,
//   reducers: {
//     decrementByAmount: (state, action) => {
//         state.value -= action.payload
//     },
//     incrementByAmount: (state, action) => {
//         state.value += action.payload
//     },
//   },
// })
const imgSlice = createSlice({
  name: 'img',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchImg.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const { } = imgSlice.actions

export default imgSlice.reducer

// dispatch(fetchUserById(123))