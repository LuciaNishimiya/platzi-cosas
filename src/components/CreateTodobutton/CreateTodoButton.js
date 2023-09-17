import { BsPlus } from "react-icons/bs";
import "./CreateTodoButton.css";

function CreateTodobutton({
    inputCreateValue,
    setInputCreateValue,
    CreateButton,
}) {
    return (
        <li className="CreateTodoButton">
            <input
                value={inputCreateValue}
                onChange={(event) => {
                    setInputCreateValue(event.target.value);
                }}
            />
            <BsPlus className="IconCreateTodo" onClick={CreateButton} />
        </li>
    );
}

export { CreateTodobutton };
