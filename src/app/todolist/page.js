"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodo } from "../redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((data) => data.todoInfo.todos || []);
  const [todo, setTodo] = useState("");
  const handleTodo = () => {
    dispatch(addTodos(todo));
    setTodo("");
  };
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <>
     
      <div className="add-user">
      <h3>Add Todo </h3>
        <input
          type="text"
          value={todo}
          placeholder="Add new todo"
          onChange={(e) => setTodo(e.target.value)}
        />

        <button onClick={handleTodo}>Add todo</button>
      </div>
      <div className="display-user">
        <h3>Todo list</h3>
        {todos?.map((item) => (
          <div key={item.id} className="user-item">
            <span>{item.name}</span>
            <button onClick={() => handleRemoveTodo(item.id)}>remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
