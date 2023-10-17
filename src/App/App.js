import './App.css';
import { TodosStatus } from "../components/TodosStatus";
import { TodoSearch } from "../components/TodoSearch";
import { TodoContainer } from "../components/TodoContainer";
import { TodoItem } from "../components/TodoItem";
import { CreateTodobutton } from "../components/CreateTodobutton";
import { TodoLoading } from "../components/TodoLoading";
import { todoContext } from '../context';
import { useContext } from 'react';
import { ModalPostIt } from '../components/ModalPostIt';

function App() {
  const {
    completedTodos,
    totalTodos,
    todoStatus, // 1773
    completeTodo,
    deleteTodo,
    searchedTodos,
    inputCreateValue,
    setInputCreateValue,
    createTodo,
    searchValue,
    setSearchValue

  } = useContext(todoContext)

  return (
    <div className="paper">
      <div className="lines">
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue} />
        <div className="text">

          <TodosStatus
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            todoStatus={todoStatus} />
          <TodoLoading />

          <TodoContainer>
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)} />
            ))}
          </TodoContainer>
          <CreateTodobutton
            inputCreateValue={inputCreateValue}
            setInputCreateValue={setInputCreateValue}
            createTodo={createTodo}
            totalTodos={totalTodos}
            todoStatus={todoStatus} />
        </div>
      </div>
      <div className="holes hole-top"></div>
      <div className="holes hole-middle"></div>
      <div className="holes hole-bottom"></div>
    </div>
  );
}

export default App;
