import React from 'react'
import { updateTodo } from '../api';
import {ColorMap, Todo } from '../constants'
interface TodoItemProp extends Todo{
    onUpdate:(todo:Todo[])=>void;
}
const TodoItem = (props:TodoItemProp) => {
    const handleClick= async()=>{
       let  updatedTodo=await updateTodo({
            ...props,
            likes:props.likes+1,

        });
        props.onUpdate(updatedTodo);
    }
 
    return (
    <div onClick={handleClick}
    style={{padding:"5px" ,backgroundColor:ColorMap[props.type]}}>
        {props.message}-{props.likes}
    </div>
  )
}

export default TodoItem