import './ex3.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
//import { decrementByAmount, incrementByAmount } from './features/imgSlice'

export default function EX3() {
  const money = useSelector((state) => state.atm.value)
  const dispatch = useDispatch()
    
  const [text, setText] = useState("");

  return (
    <Stack spacing={2}>

      <h1>ATM machine </h1>

      <Stack spacing={2} direction={'row'}>

      <TextField fullWidth onChange={e => setText(e.target.value)} id="outlined-basic" label="Amount" variant="outlined" />

      {/* <Button onClick={() => dispatch(decrementByAmount(parseFloat(text)))} variant="contained">Withdraw</Button>
      <Button onClick={() => dispatch(incrementByAmount(parseFloat(text)))} variant="contained">Deposit</Button> */}
      

      </Stack>

      <h3> You still have {money} €</h3>



    </Stack>
  )
}

