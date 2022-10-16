import React from "react";
import Button from "../UI/Button";

const TaskItem = (props) => {
  const deleteHandler = (event) => {
    event.preventDefault();
    props.onDelete(props.id);
  };

  return (
    <li className="flex justify-between">
      <span className="flex items-center">
        {props.description} - {props.priority} - {props.date}
      </span>

      <Button type="sumbit" label="Delete" onClick={deleteHandler} />
    </li>
  );
};

export default TaskItem;
