import './todosStatus.css';
import React from 'react';
import { todoContext } from '../../context';

function TodosStatus({ completedTodos, totalTodos, todoStatus }) {
  let message = '';
  if (todoStatus === "Error") {
    message = 'Se produjo un error al cargar';
  } else if (todoStatus === "Loading") {
    message = (<><span>Cargando</span><span className="dotLoading1">.</span><span className="dotLoading2">.</span><span className="dotLoading3">.</span></>);
  } else if (totalTodos === 0) {
    message = 'No tienes tareas pendientes';
  } else if (completedTodos === totalTodos) {
    message = `Has completado todas tus tareas(${totalTodos})`;
  } else {
    message = `Has completado ${completedTodos} de ${totalTodos} tareas`;
  }

  return (
    <h2 className={`TodoCounter`}>
      {message}
    </h2>
  )
}

export { TodosStatus } 
