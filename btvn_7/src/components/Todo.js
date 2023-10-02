import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
    console.log(todos);
    if (newTodo.trim() == "") {
      alert("pls enter sth");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleCheckedTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div className="todo_app">
      <h1 className="title">TO DO LIST</h1>
      <div className="feature">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter your tasks"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul className="task_list">
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ backgroundColor: todo.checked ? "red" : "white" }}
          >
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleCheckedTodo(index)}
            />
            <span>{todo.text}</span>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="btn_delete"
            >
              delede
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
