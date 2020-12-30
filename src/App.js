import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : []
  });
  const [status, setStatus] = useState("all");

  return (
    <div className="App">
      <header className="App-header">
        <p>Yana's Todo List</p>
      </header>
      <Form
        inputTodo={inputTodo}
        todos={todos}
        setTodos={setTodos}
        setInputTodo={setInputTodo}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} status={status} />
    </div>
  );
}

export default App;
