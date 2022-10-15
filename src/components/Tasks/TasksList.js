import React from "react";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <TaskItem
          description={task.description}
          priority={task.priority}
          id={task.id}
          key={task.id}
          onDelete={props.onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TasksList;
