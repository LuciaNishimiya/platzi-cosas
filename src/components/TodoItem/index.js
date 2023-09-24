import "./TodoItem.css";
import { BsCheckLg, BsX } from "react-icons/bs";


function TodoItem({ onComplete, completed, onDelete, text }) {
  return (
    <li className="TodoItem">
      <BsCheckLg
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete} />


      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>



        <BsX
          className="Icon Icon-delete"
          onClick={onDelete} />
        {text}
      </p>




    </li>
  );
}

export { TodoItem };
