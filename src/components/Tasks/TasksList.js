import React from "react";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  return (
    <div>
      <ul>
        {props.tasks.map((task) => (
          <TaskItem
            description={task.description}
            priority={task.priority}
            date={task.date}
            id={task.id}
            key={task.id}
            onDelete={props.onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
