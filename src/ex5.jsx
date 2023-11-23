import { useState, useEffect } from 'react'
import './ex5.css'
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux'
import { fetchImg } from './ex3/features/imgSlice'
import Button from '@mui/material/Button';
import { useGetCatImgQuery } from './ex3/features/catSlice'



export default function EX5() {

  const [img, setImg] = useState(null);


  const { data, error, isLoading } = useGetCatImgQuery()

  console.log(data)
  console.log(error)
  console.log(isLoading)





  return (
    <Stack spacing={2}>

    { data &&
      <img src={data[0].url} />
    }

    </Stack>
  )
}

