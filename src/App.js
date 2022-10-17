import React, { useState } from "react";

import "./index.css";

import AddTask from "./components/Tasks/AddTask";
import TasksList from "./components/Tasks/TasksList";

const App = () => {
  const [tasksList, setTasksList] = useState([]);

  const addTaskHandler = (taskDescription, taskPriority, taskDate) => {
    setTasksList((previousTasks) => {
      return [
        ...previousTasks,

        {
          description: taskDescription,
          priority: taskPriority,
          date: taskDate,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const deleteTaskHandler = (taskId) => {
    setTasksList((previousTasks) => {
      return previousTasks.filter((task) => task.id !== taskId);
    });
  };

  return (
    <div className="flex flex-col ">
      <AddTask onAddTask={addTaskHandler} />
      <TasksList tasks={tasksList} onDeleteTask={deleteTaskHandler} />
    </div>
  );
};

export default App;
