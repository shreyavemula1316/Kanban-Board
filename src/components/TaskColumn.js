import React from "react";
import { useDrop } from "react-dnd";
import { TaskItem } from "./TaskItem";
import "./TaskColumn.css";

export const TaskColumn = ({
  title,
  tasks,
  onDeleteTask,
  onUpdateTaskStatus,
  status,
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item) => onUpdateTaskStatus(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`task-column ${isOver ? "droppable" : ""}`}>
      <div className="taskcard-item">
        <h2 className="task-column-heading">{title}</h2>
      </div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
};
