import React, { useState } from 'react';

function TodoList() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (name && email) {
      const newTodo = { name, email };
      setTodos([...todos, newTodo]);
      setName('');
      setEmail('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="add-button">Add</button>
      </form>
      <div className="todos">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <span>{todo.name} ({todo.email})</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
