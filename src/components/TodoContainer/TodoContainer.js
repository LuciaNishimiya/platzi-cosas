import './TodoContainer.css';
function TodoContainer({ children }) {
    return (
        <ul className='TodoList'>{children}</ul>
    )
}

export { TodoContainer } 