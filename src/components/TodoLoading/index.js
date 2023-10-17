import "./TodoLoading.css";
import pen from "./pen.png"
import { useContext } from 'react';
import { todoContext } from '../../context';
function TodoLoading() {
    const { todoStatus } = useContext(todoContext)

    if (todoStatus === "Loading") return (
        <div className="pensil-Img-Container">
            <img className="pensil-Img" src={pen} alt="Lápiz" />
        </div>
    );
}

export { TodoLoading };
