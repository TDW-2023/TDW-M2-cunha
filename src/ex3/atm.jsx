import { configureStore } from '@reduxjs/toolkit'
import imgReducer from './features/imgSlice'

export const IMG = configureStore({
  reducer: {
    img: imgReducer,
  },
})