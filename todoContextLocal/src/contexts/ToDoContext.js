import {createContext, useContext} from 'react'

export const ToDoContext = createContext({})


export const usetoDo = () => {
    return useContext(ToDoContext)
}