import { configureStore } from '@reduxjs/toolkit'
import atmReducer from './atmSlice'

export const ATM = configureStore({
  reducer: {
    atm: atmReducer,
  },
})