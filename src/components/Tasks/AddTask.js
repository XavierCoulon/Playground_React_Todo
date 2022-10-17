import React, { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddTask = (props) => {
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("Normal");
  const [enteredDate, setEnteredDate] = useState("");
  const [error, setError] = useState();

  const addTaskHandler = (event) => {
    event.preventDefault();

    if (enteredDescription.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a description.",
      });
      return;
    }

    props.onAddTask(enteredDescription, enteredPriority, enteredDate);

    setEnteredDescription("");
    setEnteredPriority("Normal");
    setEnteredDate("");
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
