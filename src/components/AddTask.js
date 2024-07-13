import React, { useState } from "react";
import "./AddTask.css";

export const AddTask = ({ onAddTodo }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = () => {
    if (newTitle.trim() === "" || newDescription.trim() === "") {
      alert("Please enter both title and description.");
      return;
    }

    const newTodoItem = {
      id: Math.random(),
      title: newTitle,
      description: newDescription,
      status: "todo" 
    };

    onAddTodo(newTodoItem);
    setNewTitle("");
    setNewDescription("");
  };

  return (
    <div className="task-wrapper">
      <div className="task-input">
        <div className="task-input-item">
          <label>Title</label>
          <input
            type="text"
            placeholder="Task Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>

        <div className="task-input-item">
          <label>Description</label>
          <input
            type="text"
            placeholder="Task Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>

        <div className="task-input-item">
          <button type="button" className="btn" onClick={handleAddTodo}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
