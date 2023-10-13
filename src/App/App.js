import './App.css';
import { TodosStatus } from "../components/TodosStatus";
import { TodoSearch } from "../components/TodoSearch";
import { TodoContainer } from "../components/TodoContainer";
import { TodoItem } from "../components/TodoItem";
import { CreateTodobutton } from "../components/CreateTodobutton";
import { TodoLoading } from "../components/TodoLoading";
import React, { useState } from "react";
import { ManagerStorage } from "../services/ManagerStorage";

function App() {
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

    <div className="paper">
      <div className="lines">
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="text">

          <TodosStatus
            completed={completedTodos}
            total={totalTodos}
            status={todoStatus}
          />
          <TodoLoading status={todoStatus} />
          <TodoContainer>
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoContainer>

          <CreateTodobutton
            inputCreateValue={inputCreateValue}
            setInputCreateValue={setInputCreateValue}
            CreateButton={() => {
              createTodo(inputCreateValue)
              setInputCreateValue("");
            }}
            totalTodos={totalTodos}
            todoStatus={todoStatus}
          />
        </div>
      </div>
      <div className="holes hole-top"></div>
      <div className="holes hole-middle"></div>
      <div className="holes hole-bottom"></div>
    </div>
  );
}

export default App;
