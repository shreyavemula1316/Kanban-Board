import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDrag } from 'react-dnd';
import "./TaskItem.css";

export const TaskItem = ({ task, onDeleteTask }) => {
  const [, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id }
  });

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <div ref={drag} className="task-item">
      <div className="task-text">
        <h3>{task.title}</h3>
      </div>
      <div className="task-text-bottom-line">
        <p>{task.description}</p>
        <FaTrash className="delete-icon" onClick={handleDelete} />
      </div>
    </div>
  );
};
