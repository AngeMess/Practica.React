import React, { useState } from "react";
import "./Todo.css";

// Todo.jsx

const Todo = () => {
    // Estado para manejar la lista de tareas
    const [todos, setTodos] = useState([]);
    // Estado para manejar el valor del input
    const [task, setTask] = useState("");

    // Función para agregar una nueva tarea
    const addTodo = () => {
        if (task.trim() === "") return; // Evitar agregar tareas vacías
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask(""); // Limpiar el input
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    };

    // marcar la tarea como completada
    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
        



    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                        <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>

                        <button type="button" class="btn btn-outline-danger" onClick={() => deleteTodo(todo.id)}>Eliminar</button>

                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;