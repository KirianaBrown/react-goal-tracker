import { useState } from "react";

import "./NewGoalForm.css";

const NewGoalForm = (props) => {
  const [newGoal, setNewGoal] = useState("");

  const onInputChangeHandler = (e) => {
    setNewGoal(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (newGoal.length > 0) {
      props.onGetNewGoal(newGoal);
      setNewGoal("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h4 className="form-header">Course Goals</h4>
      <div className="form-group">
        <input
          type="text"
          onChange={onInputChangeHandler}
          value={newGoal}
          className="form-input"
        />
      </div>
      <button type="submit" className="button">
        Add Goal
      </button>
    </form>
  );
};

export default NewGoalForm;
