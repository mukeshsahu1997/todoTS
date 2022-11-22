import React, { useEffect, useState } from 'react'
import { getTodo, updateTodo } from '../api';
import { Todo } from '../constants';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoApp = () => {
const [todos,setTodos]=useState<Todo[]>([]);

const onAdd=(todo:Todo)=>{
    setTodos([...todos,todo])
}

const onUpadte=(updatedTodo:Todo)=>{
    let updatedTodos=todos.map((todo)=>{
        if(todo.id===updatedTodo.id){
            return updatedTodo;
        }
        return todo;
    })

    setTodos(updatedTodos)
}
    useEffect(()=>{
        getTodo().then((d)=>{
            console.log(d);
        })
    },[])


  return (
    <div>
        <h1>Todo App</h1>
        <TodoInput onAdd={onAdd}/>
        {todos.map((todo)=>(
            <div key={todo.id}>
                <TodoItem 
                key={todo.id} 
                onUpdate={onUpadte}
                {...todo}/>
            </div>
        ))}
    </div>
  )
}

export default TodoApp