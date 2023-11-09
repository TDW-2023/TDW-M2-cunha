import { useState, useEffect } from 'react'
import './ex1.css'
import TodoForm from './components/TodoForm'
import TodoListFilter from './components/TodoListFilter'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Todo from './components/Todo'


const data_tmp = [
  {
      active:false,
      name: "eafdngvkjfdsvjt"
  },
  {
      active:false,
      name: "ola2"
  },
  {
      active:false,
      name: "ola3"
  }
   
]

export default function EX1() {
  const [data, setData] = useState(data_tmp)
  const [filter, setFilter] = useState("all")

  const addTask = (value)=>{
    setData([...data, {active:false,name:value}]);
  }

  const filterUpdate = (value)=>{
    setFilter(value)
  }

  const taskUpdateState = (idx)=>{
    let value = [...data]
    value[idx].active = !value[idx].active
    setData(value)
  }

  const deleteByIdx = (idx)=>{
    let value = [...data]
    value.splice(idx, 1);
    setData(value)
  }

  const taskUpdateName = (idx,name)=>{
    let value = [...data]
    value[idx].name = name
    setData(value)
  }


  return (
    <Stack spacing={2}>

      <TodoForm data={data} addTask={addTask} />

      <TodoListFilter filterUpdate={filterUpdate}/>

      <Divider sx={{ borderBottomWidth: 5 }} />

      <Todo data={data} filter={filter} taskUpdateState={taskUpdateState} deleteByIdx={deleteByIdx} taskUpdateName={taskUpdateName} />

    </Stack>
  )
}

