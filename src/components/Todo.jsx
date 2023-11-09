import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types'


export default function Todo(props) {
    console.log(props.data)

    const [text, setText] = useState("");
    const [edit, setEdit] = useState(false);
    const [editIdx, setEditIdx] = useState(false);  

    return(
        <>

            {   
                props.data.map( (val,idx) => {
                    if (props.filter === "all"){
                        return(
                            <>
                            <Stack spacing={2} direction="row">
                                <Checkbox
                                    checked={val.active}
                                    onChange={e => {props.taskUpdateState(idx)} }
                                />
                                { edit && editIdx==idx ? 
                                    <>
                                    <TextField fullWidth onChange={e => setText(e.target.value)}  value={text} id="outlined-basic" variant="outlined" />
                                    <Button onClick={() => {props.taskUpdateName(idx,text); setEdit(false) } } variant="contained">set</Button>
                                    </>
                                :
                                    <>
                                    <h2 style={{ marginTop:"0vh", marginBottom:"0vh", width:"140vh" }} > {val.name} </h2>
                                    <Button onClick={() => {setEdit(true); setEditIdx(idx) ; setText(val.name)} } variant="contained">EDIT</Button>
                                    </>
                                }
                                
                                <Button onClick={() => { props.deleteByIdx(idx) } } sx={{ bgcolor:"#E74C3C" }} variant="contained">Delete</Button>
                            </Stack>
                            <Divider />
                            </>
                        )
                    }else if (props.filter === "active") {
                        if (val.active == false){
                            return(
                                <>
                                <Stack spacing={2} direction="row">
                                    <Checkbox
                                        checked={val.active}
                                        onChange={e => {props.taskUpdateState(idx)} }
                                    />
                                    { edit && editIdx==idx ? 
                                        <>
                                        <TextField fullWidth onChange={e => setText(e.target.value)}  value={text} id="outlined-basic" variant="outlined" />
                                        <Button onClick={() => {props.taskUpdateName(idx,text); setEdit(false) } } variant="contained">set</Button>
                                        </>
                                    :
                                        <>
                                        <h2 style={{ marginTop:"0vh", marginBottom:"0vh", width:"140vh" }} > {val.name} </h2>
                                        <Button onClick={() => {setEdit(true); setEditIdx(idx) ; setText(val.name)} } variant="contained">EDIT</Button>
                                        </>
                                    }
                                    <Button onClick={() => { props.deleteByIdx(idx) } } sx={{ bgcolor:"#E74C3C" }} variant="contained">Delete</Button>
                                </Stack>
                                <Divider />
                                </>
                            )
                        }
                    }else if (props.filter === "completed") {
                        if (val.active == true){
                            return(
                                <>
                                <Stack spacing={2} direction="row">
                                    <Checkbox
                                        checked={val.active}
                                        onChange={e => {props.taskUpdateState(idx)} }
                                    />
                                    { edit && editIdx==idx ? 
                                        <>
                                        <TextField fullWidth onChange={e => setText(e.target.value)}  value={text} id="outlined-basic" variant="outlined" />
                                        <Button onClick={() => {props.taskUpdateName(idx,text); setEdit(false) } } variant="contained">set</Button>
                                        </>
                                    :
                                        <>
                                        <h2 style={{ marginTop:"0vh", marginBottom:"0vh", width:"140vh" }} > {val.name} </h2>
                                        <Button onClick={() => {setEdit(true); setEditIdx(idx) ; setText(val.name)} } variant="contained">EDIT</Button>
                                        </>
                                    }
                                    <Button onClick={() => { props.deleteByIdx(idx) } } sx={{ bgcolor:"#E74C3C" }} variant="contained">Delete</Button>
                                </Stack>
                                <Divider />
                                </>
                            )
                        }
                    }
                
                })
                
                
            }
        </> 


    )
}

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};
