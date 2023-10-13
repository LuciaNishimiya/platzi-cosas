
import { useLocalStorage } from "../LocalStorage"
function ManagerStorage() {

    const { item: todos,
        loadingStatus: todoStatus,
        saveItem: saveTodos
    } = useLocalStorage({ itemName: "TODOS-HACERES-V1", initialValue: [] });

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