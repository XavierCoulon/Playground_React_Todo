import React, { useState } from "react";

import AddTask from "./components/Tasks/AddTask";
import TasksList from "./components/Tasks/TasksList";

const App = () => {
  const [tasksList, setTasksList] = useState([]);

  const addTaskHandler = (taskDescription, taskPriority) => {
    setTasksList((previousTasks) => {
      return [
        ...previousTasks,

        {
          description: taskDescription,
          priority: taskPriority,
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
    <div>
      <AddTask onAddTask={addTaskHandler} />
      <TasksList tasks={tasksList} onDeleteTask={deleteTaskHandler} />
    </div>
  );
};

export default App;
