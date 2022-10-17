import React from "react";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div
      className="container flex justify-center mx-auto"
      onClick={props.onConfirm}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div className="max-w-sm p-6 bg-white divide-y divide-gray-500">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl">{props.title}</h3>
          </div>
          <div className="mt-4">
            <p className="mb-4 text-sm">{props.message}</p>
            <Button onClick={props.onConfirm} label="Confirm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
