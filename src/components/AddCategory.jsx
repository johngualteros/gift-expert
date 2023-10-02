import { useState } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      onNewCategory(inputValue);
      setInputValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <input type="text" onChange={handleInputChange} value={inputValue} />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
