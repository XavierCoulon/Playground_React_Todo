import React, { useState } from "react";
import Button from "../UI/Button";

const AddTask = (props) => {
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("Normal");
  const [enteredDate, setEnteredDate] = useState(new Date());

  const addTaskHandler = (event) => {
    event.preventDefault();
    props.onAddTask(enteredDescription, enteredPriority, enteredDate);

    setEnteredDescription("");
    setEnteredPriority("Normal");
    setEnteredDate(new Date());
  };

  const descriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const priorityHandler = (event) => {
    setEnteredPriority(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <div>
      <form className="flex flex-col w-80 mb-4" onSubmit={addTaskHandler}>
        <div className="flex flex-row">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={enteredDescription}
            onChange={descriptionHandler}
          />
        </div>
        <div className="flex flex-row">
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
        </div>
        <div className="flex flex-row">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" label="Create" />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
