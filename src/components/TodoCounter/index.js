import './TodoCounter.css';
function TodoCounter({ completed, total }) {
  return (
    <>
      <h2 className={`TodoCounter ${completed == total && "completedTodos"}`}>Has completado <span>{completed}</span> de <span>{total}</span> tareas</h2>
      <h2 className={`TodoCounter ${completed < total && "completedTodos"} ${total == 0 && "completedTodos"}`}>Has completdado todas tus Tareas</h2 >
      <h2 className={`TodoCounter ${!total == 0 && "completedTodos"}`}>No tienes tareas pendientes</h2 >

    </>
  )
}

export { TodoCounter } 