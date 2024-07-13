import React from "react";
import "./TaskCard.css";
import { TaskColumn } from "./TaskColumn";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const TaskCard = ({ allTodos, onDeleteTask, onUpdateTaskStatus }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="taskcard-columns">
        <TaskColumn
          title="To Do"
          tasks={allTodos.filter((task) => task.status === "todo")}
          onDeleteTask={onDeleteTask}
          onUpdateTaskStatus={onUpdateTaskStatus}
          status="todo"
        />
        <TaskColumn
          title="In Progress"
          tasks={allTodos.filter((task) => task.status === "inprogress")}
          onDeleteTask={onDeleteTask}
          onUpdateTaskStatus={onUpdateTaskStatus}
          status="inprogress"
        />
        <TaskColumn
          title="Review"
          tasks={allTodos.filter((task) => task.status === "review")}
          onDeleteTask={onDeleteTask}
          onUpdateTaskStatus={onUpdateTaskStatus}
          status="review"
        />
        <TaskColumn
          title="Done"
          tasks={allTodos.filter((task) => task.status === "done")}
          onDeleteTask={onDeleteTask}
          onUpdateTaskStatus={onUpdateTaskStatus}
          status="done"
        />
      </div>
    </DndProvider>
  );
};
