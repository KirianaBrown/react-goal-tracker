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
      <div className="form-group">
        <label>Course Goal</label>
        <input type="text" onChange={onInputChangeHandler} value={newGoal} />
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoalForm;
