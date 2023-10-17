import { BsPlus } from "react-icons/bs";
import "./CreateTodoButton.css";

function CreateTodobutton({
    inputCreateValue,
    setInputCreateValue,
    createTodo,
    totalTodos,
    todoStatus }) {

    function CreateButton() {
        createTodo(inputCreateValue)
        setInputCreateValue("");
    }
    if (todoStatus === "Ready") 
    return (
        <li className="CreateTodoButton">
            <input
                value={inputCreateValue}
                placeholder={totalTodos === 0 ? "Escribe una nueva tarea aqui" : ""}
                onChange={(event) => {
                    setInputCreateValue(event.target.value);
                }}
            />
            <BsPlus className="IconCreateTodo" onClick={CreateButton} />
        </li>
    );
}

export { CreateTodobutton };
