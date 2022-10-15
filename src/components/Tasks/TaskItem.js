import React from "react";
import Button from "../UI/Button";

const TaskItem = (props) => {
  const deleteHandler = (event) => {
    event.preventDefault();
    props.onDelete(props.id);
  };

  return (
    <li>
      {props.description} - {props.priority}
      <Button type="sumbit" label="Delete" onClick={deleteHandler} />
    </li>
  );
};

export default TaskItem;
