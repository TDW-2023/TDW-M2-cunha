import { useState, useEffect } from 'react'
import './ex4.css'
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux'
import { fetchImg } from './ex3/features/imgSlice'
import Button from '@mui/material/Button';



export default function EX4() {

  const img = useSelector((state) => state.img.entities)

  const dispatch = useDispatch()



  return (
    <Stack spacing={2}>

    { img &&
      <img src={img[0].url} />
    }

    <Button onClick={() => {dispatch(fetchImg());console.log(img[0])}} variant="contained">New Image</Button>

    </Stack>
  )
}

