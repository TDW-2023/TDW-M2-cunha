import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useState } from 'react'

export default function TodoForm(props) {

    const [text, setText] = useState("");

    return(
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <TextField fullWidth onChange={e => setText(e.target.value)}   id="outlined-basic" label="What needs to be done?" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
                <Button style={{ marginTop:"1vh" }} variant="contained" onClick={() => props.addTask(text)} >ADD</Button>
            </Grid>
        </Grid>
    )
}

