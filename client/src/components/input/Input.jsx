import React from "react";
import "./input.css";

function Input(props) {
  const { setSongInfos, ...rest } = props;
  return (
    <input
      type="text"
      {...rest}
      onChange={(e) =>
        setSongInfos((prev) => ({ ...prev, [e.target.name]: [e.target.value] }))
      }
    />
  );
}

export default Input;
