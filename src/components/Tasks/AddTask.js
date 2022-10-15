import React, { useState } from "react";
import Button from "../UI/Button";

const AddTask = (props) => {
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("Normal");

  const addTaskHandler = (event) => {
    event.preventDefault();
    props.onAddTask(enteredDescription, enteredPriority);

    setEnteredDescription("");
    setEnteredPriority("Normal");
  };

  const descriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const priorityHandler = (event) => {
    setEnteredPriority(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addTaskHandler}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={enteredDescription}
          onChange={descriptionHandler}
        />
        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          value={enteredPriority}
          // defaultValue={enteredPriority}
          id="priority"
          onChange={priorityHandler}
        >
          <option value="High">High</option>
          <option value="Normal">Normal</option>
          <option vaue="Low">Low</option>
        </select>
        <Button type="submit" label="Create" />
      </form>
    </div>
  );
};

export default AddTask;
