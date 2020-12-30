import React, { useEffect } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, status }) => {
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
  const items = todos.filter((item) => {
    if (status === "all") return true;
    return item.completed === (status === "completed");
  });

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {items.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
