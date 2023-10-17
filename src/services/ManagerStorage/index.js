
import { useLocalStorage } from "../LocalStorage"
function ManagerStorage() {

    const { item: todos,
        loadingStatus: todoStatus,
        saveItem: saveTodos
    } = useLocalStorage({ itemName: "TODOS-HACERES-V1", initialValue: [] });

    const completeTodo = (todoId) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id === todoId);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (todoId) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id === todoId);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const createTodo = (text) => {
        if (text) {
            const timestamp = new Date().getTime();
            const newTodo = { id: timestamp, text, completed: false };
            saveTodos([...todos, newTodo]);
        }
    };

    return {
        createTodo,
        completeTodo,
        deleteTodo,
        todos,
        todoStatus,
    }
}
export { ManagerStorage }