import { createContext } from "react";
import React, { useState } from "react";
import { ManagerStorage } from "../services/ManagerStorage";
const todoContext = createContext()

function TodoProvider({ children }) {
    const [inputCreateValue, setInputCreateValue] = useState("");
    const { createTodo, completeTodo, deleteTodo, todos, todoStatus } = ManagerStorage();

    const [searchValue, setSearchValue] = useState("");

    const totalTodos = todos.length;

    const completedTodos = todos.filter((todos) => todos.completed).length;

    const searchedTodos = todos.filter((todos) => {
        const todoLowerCase = todos.text.toLowerCase();
        const SearchLowerCaset = searchValue.toLowerCase();
        return todoLowerCase.includes(SearchLowerCaset);
    });


    return (
        <todoContext.Provider value={{
            setInputCreateValue,
            createTodo,
            completeTodo,
            deleteTodo,
            setSearchValue,
            todoStatus,
            inputCreateValue,
            completedTodos,
            totalTodos,
            searchValue,
            searchedTodos,
        }}>
            {children}
        </todoContext.Provider>)
}


export { TodoProvider, todoContext }