import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useRef } from 'react'
import PropTypes from 'prop-types'

export default function TodoForm(props) {

    //const [text, setText] = useState("");
    const textInput = useRef(null);

    return(
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <TextField fullWidth inputRef={textInput} id="outlined-basic" label="What needs to be done?" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
                <Button style={{ marginTop:"1vh" }} variant="contained" onClick={() => props.addTask(textInput.current.value) } >ADD</Button>
            </Grid>
        </Grid>
    )
}

TodoForm.propTypes = {
    addTask: PropTypes.func.isRequired,
};
