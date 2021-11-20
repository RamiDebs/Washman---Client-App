import React, { useRef } from "react";

import "./AppFormFieldCSS.css";

interface props {
  textValue: string;
  btnText: string;
  placeholderText: string;

  onChange: React.Dispatch<React.SetStateAction<string>>;
  handleOnSubmit: (e: React.FormEvent) => void;
}

const InputFelid: React.FC<props> = ({
  placeholderText,
  textValue,
  btnText,
  onChange,
  handleOnSubmit,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleOnSubmit(e);
        inputRef.current?.blur();
      }}
    >
      <input
        placeholder={placeholderText}
        value={textValue}
        onChange={(e) => onChange(e.target.value)}
        name="text"
        type="number"
        ref={inputRef}
        className="todo-input edit"
      />
      <button
        onSubmit={(e) => {
          handleOnSubmit(e);
          inputRef.current?.blur();
        }}
        className="todo-button edit"
      >
        {btnText}
      </button>
    </form>
  );
};

export default InputFelid;
