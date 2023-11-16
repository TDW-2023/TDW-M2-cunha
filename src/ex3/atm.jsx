import { configureStore } from '@reduxjs/toolkit'
import atmReducer from './features/atmSlice'

export const ATM = configureStore({
  reducer: {
    atm: atmReducer,
  },
})