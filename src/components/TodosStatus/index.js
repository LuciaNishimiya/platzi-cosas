import './todosStatus.css';
function TodosStatus({ completed, total, status }) {
  let message = '';
  if (status === "Error") {
    message = 'Se produjo un error al cargar';
  } else if (status === "Loading") {
    message = 'Cargando...';
  } else if (total === 0) {
    message = 'No tienes tareas pendientes';
  } else if (completed === total) {
    message = `Has completado todas tus tareas(${total})`;
  } else {
    message = `Has completado ${completed} de ${total} tareas`;
  }

  return (
    <h2 className={`TodoCounter`}>
      {message}
    </h2>
  )
}

export { TodosStatus } 
