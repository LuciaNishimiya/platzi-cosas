import "./TodoLoading.css";
import pen from "./pen.png"
function TodoLoading({ status }) {
    if (status === "Loading") return (
        <div class="pensil-Img-Container">
            <img className="pensil-Img" src={pen} alt="Lápiz" />
        </div>
    );
}

export { TodoLoading };
