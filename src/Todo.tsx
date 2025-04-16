import React, { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Jest test</h1>
      <div className="flex gap-2">
        <input
          data-testid="todo-input"
          className="bg-cyan-500 text-white px-2"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          data-testid="add-button"
          className="bg-pink-500 px-4 text-white"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <div className="m-2">
        {todos.map((todo, key) => (
          <div
            data-testId={`delete-testId-${key}`}
            key={key}
            className="bg-amber-200 flex justify-between mb-2 px-4 py-2"
          >
            <span>{todo.text}</span>
            <button
              className="bg-violet-500 px-2 text-white"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
