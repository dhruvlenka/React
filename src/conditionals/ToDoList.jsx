import React, { useState } from 'react'

const ToDoList = () => {
    //todo
     const [todos, setTodos]= useState([
        {id:1, text: 'Learn React', completed: false},
        {id:2, text: 'Learn JavaScript', completed: false},
     ]);

     //todo, completion state
     const [showCompleted, setShowCompleted] = useState(true);

     //toggle
     const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed}:todo
        ));
     };
  return (
    <div>
        <h1> ToDo List </h1>
        {/* Using && operator: Show button only if there are todos */}
        {
            
            todos.length > 0 && (<button onClick={() => setShowCompleted(!showCompleted)}> {showCompleted ? 'Hide' : 'Show'} Completed </button>)
        }

        <ul>
          {/* Using || operator: Show todos or a fallback message */}
          {todos.length > 0 ? (
            todos
            .filter(todo => showCompleted || !todo.completed)
            .map(todo => (
                <li key={todo.id} onClick={() => toggleTodo(todo.id)} style={{textDecoration: todo.completed && 'line-through',cursor: 'pointer'}}>
                    {todo.text}
                </li>
            ))
        ) : (
            <p>No todos yet! Start adding some tasks.</p>
        )}
        </ul>
        {/* Using ! operator with &&: Show message when no completed todos */}
        {!todos.some(todo => todo.completed) && showCompleted && (
            <p> No completed tasks yet. </p>
        )}
    </div>
  );
}

export default ToDoList;