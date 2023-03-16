import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));        
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        //dispacth es la funcion que usamos para mandar la accion
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    
    const handleToggleTodo = (id) => {
        
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return{
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,

        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }


}
