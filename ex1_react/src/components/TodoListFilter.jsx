import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react'


export default function TodoListFilter(props) {

    const [select, setSelect] = useState("all")

    return(
        <Stack spacing={2} direction="row" style={{ marginLeft:"2vh" }}>

            {
                select === "all" ? 
                <Button variant="contained">ALL</Button> 
                : 
                <Button onClick={() => {setSelect("all"); props.filterUpdate("all")} } variant="outlined">ALL</Button>
            }
            {
                select === "active" ? 
                <Button variant="contained">ACTIVE</Button> 
                : 
                <Button onClick={() => {setSelect("active"); props.filterUpdate("active")} } variant="outlined">ACTIVE</Button>
            }
            {
                select === "completed" ? 
                <Button variant="contained">COMPLETED</Button> 
                : 
                <Button onClick={() => {setSelect("completed"); props.filterUpdate("completed")} } variant="outlined">COMPLETED</Button>
            }

        </Stack>
    )
}

