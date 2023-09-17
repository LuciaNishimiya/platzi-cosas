import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoContainer } from "./components/TodoContainer/TodoContainer";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodobutton } from "./components/CreateTodobutton/CreateTodoButton";
import React, { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState(""); // console.log(searchValue);

  const [inputCreateValue, setInputCreateValue] = useState(""); // console.log(searchValue);

  const [todos, setTodos] = useState([
    { text: "Crear mi primera tarea", completed: false },
  ]);

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
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    if (todo) {
      const newTodo = { text: todo, completed: false };
      setTodos([...todos, newTodo]);
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
