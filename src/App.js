import React, { useState, useEffect } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TaskCard } from "./components/TaskCard";

function App() {
  const [allTodos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("allTodos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  }, [allTodos]);

  const handleAddTodo = (newTodoItem) => {
    setTodos([...allTodos, { ...newTodoItem, status: "todo" }]);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTodos = allTodos.filter((task) => task.id !== taskId);
    setTodos(updatedTodos);
  };

  const handleUpdateTaskStatus = (taskId, newStatus) => {
    const updatedTodos = allTodos.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = allTodos.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <div className="search-bar-container">
        <Header />
        <SearchBar onSearch={setSearchQuery} />
        <AddTask onAddTodo={handleAddTodo} />
        <TaskCard
          allTodos={filteredTodos}
          onDeleteTask={handleDeleteTask}
          onUpdateTaskStatus={handleUpdateTaskStatus}
        />
      </div>
    </div>
  );
}

export default App;
