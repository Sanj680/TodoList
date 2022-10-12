import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
   
    <form onSubmit={handleSubmit}>
    <div className="input">
      <input
        value={userInput}
        type="text"
        required={true}
        onChange={handleChange}
        placeholder="Enter task..." />
<button  class="additem"> <i class="fa fa-plus"></i> Add Item  </button>

    </div>
    </form>
  );
};

export default ToDoForm;
