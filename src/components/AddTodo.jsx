import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../features/TodoSlice';
export const AddTodo = ()=>{
    const[input,setInput] = useState('');
    const dispatch = useDispatch();

    const addTodohandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    }
    return <>
    <div>Add Todo</div>
    <form onSubmit={addTodohandler}>
    <input type="text" placeholder="Enter a Todo..." value={input} onChange={(e)=>setInput(e.target.value)}></input>
    <button type="submit">Add Todo</button>
    </form>
    </>
}
