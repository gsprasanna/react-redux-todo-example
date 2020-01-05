import React from "react";

export function InputWithButton({ handleClick, buttonValue }) {
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <button
        onClick={() => {
          handleClick(value);
          setValue("");
        }}
      >
        {buttonValue}
      </button>
    </>
  );
}
