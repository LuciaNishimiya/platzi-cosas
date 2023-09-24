import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoContainer } from "./components/TodoContainer";
import { TodoItem } from "./components/TodoItem";
import { CreateTodobutton } from "./components/CreateTodobutton";
import React, { useState } from "react";
import { useSaveStorage } from "./services/SaveStorage";

function App() {
  const [todos, saveTodos] = useSaveStorage("TODOS-HACERES-V1", []);

  const [inputCreateValue, setInputCreateValue] = useState("");

  const [searchValue, setSearchValue] = useState("");

  const totalTodos = todos.length;

  const completedTodos = todos.filter((todos) => todos.completed).length;

  const searchedTodos = todos.filter((todos) => {
    const todoLowerCase = todos.text.toLowerCase();
    const SearchLowerCaset = searchValue.toLowerCase();
    return todoLowerCase.includes(SearchLowerCaset);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const createTodo = (todo) => {
    if (todo) {
      const newTodo = { text: todo, completed: false };
      saveTodos([...todos, newTodo]);
      setInputCreateValue("");
    }
  };

  return (
    <div className="paper">
      <div className="lines">
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="text">
          <TodoCounter completed={completedTodos} total={totalTodos} />

          <TodoContainer>
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
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
            CreateButton={() => createTodo(inputCreateValue)}
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
