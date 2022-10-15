import React from "react";

const Button = (props) => {
  return (
    <div>
      <button type={props.type} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
};

export default Button;
